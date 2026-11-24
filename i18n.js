"use strict";
// Source English strings are retained separately; user comments are never translated.
(() => {
  const rows = [["About", "Об игре", "게임 소개", "ゲームについて"], ["Screenshots", "Скриншоты", "스크린샷", "スクリーンショット"], ["Feedback", "Отзывы", "피드백", "フィードバック"], ["Download ↗", "Скачать ↗", "다운로드 ↗", "ダウンロード ↗"], ["Skip to content", "К содержимому", "본문으로 이동", "本文へ移動"], ["Main navigation", "Основная навигация", "주요 메뉴", "メインナビゲーション"], ["PUBLIC ALPHA", "ОТКРЫТАЯ АЛЬФА", "공개 알파", "パブリックアルファ"], ["There is no way out.", "Выхода нет.", "출구는 없다.", "出口はない。"], ["Only another room.", "Только ещё одна комната.", "또 다른 방이 있을 뿐.", "ただ、次の部屋があるだけ。"], ["An experimental exploration game. Unfamiliar rooms, shifting perspectives, and the uneasy feeling that you have been here before.", "Экспериментальная игра об исследовании. Незнакомые комнаты, меняющееся восприятие и тревожное чувство, что вы уже здесь были.", "낯선 방, 뒤바뀌는 시점, 그리고 이곳에 와 본 듯한 불안한 기시감. 실험적인 탐험 게임입니다.", "見知らぬ部屋、変わり続ける視点、そして以前ここに来たような不安な感覚。実験的な探索ゲームです。"], ["Download Alpha", "Скачать альфу", "알파 다운로드", "アルファ版をダウンロード"], ["Explore the gameplay ↗", "Посмотреть геймплей ↗", "게임플레이 보기 ↗", "ゲームプレイを見る ↗"], ["UNKNOWN", "НЕИЗВЕСТНО", "알 수 없음", "不明"], ["SPATIAL REFERENCE LOST", "ПРОСТРАНСТВЕННЫЙ ОРИЕНТИР ПОТЕРЯН", "공간 기준 상실", "空間座標を喪失"], ["EXPERIMENTAL. UNPREDICTABLE. UNFINISHED.", "ЭКСПЕРИМЕНТАЛЬНО. НЕПРЕДСКАЗУЕМО. НЕ ЗАВЕРШЕНО.", "실험적. 예측 불가. 미완성.", "実験的。予測不能。未完成。"], ["ENTER THE COMPLEX ↓", "ВОЙТИ В КОМПЛЕКС ↓", "단지 진입 ↓", "施設に入る ↓"], ["01 / THE COMPLEX", "01 / КОМПЛЕКС", "01 / 단지", "01 / 施設"], ["Every door is", "Каждая дверь —", "모든 문은", "どの扉も"], ["another question.", "новый вопрос.", "또 하나의 질문.", "新たな問い。"], ["Enter a labyrinth of unusual rooms where familiar rules become uncertain. Explore, lose your sense of direction, and discover what happens when gravity stops being a constant.", "Войдите в лабиринт необычных комнат, где привычные правила перестают действовать. Исследуйте, теряйте ориентиры и узнайте, что происходит, когда гравитация перестаёт быть постоянной.", "익숙한 규칙마저 불확실해지는 기묘한 방들의 미로에 들어서세요. 탐험하고, 방향 감각을 잃고, 중력이 더 이상 일정하지 않을 때 무슨 일이 벌어지는지 알아보세요.", "慣れ親しんだルールが曖昧になる、奇妙な部屋の迷宮へ。探索し、方向感覚を失い、重力が一定でなくなったときに何が起こるか確かめてください。"], ["Encounter other players and bots inside an atmosphere of quiet uncertainty. Observe your surroundings. There is more to a room than its walls.", "Встречайте других игроков и ботов среди тихой неизвестности. Наблюдайте за окружением. Комната — это больше, чем её стены.", "고요한 불확실성 속에서 다른 플레이어와 봇을 만나세요. 주변을 관찰하세요. 방에는 벽 너머의 무언가가 있습니다.", "静かな不確かさの中で、ほかのプレイヤーやボットと出会います。周囲を観察してください。部屋には壁以上の何かがあります。"], ["This is a public alpha. Expect rough edges, strange behaviour, and a world still taking shape. Your feedback helps shape what comes next.", "Это открытая альфа. Возможны недоработки и странности: этот мир ещё формируется. Ваши отзывы помогают определить, каким он станет.", "공개 알파 버전입니다. 미흡한 부분과 이상한 동작이 있을 수 있으며, 세계는 아직 만들어지고 있습니다. 여러분의 피드백이 다음 단계를 만듭니다.", "これはパブリックアルファ版です。未完成の部分や不思議な挙動があり、世界はまだ形作られている途中です。皆さんの声が、これからの姿を決めます。"], ["02 / FIELD RECORDINGS", "02 / ЗАПИСИ НАБЛЮДЕНИЙ", "02 / 현장 기록", "02 / 現場記録"], ["Fragments from inside.", "Фрагменты изнутри.", "내부의 단편들.", "内部の断片。"], ["03 / OBSERVATION", "03 / НАБЛЮДЕНИЕ", "03 / 관찰", "03 / 観察"], ["Gameplay", "Геймплей", "게임플레이", "ゲームプレイ"], ["Footage is on its way.", "Видео скоро появится.", "영상 준비 중입니다.", "映像を準備中です。"], ["Gameplay video coming soon", "Скоро здесь будет геймплей", "게임플레이 영상 공개 예정", "ゲームプレイ映像を近日公開"], ["04 / ACCESS POINT", "04 / ТОЧКА ДОСТУПА", "04 / 접근 지점", "04 / アクセスポイント"], ["Enter the alpha.", "Войдите в альфу.", "알파에 참여하세요.", "アルファ版の世界へ。"], ["Choose your platform. Find your own way.", "Выберите платформу. Найдите свой путь.", "플랫폼을 선택하고 자신만의 길을 찾으세요.", "プラットフォームを選び、自分の道を見つけてください。"], ["PRIMARY RELEASE", "ОСНОВНАЯ ВЕРСИЯ", "주요 버전", "メイン版"], ["SUPPORTED", "ПОДДЕРЖИВАЕТСЯ", "지원 버전", "サポート対象"], ["EXPERIMENTAL", "ЭКСПЕРИМЕНТАЛЬНАЯ", "실험적 버전", "実験版"], ["Not available yet", "Пока недоступно", "아직 제공되지 않음", "準備中"], ["Universal · Intel + Apple Silicon", "Универсальная · Intel + Apple Silicon", "유니버설 · Intel + Apple Silicon", "ユニバーサル · Intel + Apple Silicon"], ["All releases ↗", "Все релизы ↗", "모든 릴리스 ↗", "すべてのリリース ↗"], ["05 / TRANSMISSION", "05 / ПЕРЕДАЧА", "05 / 전송", "05 / 通信"], ["Leave a trace.", "Оставьте след.", "흔적을 남기세요.", "痕跡を残そう。"], ["Found a bug? Felt something strange?", "Нашли баг? Почувствовали что-то странное?", "버그를 찾았나요? 이상한 느낌이 들었나요?", "バグを見つけましたか？何か奇妙に感じましたか？"], ["Tell us what happened.", "Расскажите, что произошло.", "무슨 일이 있었는지 알려주세요.", "何が起きたか教えてください。"], ["Nickname", "Никнейм", "닉네임", "ニックネーム"], ["Comment", "Комментарий", "댓글", "コメント"], ["Your callsign", "Ваш позывной", "당신의 호출명", "あなたのコールサイン"], ["Your experience inside the CUBE…", "Ваш опыт внутри CUBE…", "CUBE 안에서의 경험을 들려주세요…", "CUBEでの体験を教えてください…"], ["Website", "Сайт", "웹사이트", "ウェブサイト"], ["No account needed. Comments are public.", "Без регистрации. Комментарии публичны.", "가입이 필요 없습니다. 댓글은 공개됩니다.", "登録不要。コメントは公開されます。"], ["Send ↗", "Отправить ↗", "보내기 ↗", "送信 ↗"], ["Field notes", "Записи исследователей", "현장 노트", "探索記録"], ["Refresh ↻", "Обновить ↻", "새로고침 ↻", "更新 ↻"], ["Load more", "Показать ещё", "더 보기", "もっと見る"], ["Screenshot viewer", "Просмотр скриншота", "스크린샷 보기", "スクリーンショット表示"], ["Close screenshot", "Закрыть скриншот", "스크린샷 닫기", "スクリーンショットを閉じる"], ["Close ×", "Закрыть ×", "닫기 ×", "閉じる ×"], ["SCREENSHOT COMING SOON", "СКРИНШОТ СКОРО ПОЯВИТСЯ", "스크린샷 공개 예정", "スクリーンショットを近日公開"], ["Screenshot unavailable", "Скриншот недоступен", "스크린샷을 불러올 수 없음", "スクリーンショットを表示できません"], ["CUBE gameplay screenshot", "Скриншот игры CUBE", "CUBE 게임 스크린샷", "CUBEのゲーム画面"], ["Enlarge:", "Увеличить:", "확대:", "拡大："], ["Screenshot", "Скриншот", "스크린샷", "スクリーンショット"], ["Downloads will open when the public alpha build is published.", "Скачивание откроется после публикации альфа-сборки.", "공개 알파 빌드가 게시되면 다운로드할 수 있습니다.", "パブリックアルファ版の公開後にダウンロードできます。"], ["Looking for the latest build…", "Ищем последнюю сборку…", "최신 빌드를 찾는 중…", "最新ビルドを確認中…"], ["Download ZIP ↓", "Скачать ZIP ↓", "ZIP 다운로드 ↓", "ZIPをダウンロード ↓"], ["ZIP archives · Hosted on GitHub Releases", "ZIP-архивы · Размещены в GitHub Releases", "ZIP 파일 · GitHub Releases 제공", "ZIPファイル · GitHub Releasesで配布"], ["No matching ZIP builds in this release. Visit All releases below.", "В этом релизе нет подходящих ZIP-сборок. Откройте «Все релизы» ниже.", "이 릴리스에 해당 ZIP 빌드가 없습니다. 아래의 모든 릴리스를 확인하세요.", "このリリースに対応するZIPがありません。下の「すべてのリリース」を確認してください。"], ["Could not load the latest build. Download from All releases below.", "Не удалось загрузить последнюю сборку. Перейдите по ссылке «Все релизы» ниже.", "최신 빌드를 불러오지 못했습니다. 아래의 모든 릴리스에서 다운로드하세요.", "最新ビルドを取得できませんでした。下の「すべてのリリース」からダウンロードしてください。"], ["Loading field notes…", "Загружаем записи…", "현장 노트 불러오는 중…", "探索記録を読み込み中…"], ["No field notes yet. Be the first to leave one.", "Записей пока нет. Оставьте первую.", "아직 기록이 없습니다. 첫 기록을 남겨주세요.", "まだ記録がありません。最初の記録を残しましょう。"], ["Could not load comments. Please try Refresh.", "Не удалось загрузить комментарии. Нажмите «Обновить».", "댓글을 불러오지 못했습니다. 새로고침을 눌러주세요.", "コメントを読み込めませんでした。「更新」をお試しください。"], ["Feedback will open when the comment service is connected.", "Отзывы станут доступны после подключения сервиса комментариев.", "댓글 서비스 연결 후 피드백을 남길 수 있습니다.", "コメントサービスの接続後にフィードバックを送信できます。"], ["Please wait a moment before sending.", "Подождите немного перед отправкой.", "잠시 후 전송해주세요.", "少し待ってから送信してください。"], ["Please wait 30 seconds between comments.", "Между комментариями нужно подождать 30 секунд.", "댓글을 다시 보내려면 30초를 기다려주세요.", "次のコメントを送信するまで30秒お待ちください。"], ["Nickname: 2–30 characters. Comment: 3–1000 characters.", "Никнейм: 2–30 символов. Комментарий: 3–1000 символов.", "닉네임: 2~30자. 댓글: 3~1000자.", "ニックネーム：2〜30文字。コメント：3〜1000文字。"], ["Sending…", "Отправляем…", "전송 중…", "送信中…"], ["Transmission received. Thank you.", "Сообщение получено. Спасибо.", "전송을 받았습니다. 감사합니다.", "メッセージを受信しました。ありがとうございます。"], ["Could not confirm submission. Refresh comments before retrying; your message may already be saved.", "Не удалось подтвердить отправку. Обновите комментарии перед повторной попыткой: сообщение уже могло сохраниться.", "전송을 확인하지 못했습니다. 이미 저장되었을 수 있으니 다시 보내기 전에 댓글을 새로고침하세요.", "送信を確認できませんでした。保存済みの可能性があるため、再送信の前にコメントを更新してください。"], ["Enable JavaScript to view downloads, screenshots and comments.", "Включите JavaScript для скачивания, скриншотов и комментариев.", "다운로드, 스크린샷, 댓글을 보려면 JavaScript를 활성화하세요.", "ダウンロード、スクリーンショット、コメントを表示するにはJavaScriptを有効にしてください。"], ["Language", "Язык", "언어", "言語"], ["Public Alpha", "Открытая альфа", "공개 알파", "パブリックアルファ"]];
  rows.push(["Light theme", "Светлая тема", "라이트 모드", "ライトモード"]);
  const languages = ["en", "ru", "ko", "ja"];
  const originals = new WeakMap();
  const attributeSources = new WeakMap();
  let saved;
  try { saved = localStorage.getItem("cube-language"); } catch {}
  const browser = (navigator.language || "en").split("-")[0];
  let language = languages.includes(saved) ? saved : languages.includes(browser) ? browser : "en";
  const select = document.getElementById("language");
  const translate = (source) => {
    const index = languages.indexOf(language);
    const exact = rows.find(row => row[0] === source);
    if (exact) return exact[index];
    // Compound labels include build versions, sizes, project names and coordinates.
    let result = source;
    for (const row of [...rows].sort((a, b) => b[0].length - a[0].length)) {
      if (["PUBLIC ALPHA", "Public Alpha", "Download ZIP ↓", "UNKNOWN", "Enlarge:"].includes(row[0])) result = result.replaceAll(row[0], row[index]);
    }
    return result;
  };
  function apply() {
    observer.disconnect();
    if (document.documentElement.lang !== language) document.documentElement.lang = language;
    select.value = language;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement.closest("script,style,#comments,#socials,select,[data-project],noscript")) continue;
      const current = node.nodeValue;
      let record = originals.get(node);
      if (!record || current !== record.output) record = { source: current };
      const trimmed = record.source.trim();
      record.output = record.source.replace(trimmed, translate(trimmed));
      if (current !== record.output) node.nodeValue = record.output;
      originals.set(node, record);
    }
    document.querySelectorAll("[aria-label],[placeholder],iframe[title]").forEach(el => {
      if (el.closest("#comments,#socials,select")) return;
      const records = attributeSources.get(el) || {};
      for (const name of ["aria-label", "placeholder", "title"]) {
        if (!el.hasAttribute(name)) continue;
        const value = el.getAttribute(name);
        let record = records[name];
        if (!record || value !== record.output) record = { source: value };
        record.output = translate(record.source);
        if (name === "title" && el.tagName === "IFRAME") record.output = `${window.CUBE_CONFIG.projectName} — ${translate("Gameplay")}`;
        el.setAttribute(name, record.output); records[name] = record;
      }
      attributeSources.set(el, records);
    });
    document.querySelectorAll("#comments time[datetime]").forEach(el => {
      el.textContent = new Date(el.dateTime).toLocaleString(language, { dateStyle: "medium", timeStyle: "short" });
    });
    const title = `${window.CUBE_CONFIG.projectName || "CUBE"} — ${translate("Public Alpha")}`;
    if (document.title !== title) document.title = title;
    document.querySelector('meta[name="description"]').content = `${window.CUBE_CONFIG.projectName || "CUBE"}: ${translate("Public Alpha")}. ${translate("There is no way out.")} ${translate("Only another room.")}`;
    observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["aria-label", "placeholder", "title"] });
  }
  const observer = new MutationObserver(apply);
  select.addEventListener("change", () => {
    language = select.value;
    try { localStorage.setItem("cube-language", language); } catch {}
    apply();
  });
  apply();
})();
