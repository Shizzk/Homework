(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__item')


        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--open-menu')) {
            document.body.classList.add('body--open-menu')
        } else {
            document.body.classList.remove('body--open-menu')
        }
    }
})();


(function () {
    const modal = document.querySelector('.modal');
    const modalButton = document.querySelector('.about__img-button');

    modalButton.addEventListener('click', openModal);
    modal.addEventListener('click', closeModal);

    function openModal(e) {
        e.preventDefault();
        document.body.classList.toggle('body--open-modal');
    }

    function closeModal(e) {
        e.preventDefault();
        const target = e.target;

        if (target.closest('.modal__cancel') || (target.closest('.modal') && !target.closest('.modal__window'))) {
            document.body.classList.remove('body--open-modal');
        }
    }
})();


(function () {
    const tabControls = document.querySelector('.tab-controls');

    tabControls.addEventListener('click', toggleTab);

    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-controls__link');

        if (!tabControl) return;
        e.preventDefault();
        if (tabControl.classList.contains('tab-controls__link--active')) return;

        const tabContentID = tabControl.getAttribute('href');
        
        document.querySelector('.tab-content--show').classList.remove('tab-content--show');
        document.querySelector(tabContentID).classList.add('tab-content--show');


        document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active');
        tabControl.classList.add('tab-controls__link--active');
    }
})();

(function () {
    
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });
})();