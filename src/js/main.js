// Рендер карточки

const parent = document.querySelector('.main__goods');
const myCards = [
    {
        image: 'src/assets/images/shirt.png',
        alt:   'Футболка',
        span:  true,
        price: '220 Баллов',
        title: "Футболка 'Эволюционируй или сдохни'",
        size:  'Размеры S/M/L',
    },
    {
        image: 'src/assets/images/shirt.png',
        alt:   'Футболка',
        span:  true,
        price: '220 Баллов',
        title: "Футболка 'Эволюционируй или сдохни'",
        size:  'Размеры S/M/L',
    },
    {
        image: 'src/assets/images/shirt.png',
        alt:   'Футболка',
        span:  false,
        price: '220 Баллов',
        title: "Футболка 'Эволюционируй или сдохни'",
        size:  'Размеры S/M/L',
    },
    {
        image: 'src/assets/images/shirt.png',
        alt:   'Футболка',
        span:  false,
        price: '220 Баллов',
        title: "Футболка 'Эволюционируй или сдохни'",
        size:  'Размеры S/M/L',
    },
    {
        image: 'src/assets/images/shirt.png',
        alt:   'Футболка',
        span:  false,
        price: '220 Баллов',
        title: "Футболка 'Эволюционируй или сдохни'",
        size:  'Размеры S/M/L',
    },
    {
        image: 'src/assets/images/shirt.png',
        alt:   'Футболка',
        span:  false,
        price: '220 Баллов',
        title: "Футболка 'Эволюционируй или сдохни'",
        size:  'Размеры S/M/L',
    },
    {
        image: 'src/assets/images/shirt.png',
        alt:   'Футболка',
        span:  false,
        price: '220 Баллов',
        title: "Футболка 'Эволюционируй или сдохни'",
        size:  'Размеры S/M/L',
    },
    {
        image: 'src/assets/images/shirt.png',
        alt:   'Футболка',
        span:  false,
        price: '220 Баллов',
        title: "Футболка 'Эволюционируй или сдохни'",
        size:  'Размеры S/M/L',
    },
    {
        image: 'src/assets/images/shirt.png',
        alt:   'Футболка',
        span:  false,
        price: '220 Баллов',
        title: "Футболка 'Эволюционируй или сдохни'",
        size:  'Размеры S/M/L',
    },
    {
        image: 'src/assets/images/shirt.png',
        alt:   'Футболка',
        span:  false,
        price: '220 Баллов',
        title: "Футболка 'Эволюционируй или сдохни'",
        size:  'Размеры S/M/L',
    },
    {
        image: 'src/assets/images/shirt.png',
        alt:   'Футболка',
        span:  false,
        price: '220 Баллов',
        title: "Футболка 'Эволюционируй или сдохни'",
        size:  'Размеры S/M/L',
    },
    {
        image: 'src/assets/images/shirt.png',
        alt:   'Футболка',
        span:  false,
        price: '220 Баллов',
        title: "Футболка 'Эволюционируй или сдохни'",
        size:  'Размеры S/M/L',
    },
];

function renderCard({
    image, alt, span, price, title, size,
}) {
    const card = `
    <div class="main__goods-item main__goods-item--new">
        <div class="main__goods-pic">
            <img class="main__goods-img" src=${image} alt=${alt}>
            ${span ? '<span class="new">new</span>' : ''}
        </div>
        <div class="main__goods-descr">
            <div class="main__goods-price">${price}</div>
            <h3 class="main__goods-title">${title}</h3>
            <p class="main__goods-size">${size}</p>
            <button class="main__btn main__btn-goods visual-hidden">Заказать</button>
        </div>
    </div>`;

    parent.insertAdjacentHTML('beforeend', card);
}

myCards.forEach(renderCard);

// Модальное окно
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
