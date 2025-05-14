document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('themeSwitch');
  const themeIcon = document.getElementById('themeIcon');
  const body = document.body;

  // Tema guardado
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    themeSwitch.checked = true;
    body.classList.add('dark-mode');
    themeIcon.textContent = '🌙';
  } else {
    themeIcon.textContent = '☀️';
  }

  themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      themeIcon.textContent = '🌙';
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      themeIcon.textContent = '☀️';
    }
  });
});