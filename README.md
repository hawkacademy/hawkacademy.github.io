# Hawk Academy: ОГЭ-2027 — сайт

Сайт тренажёра ОГЭ-2027 для iPhone: https://hawkacademy.github.io/

- `index.html`, `support.html`, `privacy.html` — русская версия
- `en/index.html`, `en/support.html`, `en/privacy.html` — английская версия
- `assets/lang.js` — выбор языка: в России (по часовому поясу устройства) русская версия, в других странах —
  английская; ручной выбор через переключатель (`?lang=ru|en`) запоминается в localStorage, роботов не перенаправляем

App Store Connect: Support URL и Privacy Policy URL — русские адреса для русской локализации,
`/en/…` — для английской.

Статический сайт без сборки: GitHub Pages публикует ветку `main` как есть.
Посмотреть локально: `python3 -m http.server 8000` → http://localhost:8000.

Шрифты Unbounded и Golos Text — SIL Open Font License 1.1 (`assets/fonts/OFL-*.txt`).
Вопросы: hawk.academy.education@gmail.com
