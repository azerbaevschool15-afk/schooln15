const SCHOOL_DATA = {
  fullName: "Средняя общеобразовательная школа № 15 имени Кенена Азербаева",
  director: "А. Джубанова",
  address: "ул. Кенена Азербаева, 1, м-н Водник-1",
  floors: "2 этажа",
  hours: "08:00 – 18:00",
  phone: "+7 727 523 3355",
  email: "azerbaevschool15@gmail.com"
};

/** @type {Record<string, { title: string, text: string }>} */
const INFO_TEXTS = {
  admission: {
    title: "Офлайн и онлайн приём",
    text:
      "1. Онлайн: заполните заявку на сайте — она отправится на почту " + SCHOOL_DATA.email + ".\n" +
      "2. Офлайн: обратитесь по адресу " + SCHOOL_DATA.address + " (" + SCHOOL_DATA.floors + "), часы работы: " + SCHOOL_DATA.hours + ".\n\n" +
      "Телефон: " + SCHOOL_DATA.phone + "\n" +
      "Директор: " + SCHOOL_DATA.director
  },
  leadership: {
    title: "Руководство и здание",
    text:
      SCHOOL_DATA.fullName + "\n" +
      "Директор: " + SCHOOL_DATA.director + "\n" +
      "Адрес: " + SCHOOL_DATA.address + "\n" +
      "Здание: " + SCHOOL_DATA.floors + "\n" +
      "Часы работы: " + SCHOOL_DATA.hours
  },
  profileRule: {
    title: "Выбор профиля с 10 класса",
    text:
      "С 1 по 9 класс ученики осваивают единую общеобразовательную программу.\n\n" +
      "Выбор между физико-математическим и гуманитарным профилем открывается после 9 класса, с 10 класса."
  },
  contacts: {
    title: "Контакты и реквизиты",
    text:
      SCHOOL_DATA.fullName + "\n" +
      "Адрес: " + SCHOOL_DATA.address + "\n" +
      "Здание: " + SCHOOL_DATA.floors + "\n" +
      "Часы работы: " + SCHOOL_DATA.hours + "\n" +
      "Телефон: " + SCHOOL_DATA.phone + "\n" +
      "Директор: " + SCHOOL_DATA.director + "\n" +
      "Почта: " + SCHOOL_DATA.email + "\n" +
      "Учеников: 2 700"
  },
  after9: {
    title: "Переход в 10 класс",
    text: "После 9 класса ученики выбирают физико-математический или гуманитарный профиль для обучения в 10–11 классах."
  },
  fizmatInfo: {
    title: "Физмат с 10 класса",
    text: "Физико-математический профиль доступен с 10 класса после завершения основной школы (9 классов). Обучение бесплатное."
  },
  gumInfo: {
    title: "Гуманитарный с 10 класса",
    text: "Гуманитарный профиль открывается с 10 класса после завершения 9 классов. Обучение бесплатное."
  },
  clubSubjects: {
    title: "Предметные кружки",
    text: "В школе проходят кружки и дополнительные занятия по ключевым предметам, где ученики углубляют знания сверх базового урока."
  },
  clubCreative: {
    title: "Внеурочные кружки",
    text: "Кружковая работа помогает ученикам 1–11 классов раскрывать способности, готовить проекты и участвовать в школьных мероприятиях."
  },
  clubSport: {
    title: "Спортивные секции",
    text: "В школе работают спортивные секции для учеников разных классов. Записаться можно через заявку или в школе по адресу: " + SCHOOL_DATA.address + "."
  }
};

const BG_FORMULAS = [
  "E = mc²", "F = m·a", "I = U / R", "P = U·I",
  "Ek = mv² / 2", "Ep = mgh", "p = m·v", "PV = νRT",
  "λ = h / p", "F = G·(m₁m₂)/r²", "ΔU = Q - A", "ω = 2π / T",
  "S = v₀t + at²/2", "c = 3·10⁸ м/с", "F = q(E + v×B)", "n = c / v",
  "1/F = 1/d + 1/f", "Q = c·m·ΔT", "ℏ = h / 2π", "sin²α + cos²α = 1"
];

/** @type {Record<number, Array<{ num: string, time: string, brk: string }>>} */
const SHIFTS_DATA = {
  1: [
    { num: "1 урок", time: "08:00 – 08:40", brk: "Перемена: 5 мин" },
    { num: "2 урок", time: "08:45 – 09:25", brk: "Перемена: 5 мин" },
    { num: "3 урок", time: "09:30 – 10:10", brk: "Перемена: 10 мин" },
    { num: "4 урок", time: "10:20 – 11:00", brk: "Перемена: 5 мин" },
    { num: "5 урок", time: "11:05 – 11:45", brk: "Перемена: 5 мин" },
    { num: "6 урок", time: "11:50 – 12:30", brk: "Перемена: 5 мин" },
    { num: "7 урок", time: "12:35 – 13:15", brk: "Окончание смены" }
  ],
  2: [
    { num: "1 урок", time: "14:00 – 14:40", brk: "Перемена: 5 мин" },
    { num: "2 урок", time: "14:45 – 15:25", brk: "Перемена: 5 мин" },
    { num: "3 урок", time: "15:30 – 16:10", brk: "Перемена: 10 мин" },
    { num: "4 урок", time: "16:20 – 17:00", brk: "Перемена: 5 мин" },
    { num: "5 урок", time: "17:05 – 17:45", brk: "Перемена: 5 мин" },
    { num: "6 урок", time: "17:50 – 18:20", brk: "Перемена: 5 мин" },
    { num: "7 урок", time: "18:25 – 18:55", brk: "Окончание смены" }
  ],
  3: [
    { num: "1 урок", time: "11:00 – 11:40", brk: "Перемена: 5 мин" },
    { num: "2 урок", time: "11:45 – 12:25", brk: "Перемена: 5 мин" },
    { num: "3 урок", time: "12:30 – 13:10", brk: "Перемена: 5 мин" },
    { num: "4 урок", time: "13:15 – 13:55", brk: "Окончание смены" }
  ]
};

/**
 * @param {number} shiftNum
 */
function renderShift(shiftNum) {
  const container = document.getElementById("bellsContainer");
  const list = SHIFTS_DATA[shiftNum] || SHIFTS_DATA[1];
  if (container) {
    container.innerHTML = list.map(function (item) {
      return (
        '<div class="bell-item">' +
          '<div class="bell-row-top">' +
            '<span class="bell-num">' + item.num + "</span>" +
            '<span class="bell-time">' + item.time + "</span>" +
          "</div>" +
          '<span class="bell-break">' + item.brk + "</span>" +
        "</div>"
      );
    }).join("");
  }

  document.querySelectorAll("[data-shift]").forEach(function (btn) {
    const active = Number(btn.getAttribute("data-shift")) === Number(shiftNum);
    btn.className = active ? "btn btn-blue btn-sm" : "btn btn-white btn-sm";
  });
}

function toggleProfileField() {
  const gradeEl = document.getElementById("studentGrade");
  const profileGroup = document.getElementById("profileGroup");
  const baseNoteGroup = document.getElementById("baseNoteGroup");
  if (!(gradeEl instanceof HTMLSelectElement) || !profileGroup || !baseNoteGroup) return;

  const isHighSchool = gradeEl.value === "10 класс" || gradeEl.value === "11 класс";
  profileGroup.style.display = isHighSchool ? "block" : "none";
  baseNoteGroup.style.display = isHighSchool ? "none" : "block";
}

/**
 * @param {string} key
 */
function openInfoByKey(key) {
  const item = INFO_TEXTS[key];
  if (!item) return;
  const titleEl = document.getElementById("infoModalTitle");
  const bodyEl = document.getElementById("infoModalBody");
  const modalEl = document.getElementById("infoModal");
  if (titleEl) titleEl.textContent = item.title;
  if (bodyEl) bodyEl.textContent = item.text;
  if (modalEl) modalEl.classList.add("open");
}

/**
 * @param {string} defaultGrade
 * @param {string} defaultTrack
 */
function openApplyModal(defaultGrade, defaultTrack) {
  const gradeSelect = document.getElementById("studentGrade");
  const trackSelect = document.getElementById("studentTrack");
  const formEl = document.getElementById("applyForm");
  const successEl = document.getElementById("applySuccess");
  const modalEl = document.getElementById("applyModal");

  if (gradeSelect instanceof HTMLSelectElement && defaultGrade) {
    gradeSelect.value = defaultGrade;
  }
  toggleProfileField();

  if (
    trackSelect instanceof HTMLSelectElement &&
    gradeSelect instanceof HTMLSelectElement &&
    defaultTrack &&
    (gradeSelect.value === "10 класс" || gradeSelect.value === "11 класс")
  ) {
    for (let i = 0; i < trackSelect.options.length; i += 1) {
      if (trackSelect.options[i].value.indexOf(defaultTrack) !== -1) {
        trackSelect.selectedIndex = i;
        break;
      }
    }
  }

  if (formEl) formEl.style.display = "block";
  if (successEl) successEl.style.display = "none";
  if (modalEl) modalEl.classList.add("open");
}

/**
 * @param {string} modalId
 */
function closeModal(modalId) {
  const modalEl = document.getElementById(modalId);
  if (modalEl) modalEl.classList.remove("open");
}

if (typeof document !== "undefined") {
  const bgLayer = document.getElementById("bgLayer");
  if (bgLayer) {
    BG_FORMULAS.forEach(function (formula, idx) {
      const span = document.createElement("span");
      span.className = "formula-float";
      span.textContent = formula;
      span.style.top = ((idx * 5.2) % 92) + "%";
      span.style.left = (((idx * 29) + 5) % 86) + "%";
      span.style.fontSize = (13 + (idx % 3) * 3) + "px";
      span.style.animationDelay = -(idx * 1.15) + "s";
      bgLayer.appendChild(span);
    });
  }

  const metaEl = document.getElementById("schoolMetaText");
  if (metaEl) {
    metaEl.textContent =
      "Адрес: " + SCHOOL_DATA.address + " (" + SCHOOL_DATA.floors + ")" +
      "\nЧасы работы: " + SCHOOL_DATA.hours +
      "\nТелефон: " + SCHOOL_DATA.phone +
      "\nДиректор: " + SCHOOL_DATA.director +
      "\nПочта для заявок: " + SCHOOL_DATA.email;
  }

  renderShift(1);
  toggleProfileField();

  document.addEventListener("click", function (e) {
    const target = e.target;
    if (!(target instanceof Element)) return;

    const tabBtn = target.closest("[data-tab]");
    if (tabBtn instanceof HTMLElement) {
      const tabId = tabBtn.getAttribute("data-tab");
      document.querySelectorAll(".tab-btn").forEach(function (b) { b.classList.remove("active"); });
      tabBtn.classList.add("active");
      document.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.remove("active"); });
      const panel = document.getElementById("tab-" + tabId);
      if (panel) panel.classList.add("active");
      return;
    }

    const shiftBtn = target.closest("[data-shift]");
    if (shiftBtn instanceof HTMLElement) {
      const shiftNum = Number(shiftBtn.getAttribute("data-shift"));
      if (shiftNum) renderShift(shiftNum);
      return;
    }

    const infoBtn = target.closest("[data-info-key]");
    if (infoBtn instanceof HTMLElement) {
      const key = infoBtn.getAttribute("data-info-key");
      if (key) openInfoByKey(key);
      return;
    }

    const applyBtn = target.closest("[data-open-apply]");
    if (applyBtn instanceof HTMLElement) {
      const grade = applyBtn.getAttribute("data-grade") || "10 класс";
      const track = applyBtn.getAttribute("data-track") || "Физико-математический";
      openApplyModal(grade, track);
      return;
    }

    const closeBtn = target.closest("[data-close-modal]");
    if (closeBtn instanceof HTMLElement) {
      const modalId = closeBtn.getAttribute("data-close-modal");
      if (modalId) closeModal(modalId);
      return;
    }

    if (target.id === "infoModal" || target.id === "applyModal") {
      closeModal(target.id);
    }
  });

  const gradeSelectEl = document.getElementById("studentGrade");
  if (gradeSelectEl) {
    gradeSelectEl.addEventListener("change", toggleProfileField);
  }

  const doneApplyBtn = document.getElementById("doneApplyBtn");
  if (doneApplyBtn) {
    doneApplyBtn.addEventListener("click", function () {
      const form = document.getElementById("applyForm");
      if (form instanceof HTMLFormElement) form.reset();
      toggleProfileField();
      closeModal("applyModal");
    });
  }

  const applyFormEl = document.getElementById("applyForm");
  if (applyFormEl instanceof HTMLFormElement) {
    applyFormEl.addEventListener("submit", function (e) {
      e.preventDefault();
      const nameInput = document.getElementById("studentName");
      const gradeSelect = document.getElementById("studentGrade");
      const trackSelect = document.getElementById("studentTrack");
      const phoneInput = document.getElementById("studentPhone");
      const successBox = document.getElementById("applySuccess");
      const detailsEl = document.getElementById("successDetails");

      const name = nameInput instanceof HTMLInputElement ? nameInput.value.trim() : "";
      const grade = gradeSelect instanceof HTMLSelectElement ? gradeSelect.value : "10 класс";
      const phone = phoneInput instanceof HTMLInputElement ? phoneInput.value.trim() : "";
      const isSenior = grade === "10 класс" || grade === "11 класс";
      const track = isSenior && trackSelect instanceof HTMLSelectElement
        ? trackSelect.value
        : "Общеобразовательная программа (профиль после 9 класса)";

      const formData = new FormData(applyFormEl);
      formData.set("Профиль", track);

      fetch("https://formsubmit.co/ajax/" + SCHOOL_DATA.email, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      })
        .then(function (res) { return res.json(); })
        .then(function () {
          applyFormEl.style.display = "none";
          if (successBox) successBox.style.display = "block";
          if (detailsEl) {
            detailsEl.textContent =
              "Заявка для " + name + " (" + grade + ", " + track + ", тел.: " + phone + ") отправлена на " + SCHOOL_DATA.email + ".";
          }
        })
        .catch(function () {
          applyFormEl.style.display = "none";
          if (successBox) successBox.style.display = "block";
          if (detailsEl) {
            detailsEl.textContent =
              "Данные заявки для " + name + " (" + grade + ", " + track + ") подготовлены для " + SCHOOL_DATA.email + ". При открытии с публичного сайта отправка проходит автоматически.";
          }
        });
    });
  }
}
