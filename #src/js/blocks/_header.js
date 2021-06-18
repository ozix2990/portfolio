window.onload = function () {
    const menu = document.querySelector(`.menu`),
        burger = document.querySelector(`.header__burger`);
        let width;
        let paddingRight;
    burger.addEventListener(`click`, function () {
        width = document.documentElement.clientWidth;
        menu.classList.add(`menu_active`);
        document.body.classList.add(`hidden`);
        paddingRight = document.documentElement.clientWidth - width;
        document.body.style.paddingRight = paddingRight + `px`;
        burger.style.marginRight = paddingRight + `px`;
    });
    menu.addEventListener(`click`, function (e) {
        if (e.target.classList.contains(`menu__link`) || e.target.closest(`.menu__close`) || e.target.classList.contains(`menu__overlay`) || e.target.closest(`.social__link`)) {
            menu.classList.remove(`menu_active`);
            document.body.classList.remove(`hidden`);
            document.body.style.paddingRight = 0;
            burger.style.marginRight = 0;
        }
    });
};