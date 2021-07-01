    const menu = document.querySelector(`.menu`),
        burger = document.querySelector(`.header__burger`),
        upBtn = document.querySelector(`.up-button`);
    burger.addEventListener(`click`, function () {
            openMenu();
    });
    menu.addEventListener(`click`, function (e) {
        if (e.target.classList.contains(`menu__link`) || e.target.closest(`.menu__close`) || e.target.classList.contains(`menu__overlay`) || e.target.closest(`.social__link`)) {
            closeMenu();
        }
    });
    document.addEventListener(`keydown`, e=>{
        if (e.key === `Escape`) {
            closeMenu();
        }
      
    });


    function closeMenu () {
            menu.classList.remove(`menu_active`);
            document.body.classList.remove(`hidden`);
            document.body.style.paddingRight = 0;
            burger.style.marginRight = 0;
            upBtn.style.marginRight = 0;
    }
    function openMenu () {
        let width,
            paddingRight;

        width = document.documentElement.clientWidth;
        menu.classList.add(`menu_active`);
        document.body.classList.add(`hidden`);
        paddingRight = document.documentElement.clientWidth - width;
        document.body.style.paddingRight = paddingRight + `px`;
        burger.style.marginRight = paddingRight + `px`;
        upBtn.style.marginRight = paddingRight + `px`
    }