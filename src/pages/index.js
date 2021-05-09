import './index.css';
import Menu from "../scripts/components/Menu.js";
import Widget from "../scripts/components/Widget.js";
import { menuSettings, popupLogin, popupVideo, popupCity, popupConfirm,
   popupCalendar, popupSuccess, widgetSelector, videoBigCardSelector } from "../scripts/utils/utils.js";

const menu = new Menu(menuSettings);
menu.setEventListeners();

const widget = new Widget(widgetSelector);
widget.setEventListeners();


//Работа с попапом регистрации
function openPopup(ModalWindowForm) {
  ModalWindowForm.classList.add("popup_opened");
}

function handleRegistration() {
  openPopup(popupLogin);
}

function handleViewVideo() {
  openPopup(popupVideo);
}

function handleChangeCity() {
  openPopup(popupCity);
}

function closePopup(evt) {
  evt.target.closest(".popup").classList.remove("popup_opened");
}

function doSomething(evt) {
  if (evt.target.classList.contains('popup__btn-close') ||
      evt.target.classList.contains('popup') ||
      evt.target.classList.contains('popup__btn-return')) {
        closePopup(evt);
  }
  if (evt.target.classList.contains('calendar__full-view-button')) {
    openPopup(popupCalendar);
  }

  if (evt.target.classList.contains('button_singup')) {
    if (document.querySelector('.popup_opened')) {
      document.querySelector('.popup_opened').classList.remove('popup_opened');
    }
    openPopup(popupConfirm);
  }

  if (evt.target.classList.contains('popup__btn-confirm')) {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    openPopup(popupSuccess);
  }

}


//Слушатели
if (menuSettings.personalAccountButton) {
  menuSettings.personalAccountButton.addEventListener("click", handleRegistration);
}

if (videoBigCardSelector) {
  videoBigCardSelector.addEventListener('click', handleViewVideo);
}
if (menuSettings.changeCity) {
  menuSettings.changeCity.addEventListener('click', handleChangeCity);
}
document.addEventListener("click", doSomething);