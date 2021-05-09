import './index.css';
import Menu from "../scripts/components/Menu.js";
import Widget from "../scripts/components/Widget.js";
import { menuSettings, popupLogin, popupVideo, popupCity, widgetSelector, videoBigCardSelector } from "../scripts/utils/utils.js";

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
  if (evt.target.classList.contains('popup__btn-close') ||
      evt.target.classList.contains('popup')) {
    evt.target.closest(".popup").classList.remove("popup_opened");
  }
}


//Слушатели
menuSettings.personalAccountButton.addEventListener("click", handleRegistration);
videoBigCardSelector.addEventListener('click', handleViewVideo);
menuSettings.changeCity.addEventListener('click', handleChangeCity);
document.addEventListener("click", closePopup);
