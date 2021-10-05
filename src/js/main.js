import '../scss/style.scss';

// Рендер карточки
window.addEventListener('DOMContentLoaded', () => {
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
    // {
    //     image: 'src/assets/images/shirt.png',
    //     alt:   'Футболка',
    //     span:  false,
    //     price: '220 Баллов',
    //     title: "Футболка 'Эволюционируй или сдохни'",
    //     size:  'Размеры S/M/L',
    // },
    // {
    //     image: 'src/assets/images/shirt.png',
    //     alt:   'Футболка',
    //     span:  false,
    //     price: '220 Баллов',
    //     title: "Футболка 'Эволюционируй или сдохни'",
    //     size:  'Размеры S/M/L',
    // },
    // {
    //     image: 'src/assets/images/shirt.png',
    //     alt:   'Футболка',
    //     span:  false,
    //     price: '220 Баллов',
    //     title: "Футболка 'Эволюционируй или сдохни'",
    //     size:  'Размеры S/M/L',
    // },
    // {
    //     image: 'src/assets/images/shirt.png',
    //     alt:   'Футболка',
    //     span:  false,
    //     price: '220 Баллов',
    //     title: "Футболка 'Эволюционируй или сдохни'",
    //     size:  'Размеры S/M/L',
    // },
    // {
    //     image: 'src/assets/images/shirt.png',
    //     alt:   'Футболка',
    //     span:  false,
    //     price: '220 Баллов',
    //     title: "Футболка 'Эволюционируй или сдохни'",
    //     size:  'Размеры S/M/L',
    // },
    // {
    //     image: 'src/assets/images/shirt.png',
    //     alt:   'Футболка',
    //     span:  false,
    //     price: '220 Баллов',
    //     title: "Футболка 'Эволюционируй или сдохни'",
    //     size:  'Размеры S/M/L',
    // },
    // {
    //     image: 'src/assets/images/shirt.png',
    //     alt:   'Футболка',
    //     span:  false,
    //     price: '220 Баллов',
    //     title: "Футболка 'Эволюционируй или сдохни'",
    //     size:  'Размеры S/M/L',
    // },
    // {
    //     image: 'src/assets/images/shirt.png',
    //     alt:   'Футболка',
    //     span:  false,
    //     price: '220 Баллов',
    //     title: "Футболка 'Эволюционируй или сдохни'",
    //     size:  'Размеры S/M/L',
    // },
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

        if (parent) {
            parent.insertAdjacentHTML('beforeend', card);
        }
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

    // Hamburger menu
    const hamburger = document.querySelector('.header__hamburger-btn');
    const menuOverlay = document.querySelector('.hamburger__menu');
    const hamburgerMenu = document.querySelector('.hamburger__menu-wrapper');
    const menuLinks = document.querySelectorAll('.hamburger__menu-link');

    hamburger.addEventListener('click', () => {
        menuOverlay.classList.add('hamburger__menu--active');
        hamburgerMenu.classList.add('hamburger__menu-wrapper--active');
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            menuOverlay.classList.remove('hamburger__menu--active');
            hamburgerMenu.classList.remove('hamburger__menu-wrapper--active');
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.closest('.hamburger__menu') && !e.target.closest('.hamburger__menu-wrapper')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
            menuOverlay.classList.remove('hamburger__menu--active');
            hamburgerMenu.classList.remove('hamburger__menu-wrapper--active'); // то закрываем окно навигации, удаляя активный класс
        }
    });

    // Поиск
    const search = document.querySelector('.header__right-search');
    const btn = document.querySelector('.header__right-btn');
    const logo = document.querySelector('.header__logo');
    const input = document.querySelector('.header__right-input');

    btn.addEventListener('click', () => {
        search.classList.toggle('active');
        input.focus();

        if (window.innerWidth >= 450) {
            logo.classList.remove('d-none');
        } else {
            logo.classList.toggle('d-none');
        }
    });
});
