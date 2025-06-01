(() => {
  'use strict';
  const toggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  const setTheme = (mode) => {
    if (mode === 'dark') {
      root.classList.add('dark');
      toggleBtn.textContent = '☀️';
      toggleBtn.setAttribute('aria-pressed', 'true');
    } else {
      root.classList.remove('dark');
      toggleBtn.textContent = '🌙';
      toggleBtn.setAttribute('aria-pressed', 'false');
    }
    try {
      localStorage.setItem('theme', mode);
    } catch {
      // silent fail fallback
    }
  };

  toggleBtn.addEventListener('click', () => {
    const isDark = root.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  });

  try {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(saved || (prefersDark ? 'dark' : 'light'));
  } catch {
    setTheme('light');
  }

  console.log('dark mode ready. boomers and night owls rejoice.');
})();
