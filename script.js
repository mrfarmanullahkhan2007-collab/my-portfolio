const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const revealElements = document.querySelectorAll('.reveal');
const contactForm = document.getElementById('contactForm');

const setTheme = (mode) => {
  if (mode === 'light') {
    root.style.setProperty('--bg', '#f8fafc');
    root.style.setProperty('--surface', '#ffffff');
    root.style.setProperty('--surface-strong', '#f1f5f9');
    root.style.setProperty('--text', '#0f172a');
    root.style.setProperty('--muted', '#64748b');
    root.style.setProperty('--shadow', '0 24px 80px rgba(15, 23, 42, 0.08)');
    themeToggle.textContent = 'Light';
    themeToggle.style.color = '#0f172a';
  } else {
    root.style.setProperty('--bg', '#0f172a');
    root.style.setProperty('--surface', '#131e3a');
    root.style.setProperty('--surface-strong', '#17264d');
    root.style.setProperty('--text', '#e2e8f0');
    root.style.setProperty('--muted', '#94a3b8');
    root.style.setProperty('--shadow', '0 24px 80px rgba(15, 23, 42, 0.25)');
    themeToggle.textContent = 'Dark';
    themeToggle.style.color = '#e2e8f0';
  }
};

themeToggle.addEventListener('click', () => {
  const currentMode = themeToggle.textContent.toLowerCase();
  setTheme(currentMode === 'dark' ? 'light' : 'dark');
});

const revealOnScroll = () => {
  const triggerPoint = window.innerHeight * 0.85;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerPoint) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  setTheme('dark');
  revealOnScroll();
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const notice = document.getElementById('formNote');
  notice.textContent = 'Thank you! This demo form is configured for front-end preview only.';
  notice.style.color = 'var(--primary)';
  contactForm.reset();
});
