const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');

if (toggle && header) {
  toggle.addEventListener('click', () => {
    header.classList.toggle('open');
  });
}

const yearSpans = document.querySelectorAll('#year');
yearSpans.forEach((span) => {
  span.textContent = new Date().getFullYear();
});
