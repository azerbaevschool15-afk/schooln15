const SCHOOL_DATA = {
  fullName: "ГКУ «Средняя школа № 15 имени Кенена Азербаева»",
  address: "ул. Кенена Азербаева, 1, м-н Водник-1",
  students: 2700,
  floors: 2,
  hours: "08:00–18:00",
  email: "azerbaevschool15@gmail.com",
  director: "А. Джубанова",
};

const SHIFTS = {
  1: { title: "1 смена — утренние занятия", note: "Утренний учебный блок в рамках режима работы школы с 08:00 до 18:00", lessons: [{ num: "1 урок", time: "08:00 – 08:45" }, { num: "2 урок", time: "08:55 – 09:40" }, { num: "3 урок", time: "09:50 – 10:35" }, { num: "4 урок", time: "10:50 – 11:35" }, { num: "5 урок", time: "11:45 – 12:30" }, { num: "6 урок", time: "12:40 – 13:25" }] },
  2: { title: "2 смена — дневные занятия", note: "Дневной учебный блок в рамках режима работы школы с 08:00 до 18:00", lessons: [{ num: "1 урок", time: "13:30 – 14:15" }, { num: "2 урок", time: "14:25 – 15:10" }, { num: "3 урок", time: "15:20 – 16:05" }, { num: "4 урок", time: "16:15 – 17:00" }, { num: "5 урок", time: "17:05 – 17:50" }, { num: "6 урок", time: "17:55 – 18:40" }] },
  3: { title: "3 смена — дополнительный поток", note: "Дополнительные учебные занятия и консультации; точное время уточняется в школе", lessons: [{ num: "1 урок", time: "14:00 – 14:40" }, { num: "2 урок", time: "14:50 – 15:30" }, { num: "3 урок", time: "15:40 – 16:20" }, { num: "4 урок", time: "16:30 – 17:10" }, { num: "5 урок", time: "17:20 – 18:00" }] },
};

const INFO_TEXTS = {
  general: { tag: "1–9 классы", title: "Общеобразовательная ступень (1–9 классы)", paragraphs: ["В ГКУ «Средняя школа № 15 имени Кенена Азербаева» обучение на уровне 1–9 классов охватывает начальную и основную школу и закладывает базу по ключевым предметам."], bullets: ["Систематическое изучение базовых предметов и развитие учебных навыков.", "Подготовка к осознанному выбору профиля в 10 классе.", "Возможность посещать школьные кружки и секции."] },
  physics: { tag: "Профиль 10–11 классов", title: "Физико-математический профиль", paragraphs: ["Профиль ориентирован на старшеклассников, которым важны математика, физика, логика и поступление на технические и естественно-научные направления."], bullets: ["Углублённое внимание математике и физике в 10–11 классах.", "Развитие навыков решения задач и работы с формулами и моделями.", "Подходит для будущих инженеров, программистов и аналитиков."] },
  humanities: { tag: "Профиль 10–11 классов", title: "Гуманитарный профиль", paragraphs: ["Профиль направлен на углублённую работу с языками, литературой, историей и общественными дисциплинами в 10–11 классах."], bullets: ["Развитие устной и письменной речи, анализа текстов и аргументации.", "Работа с историческим контекстом и гуманитарными темами.", "Подходит для гуманитарных, общественных и языковых специальностей."] },
  subjectClubs: { tag: "Кружки", title: "Предметные кружки и физика", paragraphs: ["Занятия помогают глубже разобраться в сложных темах, разобрать нестандартные задачи и увереннее чувствовать себя на уроках."], bullets: ["Разбор практических и олимпиадных задач по физике и математике.", "Пояснение сложных тем простым и понятным языком.", "Поддержка при подготовке к контрольным работам и экзаменам."] },
  creativeClubs: { tag: "Развитие", title: "Творческие и научные кружки", paragraphs: ["Формат внеурочной работы, где ученики могут попробовать себя в проектах, выступлениях, творчестве и исследовательских заданиях."], bullets: ["Подготовка проектных и творческих работ.", "Развитие инициативности, командной работы и публичных выступлений.", "Участие в школьных событиях и конкурсах."] },
  sportsClubs: { tag: "Спорт", title: "Спортивные секции", paragraphs: ["Физическая активность помогает переключаться между учебными нагрузками и поддерживать хорошую форму."], bullets: ["Общая физическая подготовка и подвижные/командные игры.", "Занятия проходят в рамках рабочего времени школы (08:00–18:00).", "Запись и расписание секций уточняются через заявку или в школе."] },
  leadership: { tag: "О школе", title: "Сведения о ГКУ «Средняя школа № 15 имени Кенена Азербаева»", paragraphs: ["ГКУ «Средняя школа № 15 имени Кенена Азербаева» работает по адресу: ул. Кенена Азербаева, 1, м-н Водник-1.", "В школе обучается около 2700 учащихся, учебное пространство включает 2 этажа, режим работы — 08:00–18:00. Руководитель учреждения — директор А. Джубанова."], bullets: ["1–9 классы — общее образование; 10–11 классы — физико-математический и гуманитарный профили.", "Организовано трёхсменное расписание и работа кружков.", "Официальная почта для обращений: azerbaevschool15@gmail.com"] },
};

document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (burgerBtn && mobileNav) {
    burgerBtn.addEventListener("click", () => {
      const expanded = burgerBtn.getAttribute("aria-expanded") === "true";
      burgerBtn.setAttribute("aria-expanded", String(!expanded));
      mobileNav.hidden = expanded;
    });
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        burgerBtn.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });
  }

  const tabButtons = document.querySelectorAll(".tab-btn[data-tab]");
  const tabPanels = document.querySelectorAll(".tab-panel[role='tabpanel']");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = `panel-${btn.dataset.tab}`;
      tabButtons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-selected", String(active));
      });
      tabPanels.forEach((panel) => {
        const match = panel.id === targetId;
        panel.classList.toggle("is-active", match);
        panel.hidden = !match;
      });
    });
  });

  const shiftButtons = document.querySelectorAll(".shift-btn[data-shift]");
  const shiftTitle = document.getElementById("shiftTitle");
  const shiftNote = document.getElementById("shiftNote");
  const lessonsGrid = document.getElementById("lessonsGrid");

  function renderShift(num) {
    const s = SHIFTS[num] || SHIFTS[1];
    if (shiftTitle) shiftTitle.textContent = s.title;
    if (shiftNote) shiftNote.textContent = s.note;
    if (lessonsGrid) {
      lessonsGrid.innerHTML = s.lessons.map((l) => `<div class="lesson-item"><div class="lesson-num">${l.num}</div><div class="lesson-time">${l.time}</div></div>`).join("");
    }
  }

  shiftButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      shiftButtons.forEach((b) => b.classList.toggle("is-active", b === btn));
      renderShift(btn.dataset.shift);
    });
  });
  renderShift(1);

  const copyEmailBtn = document.getElementById("copyEmailBtn");
  const copyStatus = document.getElementById("copyStatus");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      const email = copyEmailBtn.dataset.email || SCHOOL_DATA.email;
      try {
        await navigator.clipboard.writeText(email);
        if (copyStatus) copyStatus.textContent = `Скопировано: ${email}`;
        copyEmailBtn.textContent = "Скопировано";
        setTimeout(() => { copyEmailBtn.textContent = "Копировать"; }, 2000);
      } catch {
        if (copyStatus) copyStatus.textContent = `Адрес почты: ${email}`;
      }
    });
  }

  const appModal = document.getElementById("applicationModal");
  const infoModal = document.getElementById("infoModal");
  const infoModalTag = document.getElementById("infoModalTag");
  const infoModalTitle = document.getElementById("infoModalTitle");
  const infoModalBody = document.getElementById("infoModalBody");
  const profileSelect = document.getElementById("applicantProfile");
  const formStatus = document.getElementById("formStatus");

  function syncBodyLock() {
    document.body.classList.toggle("modal-open", Boolean((appModal && !appModal.hidden) || (infoModal && !infoModal.hidden)));
  }

  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.hidden = false;
    syncBodyLock();
  }

  function closeModal(modalEl) {
    if (!modalEl || modalEl.hidden) return;
    modalEl.hidden = true;
    syncBodyLock();
  }

  document.querySelectorAll("[data-open-modal='application']").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (infoModal && !infoModal.hidden) infoModal.hidden = true;
      if (btn.dataset.defaultProfile && profileSelect) {
        const found = Array.from(profileSelect.options).some((o) => o.value === btn.dataset.defaultProfile);
        if (found) profileSelect.value = btn.dataset.defaultProfile;
      }
      if (formStatus) {
        formStatus.textContent = "";
        formStatus.className = "form-status";
      }
      openModal(appModal);
    });
  });

  document.querySelectorAll("[data-info-key]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = INFO_TEXTS[btn.dataset.infoKey];
      if (!item || !infoModal) return;
      if (infoModalTag) infoModalTag.textContent = item.tag;
      if (infoModalTitle) infoModalTitle.textContent = item.title;
      if (infoModalBody) {
        infoModalBody.innerHTML = item.paragraphs.map((p) => `<p>${p}</p>`).join("") + (item.bullets ? `<ul>${item.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : "");
      }
      openModal(infoModal);
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => closeModal(btn.closest(".modal-backdrop")));
  });

  [appModal, infoModal].forEach((m) => {
    if (m) m.addEventListener("click", (e) => { if (e.target === m) closeModal(m); });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (appModal && !appModal.hidden) closeModal(appModal);
      if (infoModal && !infoModal.hidden) closeModal(infoModal);
    }
  });

  const applicationForm = document.getElementById("applicationForm");
  const submitAppBtn = document.getElementById("submitAppBtn");
  if (applicationForm) {
    applicationForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!applicationForm.checkValidity()) {
        applicationForm.reportValidity();
        return;
      }
      if (submitAppBtn) { submitAppBtn.disabled = true; submitAppBtn.textContent = "Отправка..."; }
      if (formStatus) { formStatus.textContent = ""; formStatus.className = "form-status"; }
      try {
        const res = await fetch(applicationForm.action, {
          method: "POST",
          body: new FormData(applicationForm),
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error();
        if (formStatus) {
          formStatus.textContent = "Заявка отправлена! Мы получили ваши данные и свяжемся с вами.";
          formStatus.className = "form-status is-success";
        }
        applicationForm.reset();
      } catch {
        if (formStatus) {
          formStatus.textContent = `Не удалось отправить автоматически. Напишите напрямую на ${SCHOOL_DATA.email}`;
          formStatus.className = "form-status is-error";
        }
      } finally {
        if (submitAppBtn) { submitAppBtn.disabled = false; submitAppBtn.textContent = "Отправить заявку"; }
      }
    });
  }
});
