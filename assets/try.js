// Живое задание на главной: четыре задачи в формате ОГЭ, ответ в клетках бланка, разбор и 📏.
// Язык берём из <html lang>: русская и английская версии главной.
(function () {
  "use strict";

  var lang = document.documentElement.lang === "en" ? "en" : "ru";

  var ru = {
    math: {
      number: "Задание 6",
      html: '<p>Найдите значение выражения <span class="expr"><span class="frac"><span>3</span><span>4</span></span> + <span class="frac"><span>7</span><span>20</span></span></span>.</p>',
      cells: 8,
      inputmode: "decimal",
      hint: "Число. Дробь записывайте десятичной, через запятую.",
      answers: ["1,1"],
      solution: "Приводим к знаменателю 20: 3/4 = 15/20. Складываем: 15/20 + 7/20 = 22/20 = 1,1.",
      ruler: "📏 В бланк ОГЭ обыкновенную дробь не пишут: 22/20 записываем десятичной — 1,1.",
      normalize: function (v) { return v.replace(/\./g, ","); }
    },
    russian: {
      number: "Задание 2",
      html: "<p>Выпишите грамматическую основу предложения:</p><p><b>К вечеру ветер стих.</b></p>",
      cells: 12,
      inputmode: "text",
      hint: "Слова пишите подряд, без пробелов и запятых.",
      answers: ["ветерстих"],
      solution: "Подлежащее — «ветер» (кто? что?), сказуемое — «стих» (что сделал?). «К вечеру» — обстоятельство, в основу не входит.",
      ruler: "📏 В бланке слова основы пишут слитно, без пробелов: ВЕТЕРСТИХ.",
      spaced: "Слова верные, но в бланке ОГЭ их пишут слитно, без пробела. С пробелом ответ не засчитают."
    },
    geography: {
      number: "Задание 14",
      html: "<p>Какие два из перечисленных регионов России имеют выход к Каспийскому морю?</p>" +
        '<ol class="task-options"><li>1) Республика Калмыкия</li><li>2) Оренбургская область</li>' +
        "<li>3) Астраханская область</li><li>4) Волгоградская область</li><li>5) Ставропольский край</li></ol>",
      cells: 4,
      inputmode: "numeric",
      hint: "Две цифры подряд, в любом порядке.",
      answers: ["13", "31"],
      solution: "К Каспийскому морю выходят Калмыкия (1) и Астраханская область (3), а ещё Дагестан. Оренбургская и Волгоградская области и Ставропольский край до моря не доходят.",
      ruler: "📏 Номера пишут подряд, без запятых и пробелов: 13. Порядок цифр здесь не важен."
    },
    informatics: {
      number: "Задание 10",
      html: '<p>Вычислите значение арифметического выражения:</p><p class="expr">101101<sub>2</sub> + 125<sub>8</sub> + 2F<sub>16</sub></p>' +
        "<p>В ответе запишите десятичное число, основание системы счисления указывать не нужно.</p>",
      cells: 6,
      inputmode: "numeric",
      hint: "Только цифры десятичного числа.",
      answers: ["177"],
      solution: "101101₂ = 32 + 8 + 4 + 1 = 45. 125₈ = 1·64 + 2·8 + 5 = 85. 2F₁₆ = 2·16 + 15 = 47. Сумма: 45 + 85 + 47 = 177.",
      ruler: "📏 В бланк — десятичное число без основания: 177, а не 177₁₀."
    }
  };

  var en = {
    math: {
      number: "Task 6",
      html: '<p>Find the value of the expression <span class="expr"><span class="frac"><span>3</span><span>4</span></span> + <span class="frac"><span>7</span><span>20</span></span></span>.</p>',
      cells: 8,
      inputmode: "decimal",
      hint: "A number. Write a fraction as a decimal.",
      answers: ["1,1"],
      solution: "Use the common denominator 20: 3/4 = 15/20. Then 15/20 + 7/20 = 22/20 = 1.1.",
      ruler: "📏 The OGE answer sheet takes no common fractions: 22/20 is written as a decimal, 1,1 (Russian notation uses a decimal comma).",
      normalize: function (v) { return v.replace(/\./g, ","); },
      shown: "1.1"
    },
    russian: {
      number: "Task 2",
      html: "<p>Write out the grammatical basis (subject and predicate) of the Russian sentence:</p><p><b lang=\"ru\">К вечеру ветер стих.</b> <span>(“By evening the wind had died down.”)</span></p>",
      cells: 12,
      inputmode: "text",
      hint: "Russian words, written together with no spaces or commas.",
      answers: ["ветерстих"],
      solution: "The subject is «ветер» (the wind), the predicate is «стих» (died down). «К вечеру» (by evening) is an adverbial and is not part of the basis.",
      ruler: "📏 On the answer sheet the words are written together, with no space: ВЕТЕРСТИХ.",
      spaced: "The words are right, but on the OGE sheet they are written together, without a space. With a space the answer does not count."
    },
    geography: {
      number: "Task 14",
      html: "<p>Which two of these regions of Russia border the Caspian Sea?</p>" +
        '<ol class="task-options"><li>1) Republic of Kalmykia</li><li>2) Orenburg Oblast</li>' +
        "<li>3) Astrakhan Oblast</li><li>4) Volgograd Oblast</li><li>5) Stavropol Krai</li></ol>",
      cells: 4,
      inputmode: "numeric",
      hint: "Two digits in a row, in any order.",
      answers: ["13", "31"],
      solution: "Kalmykia (1) and Astrakhan Oblast (3) reach the Caspian Sea, and so does Dagestan. Orenburg and Volgograd Oblasts and Stavropol Krai do not reach the sea.",
      ruler: "📏 Digits go in a row, with no commas or spaces: 13. The order does not matter here."
    },
    informatics: {
      number: "Task 10",
      html: '<p>Calculate the value of the expression:</p><p class="expr">101101<sub>2</sub> + 125<sub>8</sub> + 2F<sub>16</sub></p>' +
        "<p>Write the answer as a decimal number, without the base.</p>",
      cells: 6,
      inputmode: "numeric",
      hint: "Digits of a decimal number only.",
      answers: ["177"],
      solution: "101101₂ = 32 + 8 + 4 + 1 = 45. 125₈ = 1·64 + 2·8 + 5 = 85. 2F₁₆ = 2·16 + 15 = 47. Sum: 45 + 85 + 47 = 177.",
      ruler: "📏 Write the decimal number without the base: 177, not 177₁₀."
    }
  };

  var ui = {
    ru: { ok: "Верно! Так и пишут в бланке.", almost: "Почти!", wrong: "Пока нет. Ответ: ", solved: "Разбор: ", howto: "Как решать: " },
    en: { ok: "Correct! That is exactly how it goes on the answer sheet.", almost: "Almost!", wrong: "Not quite. The answer is ", solved: "Solution: ", howto: "How to solve it: " }
  }[lang];
  var tasks = lang === "en" ? en : ru;

  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  var numberEl = document.getElementById("task-number");
  var textEl = document.getElementById("task-text");
  var form = document.getElementById("answer-form");
  var input = document.getElementById("answer-input");
  var cellsEl = document.getElementById("answer-cells");
  var hintEl = document.getElementById("format-hint");
  var resultEl = document.getElementById("result");
  if (!form || !input || !cellsEl) return;

  var current = "math";
  var cells = [];

  function buildCells(count) {
    cells.forEach(function (c) { c.remove(); });
    cells = [];
    for (var i = 0; i < count; i++) {
      var c = document.createElement("span");
      c.className = "cell";
      c.setAttribute("aria-hidden", "true");
      cellsEl.insertBefore(c, input);
      cells.push(c);
    }
    input.maxLength = count;
  }

  function paint() {
    var value = input.value;
    var focused = document.activeElement === input;
    cells.forEach(function (c, i) {
      c.textContent = value.charAt(i) || "";
      c.classList.toggle("is-active", focused && i === Math.min(value.length, cells.length - 1));
    });
  }

  function show(subject) {
    var t = tasks[subject];
    current = subject;
    tabs.forEach(function (tab) {
      var on = tab.getAttribute("data-subject") === subject;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
    });
    document.getElementById("task").style.setProperty("--subject-color", "var(--" + subject + ")");
    numberEl.textContent = t.number;
    textEl.innerHTML = t.html;
    hintEl.textContent = t.hint;
    input.value = "";
    input.setAttribute("inputmode", t.inputmode);
    buildCells(t.cells);
    resultEl.hidden = true;
    resultEl.className = "result";
    resultEl.innerHTML = "";
    paint();
  }

  function clean(v) {
    return v.trim().toLowerCase().replace(/ё/g, "е");
  }

  function render(ok, title, extra) {
    var t = tasks[current];
    resultEl.className = "result " + (ok ? "is-ok" : "is-err");
    resultEl.innerHTML = "";
    var head = document.createElement("p");
    head.className = "result-title";
    head.textContent = title;
    resultEl.appendChild(head);
    if (extra) {
      var e = document.createElement("p");
      e.textContent = extra;
      resultEl.appendChild(e);
    }
    var sol = document.createElement("p");
    sol.textContent = (ok ? ui.solved : ui.howto) + t.solution;
    resultEl.appendChild(sol);
    var ruler = document.createElement("p");
    ruler.className = "ruler";
    ruler.textContent = t.ruler;
    resultEl.appendChild(ruler);
    resultEl.hidden = false;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var t = tasks[current];
    var raw = clean(input.value);
    if (!raw) {
      input.focus();
      return;
    }
    var value = t.normalize ? t.normalize(raw) : raw;
    if (t.answers.indexOf(value) !== -1) {
      render(true, ui.ok);
    } else if (t.spaced && t.answers.indexOf(value.replace(/\s+/g, "")) !== -1) {
      render(false, ui.almost, t.spaced);
    } else {
      render(false, ui.wrong + (t.shown || t.answers[0].toUpperCase()) + ".");
    }
  });

  input.addEventListener("input", paint);
  input.addEventListener("focus", paint);
  input.addEventListener("blur", paint);

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () { show(tab.getAttribute("data-subject")); });
    tab.addEventListener("keydown", function (event) {
      var step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
      if (!step) return;
      event.preventDefault();
      var next = tabs[(index + step + tabs.length) % tabs.length];
      next.focus();
      show(next.getAttribute("data-subject"));
    });
  });

  show(current);
})();
