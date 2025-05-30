const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;
lastModified.innerHTML = `<span>${document.lastModified}</span>`;

const mainnav = document.querySelector('.navigation')
const button = document.querySelector('#menu');
button.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
    button.classList.toggle('open');
});