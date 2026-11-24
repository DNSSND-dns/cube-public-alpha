"use strict";
const config = window.CUBE_CONFIG;
const $ = (id) => document.getElementById(id);
const status = (id, message, error = false) => {
  $(id).textContent = message;
  $(id).classList.toggle("error", error);
};
const httpsURL = (value) => {
  try { const url = new URL(value); return url.protocol === "https:" ? url : null; }
  catch { return null; }
};
async function request(url, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } finally { clearTimeout(timer); }
}
const projectName = config.projectName.trim() || "CUBE";
document.title = `${projectName} — Public Alpha`;
document.querySelectorAll("[data-project]").forEach(el => { el.textContent = projectName; });
for (const social of config.socials) {
  const url = httpsURL(social.url);
  if (!url) continue;
  const link = document.createElement("a");
  link.href = url.href; link.textContent = social.label;
  link.target = "_blank"; link.rel = "noopener noreferrer";
  $("socials").append(link);
}
// Use actual screenshots only; placeholders are not fictional gameplay imagery.
const screenshots = config.screenshots;
for (let i = 0; i < Math.max(3, screenshots.length); i++) {
  const shot = screenshots[i];
  const tile = document.createElement(shot ? "button" : "div");
  tile.className = "shot placeholder";
  const placeholder = () => {
    tile.replaceChildren();
    const number = document.createElement("span"); number.textContent = `0${i + 1}`;
    const label = document.createElement("small"); label.textContent = "SCREENSHOT COMING SOON";
    tile.append(number, label);
    if (shot) { tile.disabled = true; tile.setAttribute("aria-label", "Screenshot unavailable"); }
  };
  if (shot) {
    tile.type = "button";
    tile.setAttribute("aria-label", `Enlarge: ${shot.alt || "Screenshot"}`);
    const img = document.createElement("img");
    img.src = shot.src; img.alt = shot.alt || "CUBE gameplay screenshot"; img.loading = "lazy";
    img.addEventListener("error", placeholder, { once: true });
    tile.append(img);
    tile.addEventListener("click", () => {
      $("full-image").src = shot.src; $("full-image").alt = img.alt;
      $("lightbox").showModal();
    });
  } else placeholder();
  $("gallery").append(tile);
}
$("close-lightbox").addEventListener("click", () => $("lightbox").close());
$("lightbox").addEventListener("click", event => { if (event.target === $("lightbox")) $("lightbox").close(); });
if (/^[a-zA-Z0-9_-]{11}$/.test(config.youtubeVideoId)) {
  const frame = document.createElement("iframe");
  frame.src = `https://www.youtube-nocookie.com/embed/${config.youtubeVideoId}`;
  frame.title = `${projectName} gameplay`; frame.loading = "lazy";
  frame.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen";
  frame.allowFullscreen = true; frame.referrerPolicy = "strict-origin-when-cross-origin";
  $("video").replaceChildren(frame); $("video").classList.remove("placeholder");
}
async function releases() {
  const { owner, repository } = config.github;
  if (!owner || !repository) {
    status("release-status", "Downloads will open when the public alpha build is published."); return;
  }
  const base = `https://github.com/${encodeURIComponent(owner)}/${encodeURIComponent(repository)}`;
  $("releases").href = `${base}/releases`; $("releases").hidden = false;
  status("release-status", "Looking for the latest build…");
  try {
    const release = await request(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repository)}/releases/latest`, { headers: { Accept: "application/vnd.github+json" } });
    $("version").textContent = `PUBLIC ALPHA / ${release.tag_name}`;
    const patterns = { windows: /(?:^|[._ -])(windows|win(?:32|64)?)(?:[._ -]|$)/i, linux: /linux/i, macos: /macos|mac[_ -]?os|osx|darwin/i };
    let count = 0;
    for (const [platform, pattern] of Object.entries(patterns)) {
      const asset = (release.assets || []).find(a => /\.zip$/i.test(a.name) && pattern.test(a.name));
      const url = asset && httpsURL(asset.browser_download_url);
      if (!url || url.hostname !== "github.com" || !url.pathname.startsWith(`/${owner}/${repository}/releases/download/`)) continue;
      const link = $(platform); link.href = url.href; link.removeAttribute("aria-disabled");
      link.textContent = `Download ZIP ↓ · ${(asset.size / 1048576).toFixed(0)} MB`;
      count++;
    }
    status("release-status", count ? "ZIP archives · Hosted on GitHub Releases" : "No matching ZIP builds in this release. Visit All releases below.");
  } catch {
    status("release-status", "Could not load the latest build. Download from All releases below.", true);
  }
}
void releases();
const supabaseURL = httpsURL(config.supabase.url);
const key = config.supabase.publishableKey.trim();
const ready = Boolean(supabaseURL && key);
const form = $("feedback-form");
let offset = 0, loading = false, lastSent = 0, started = Date.now();
// Publishable keys are not JWTs: only legacy anon JWT keys use Authorization.
const headers = { apikey: key, "Content-Type": "application/json" };
if (key.startsWith("eyJ")) headers.Authorization = `Bearer ${key}`;
const endpoint = ready ? `${supabaseURL.origin}/rest/v1/comments` : "";
function renderComment(comment, prepend = false) {
  if ([...$("comments").children].some(el => el.dataset.id === String(comment.id))) return;
  const article = document.createElement("article"); article.className = "comment";
  article.dataset.id = String(comment.id);
  const head = document.createElement("header"), name = document.createElement("strong"), time = document.createElement("time"), body = document.createElement("p");
  const identity = document.createElement("span"); identity.className = "comment-identity";
  name.textContent = comment.is_owner === true ? "DNS" : comment.nickname;
  identity.append(name);
  if (comment.is_owner === true) {
    const badge = document.createElement("span"); badge.className = "owner-badge";
    badge.textContent = "· OWNER"; identity.append(badge);
  }
  body.textContent = comment.message;
  const date = new Date(comment.created_at);
  if (!Number.isNaN(date.valueOf())) { time.dateTime = date.toISOString(); time.textContent = date.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }); }
  head.append(identity, time); article.append(head, body);
  if (prepend) $("comments").prepend(article); else $("comments").append(article);
}
async function loadComments(reset = false) {
  if (!ready || loading) return;
  loading = true; $("reload").disabled = true; $("more").disabled = true;
  status("comments-status", "Loading field notes…");
  try {
    const start = reset ? 0 : offset;
    const rows = await request(`${endpoint}?select=*&order=created_at.desc,id.desc&limit=30&offset=${start}`, { headers });
    if (!Array.isArray(rows)) throw new Error("Invalid response");
    if (reset) $("comments").replaceChildren();
    rows.forEach(row => renderComment(row)); offset = start + rows.length;
    $("more").hidden = rows.length < 30;
    status("comments-status", offset ? "" : "No field notes yet. Be the first to leave one.");
  } catch { status("comments-status", "Could not load comments. Please try Refresh.", true); }
  finally { loading = false; $("reload").disabled = false; $("more").disabled = false; }
}
$("reload").addEventListener("click", () => void loadComments(true));
$("more").addEventListener("click", () => void loadComments());
if (!ready) {
  form.querySelectorAll("input,textarea,button").forEach(el => { el.disabled = true; });
  $("reload").disabled = true;
  status("comments-status", "Feedback will open when the comment service is connected.");
} else void loadComments(true);
// Never send an OWNER attempt to the public INSERT route, even on failure.
form.elements.nickname.addEventListener("input", () => {
  form.elements.nickname.type = /^\s*owner\s*:/i.test(form.elements.nickname.value) ? "password" : "text";
});
form.addEventListener("submit", async event => {
  event.preventDefault();
  if (!ready || !form.reportValidity()) return;
  const rawNickname = form.elements.nickname.value;
  const ownerAttempt = /^\s*owner/i.test(rawNickname);
  const ownerMatch = /^\s*owner\s*:(.*)$/is.exec(rawNickname);
  const nickname = rawNickname.trim(), message = form.elements.message.value.trim();
  // Clear credentials before requests and before showing any error.
  if (ownerAttempt) { form.elements.nickname.value = ""; form.elements.nickname.type = "text"; }
  if (ownerAttempt && (!ownerMatch || [...ownerMatch[1]].length < 1 || [...ownerMatch[1]].length > 256)) {
    status("send-status", "Could not confirm submission. Refresh comments before retrying; your message may already be saved.", true); return;
  }
  if (form.elements.website.value || Date.now() - started < 2500) {
    status("send-status", "Please wait a moment before sending.", true); return;
  }
  if (Date.now() - lastSent < 30000) { status("send-status", "Please wait 30 seconds between comments.", true); return; }
  if ((!ownerAttempt && ([...nickname].length < 2 || [...nickname].length > 30)) || [...message].length < 3 || [...message].length > 1000) {
    status("send-status", "Nickname: 2–30 characters. Comment: 3–1000 characters.", true); return;
  }
  const button = form.querySelector("button[type=submit]"); button.disabled = true;
  status("send-status", "Sending…");
  try {
    const target = ownerAttempt
      ? `${supabaseURL.origin}/functions/v1/${encodeURIComponent(config.supabase.ownerFunction || "owner-comment")}`
      : endpoint;
    const rows = await request(target, {
      method: "POST",
      headers: ownerAttempt ? { apikey: key, "Content-Type": "application/json" } : { ...headers, Prefer: "return=representation" },
      body: JSON.stringify(ownerAttempt ? { secret: ownerMatch[1], message } : { nickname, message }),
    });
    lastSent = Date.now(); form.elements.message.value = ""; started = Date.now();
    if (Array.isArray(rows)) rows.forEach(row => renderComment(row, true));
    status("send-status", "Transmission received. Thank you.");
    status("comments-status", "");
    // Refresh pagination so a newly inserted row does not shift subsequent offsets.
    void loadComments(true);
  } catch {
    status("send-status", "Could not confirm submission. Refresh comments before retrying; your message may already be saved.", true);
  } finally { button.disabled = false; }
});

// Enable the form only after its preventDefault handler is installed.
$("feedback-fields").disabled = !ready;
