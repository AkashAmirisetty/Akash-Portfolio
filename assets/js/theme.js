// Shared theme toggle logic
(function initTheme() {
  const storageKey = 'preferred-theme';
  const root = document.documentElement;
  const saved = localStorage.getItem(storageKey);
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialDark = saved ? saved === 'dark' : systemPrefersDark;
  if (initialDark) root.classList.add('dark');

  function applyTheme(isDark) {
    root.classList.toggle('dark', isDark);
    localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
  }

  function bindToggle(btn) {
    if (!btn) return;
    btn.addEventListener('click', () => applyTheme(!root.classList.contains('dark')));
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  }

  bindToggle(document.getElementById('theme-toggle'));
})();








