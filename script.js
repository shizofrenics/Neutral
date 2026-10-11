// Мобильное меню
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

// Статус «открыто / закрыто» по графику мастерской
// Вт–Пт 10–20, Сб 11–18, Вс и Пн выходной
const statusEl = document.getElementById('hoursStatus');
if (statusEl) {
  const schedule = { 2: [10, 20], 3: [10, 20], 4: [10, 20], 5: [10, 20], 6: [11, 18] };
  const now = new Date();
  const hours = schedule[now.getDay()];
  const h = now.getHours() + now.getMinutes() / 60;
  if (hours && h >= hours[0] && h < hours[1]) {
    statusEl.textContent = 'Сейчас открыто, работаем до ' + hours[1] + ':00';
  } else {
    statusEl.textContent = 'Сейчас закрыто. Принимаем со вторника по субботу';
  }
}

// Переключатель разделов прайса
const tabs = document.querySelectorAll('.price-tabs .tab');
const groups = document.querySelectorAll('.price-table tbody[data-group]');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;
    tabs.forEach(t => t.setAttribute('aria-pressed', String(t === tab)));
    groups.forEach(g => { g.hidden = filter !== 'all' && g.dataset.group !== filter; });
  });
});
