const menuSettings = {
    header: document.querySelector('.header'),
    menuButton: document.querySelector('.header__button_type_menu'),
    closeButton: document.querySelector('.header__button-close'),
    menu: document.querySelector('.header__menu'),
    menuSocials: document.querySelector('.header__menu-socials'),
    personalAccountButton: document.querySelector('.header__button_type_personal-account'),
    content: document.querySelector('.content'),
};

const popupLogin = document.querySelector('.popup_type_login');
const popupVideo = document.querySelector('.popup_type_video');
const widgetSelector = document.querySelector('.widget');
const videoBigCardSelector = document.querySelector('.video-bigcard__link');

export {menuSettings, popupLogin, popupVideo, widgetSelector, videoBigCardSelector};