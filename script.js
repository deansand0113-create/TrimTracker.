
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('navLinks');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('show'));
  }
});
