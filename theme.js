"use strict";
// Apply the stored theme before the stylesheet paints the page.
(() => {
  let theme = "light";
  try {
    const saved = localStorage.getItem("cube-theme");
    if (saved === "dark" || saved === "light") theme = saved;
  } catch {}
  const apply = () => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === "light" ? "#f4f5f7" : "#090a0b";
    const button = document.getElementById("theme-toggle");
    if (button) button.setAttribute("aria-pressed", String(theme === "light"));
  };
  apply();
  document.addEventListener("DOMContentLoaded", () => {
    apply();
    document.getElementById("theme-toggle").addEventListener("click", () => {
      theme = theme === "light" ? "dark" : "light";
      apply();
      try { localStorage.setItem("cube-theme", theme); } catch {}
    });
  });
})();
