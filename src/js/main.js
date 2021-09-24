// import '../css/style.css';

// document.querySelector('#app').innerHTML = `
//   <h1>Hello, Felix!!!</h1>
// `;

const link = document.querySelector('.main__link');
const close = document.querySelector('.close__btn');
const overlay = document.querySelector('.overlay');

link.addEventListener('click', () => {
    overlay.classList.add('show');
});

close.addEventListener('click', () => {
    overlay.classList.remove('show');
});
