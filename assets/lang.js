// Язык сайта: в России — русская версия, в других странах — английская.
// Страну определяем по часовому поясу устройства прямо в браузере: никуда ничего не отправляется,
// а VPN часовой пояс не меняет. Ручной выбор (?lang=ru|en от переключателя) запоминается.
// Роботов и переходы внутри сайта не перенаправляем.
(function () {
  "use strict";

  var RUSSIA = /^(Europe\/(Kaliningrad|Moscow|Simferopol|Kirov|Volgograd|Astrakhan|Saratov|Ulyanovsk|Samara)|Asia\/(Yekaterinburg|Omsk|Novosibirsk|Barnaul|Tomsk|Novokuznetsk|Krasnoyarsk|Irkutsk|Chita|Yakutsk|Khandyga|Vladivostok|Ust-Nera|Magadan|Sakhalin|Srednekolymsk|Kamchatka|Anadyr)|W-SU)$/;
  var page = document.documentElement.lang === "en" ? "en" : "ru";

  function save(lang) {
    try { localStorage.setItem("lang", lang); } catch (e) { /* приватный режим — просто не запомним */ }
  }

  var chosen = /[?&]lang=(ru|en)(&|$)/.exec(location.search);
  if (chosen) {
    save(chosen[1]);
    try { history.replaceState(null, "", location.pathname + location.hash); } catch (e) {}
    return;
  }

  if (/bot|crawl|spider|slurp|lighthouse|headless|preview|facebookexternalhit|telegram|whatsapp|vkshare/i.test(navigator.userAgent)) return;
  if (document.referrer && document.referrer.indexOf(location.origin + "/") === 0) return;

  var want = null;
  try { want = localStorage.getItem("lang"); } catch (e) {}
  if (want !== "ru" && want !== "en") {
    var zone = "";
    try { zone = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
    want = RUSSIA.test(zone) ? "ru" : "en";
  }
  if (want === page) return;

  var alt = document.querySelector('link[rel="alternate"][hreflang="' + want + '"]');
  if (!alt) return;
  // Переходим по пути на том же домене: так работает и локально, и после переезда на свой домен.
  var a = document.createElement("a");
  a.href = alt.getAttribute("href");
  location.replace(a.pathname + location.hash);
})();
