import '../scss/style.scss';

// Рендер карточки
window.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('.main__goods');
    const tabs = document.querySelectorAll('.js__main-tab');
    const clothes = [
        {
            id:      0,
            image:   'src/assets/images/shirt.png',
            alt:     'Футболка',
            span:    true,
            price:   '220 Баллов',
            title:   "Футболка 'Эволюционируй или сдохни'",
            size:    'Размеры S/M/L',
            details: 'Брендированная футболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },

        {
            id:      1,
            image:   'src/assets/images/main-img.png',
            alt:     'Толстовка',
            span:    true,
            price:   '250 Баллов',
            title:   "Толстовка 'Эволюционируй или сдохни'",
            size:    'Размеры S/M/L',
            details: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },

        {
            id:      2,
            image:   'src/assets/images/socks.png',
            alt:     'Носки',
            span:    false,
            price:   '190 Баллов',
            title:   "Носки 'Эволюционируй или сдохни'",
            size:    'Размеры S/M/L',
            details: 'Брендированные носки от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
    ];

    const accesories = [
        {
            id:      3,
            image:   'src/assets/images/bottle.png',
            alt:     'Бутылка',
            span:    false,
            price:   '190 Баллов',
            title:   "Бутылка 'Kolesa Group'",
            size:    'Объем 0,7 литра',
            details: 'Брендированная бутылка от Qazaq Republic. Объем 0,7 литра',
        },

        {
            id:      4,
            image:   'src/assets/images/bottle.png',
            alt:     'Бутылка',
            span:    true,
            price:   '150 Баллов',
            title:   "Бутылка 'Kolesa Group'",
            size:    'Объем 0,5 литра',
            details: 'Брендированная бутылка от Qazaq Republic. Объем 0,5 литра',
        },

        {
            id:      5,
            image:   'src/assets/images/bottle.png',
            alt:     'Бутылка',
            span:    false,
            price:   '130 Баллов',
            title:   "Бутылка 'Kolesa Group'",
            size:    'Объем 0,3 литра',
            details: 'Брендированная бутылка от Qazaq Republic. Объем 0,3 литра',
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

        if (parent) {
            parent.insertAdjacentHTML('beforeend', card);
        }
    }

    function filterCard() {
        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                if (tab.dataset.key === 'clothes') {
                    parent.innerHTML = '';
                    clothes.forEach(renderCard);
                } else if (tab.dataset.key === 'accesories') {
                    parent.innerHTML = '';
                    accesories.forEach(renderCard);
                } else if (tab.dataset.key === 'all') {
                    parent.innerHTML = '';
                    const all = clothes.concat(accesories);

                    all
                        .sort((a, b) => Number(b.span) - Number(a.span))
                        .forEach(renderCard);
                }
            });

            tabs.forEach((btn) => {
                btn.addEventListener('click', () => {
                    tabs.forEach((button) => {
                        button.classList.remove('main__tab--active');
                    });
                    tab.classList.add('main__tab--active');
                });
            });
        });
    }
    clothes.concat(accesories)
        .sort((a, b) => Number(b.span) - Number(a.span))
        .forEach(renderCard);
    filterCard();

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
