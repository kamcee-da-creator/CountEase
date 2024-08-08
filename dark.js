document.addEventListener('DOMContentLoaded', (event) => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
});

function setTheme(theme) {
    document.documentElement.className = `theme-${theme}`;
    localStorage.setItem('theme', theme);
}
