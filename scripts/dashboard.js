// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️ Light Mode';
}

darkModeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'disabled');
    darkModeToggle.textContent = '🌙 Dark Mode';
  } else {
    body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
    darkModeToggle.textContent = '☀️ Light Mode';
  }
});