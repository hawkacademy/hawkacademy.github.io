# Hawk Academy: ОГЭ-2027 — сайт

Сайт тренажёра ОГЭ-2027 для iPhone: https://hawkacademy.github.io/

- `index.html`, `support.html`, `privacy.html` — русская версия
- `en/index.html`, `en/support.html`, `en/privacy.html` — английская версия
- `assets/try.js` — живое задание на главной: по одному заданию на каждый из семи предметов (ru/en), ответ в клетках
  бланка, проверка и разбор; там же появление карточек при прокрутке
- `assets/styles.css` — общий стиль: цвета предметов те же, что в приложении (`Subject.colors`), тёмная тема
- `assets/lang.js` — выбор языка: в России (по часовому поясу устройства) русская версия, в других странах —
  английская; ручной выбор через переключатель (`?lang=ru|en`) запоминается в localStorage, роботов не перенаправляем

App Store Connect: Support URL и Privacy Policy URL — русские адреса для русской локализации,
`/en/…` — для английской.

Статический сайт без сборки: GitHub Pages публикует ветку `main` как есть.
Посмотреть локально: `python3 -m http.server 8000` → http://localhost:8000.

Когда в приложении меняется состав предметов или возможности, обновлять вместе: обе главные (`index.html`, `en/index.html`:
карточки предметов, FAQ, JSON-LD), `llms.txt`, при необходимости политику (`privacy.html`, `en/privacy.html`) и `sitemap.xml` (lastmod).

Шрифты Unbounded и Golos Text — SIL Open Font License 1.1 (`assets/fonts/OFL-*.txt`).
Вопросы: hawk.academy.education@gmail.com
