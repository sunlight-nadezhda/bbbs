const menuSettings = {
  header: document.querySelector(".header"),
  menuButton: document.querySelector(".header__button_type_menu"),
  closeButton: document.querySelector(".header__button-close"),
  menu: document.querySelector(".header__menu"),
  menuSocials: document.querySelector(".header__menu-socials"),
  personalAccountButton: document.querySelector(
    ".header__button_type_personal-account"
  ),
  content: document.querySelector(".content"),
  changeCity: document.querySelector(".header__change-city"),
  headerSearch: document.querySelector(".header__search"),
};

const popupLogin = document.querySelector(".popup_type_login");
const popupVideo = document.querySelector(".popup_type_video");
const popupCity = document.querySelector(".popup_type_city");
const widgetSelector = document.querySelector(".widget");
const videoBigCardSelector = document.querySelector(".video-bigcard__link");
const popupCalendar = document.querySelector(".popup_type_calendar");
const popupConfirm = document.querySelector(".popup_type_confirm");
const popupSuccess = document.querySelector(".popup_type_success");
const popupRecomendationPlace = document.querySelector(
  ".popup_type_recomendation-place"
);

const popupTogoSuccess = document.querySelector(".popup_type_togo-success");
const selectActivityElement = document.querySelector(".select-activity");
// const tagsElement = document.querySelector(".tags");

let textAreaPopupRecomendation;
let pseudotextArea;
let addressPopupRecomendationPlace;
if (popupRecomendationPlace) {
  addressPopupRecomendationPlace = popupRecomendationPlace.querySelector('.popup__field-address');
  textAreaPopupRecomendation = popupRecomendationPlace.querySelector(".popup__textarea");
  pseudotextArea = popupRecomendationPlace.querySelector(".popup__pseudo-textarea");
}

export {
  menuSettings,
  popupLogin,
  popupVideo,
  popupCity,
  popupConfirm,
  textAreaPopupRecomendation,
  popupSuccess,
  popupTogoSuccess,
  popupRecomendationPlace,
  addressPopupRecomendationPlace,
  widgetSelector,
  selectActivityElement,
  videoBigCardSelector,
  popupCalendar,
  pseudotextArea,
  // tagsElement
};
