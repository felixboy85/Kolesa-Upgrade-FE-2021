const buttons = document.querySelectorAll('.main__btn-goods');
const close = document.querySelector('.close__btn');
const overlay = document.querySelector('.overlay');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        overlay.classList.add('show');
    });
});

close.addEventListener('click', () => {
    overlay.classList.remove('show');
});
