const link = document.getElementById('main__link');
const close = document.querySelector('.close__btn');
const overlay = document.querySelector('.overlay');

link.addEventListener('click', () => {
    overlay.classList.add('show');
});

close.addEventListener('click', () => {
    overlay.classList.remove('show');
});
