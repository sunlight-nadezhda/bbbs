const menuSettings = {
    header: document.querySelector('.header'),
    menuButton: document.querySelector('.header__button_type_menu'),
    closeButton: document.querySelector('.header__button-close'),
    menu: document.querySelector('.header__menu'),
    menuSocials: document.querySelector('.header__menu-socials'),
    personalAccountButton: document.querySelector('.header__button_type_personal-account'),
    content: document.querySelector('.content'),
    changeCity: document.querySelector('.header__change-city'),
    headerSearch: document.querySelector('.header__search')
};

const popupLogin = document.querySelector('.popup_type_login');
const popupVideo = document.querySelector('.popup_type_video');
const popupCity = document.querySelector('.popup_type_city');
const widgetSelector = document.querySelector('.widget');
const videoBigCardSelector = document.querySelector('.video-bigcard__link');
const popupCalendar = document.querySelector('.popup_type_calendar');
const popupConfirm = document.querySelector('.popup_type_confirm');
const popupSuccess = document.querySelector('.popup_type_success');

export {menuSettings, popupLogin, popupVideo, popupCity, popupConfirm, popupSuccess, widgetSelector, videoBigCardSelector,popupCalendar};
