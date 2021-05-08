import './index.css';
import Menu from "../scripts/components/Menu.js";
import Widget from "../scripts/components/Widget.js";
import { menuSettings, popupLogin, widgetSelector } from "../scripts/utils/utils.js";

const menu = new Menu(menuSettings);
menu.setEventListeners();

const widget = new Widget(widgetSelector);
widget.setEventListeners();


//Работа с попапом регистрации
function openPopupLogin(evt) {
  evt.preventDefault();
  popupLogin.classList.add("popup_opened");
}

menuSettings.personalAccountButton.addEventListener("click", openPopupLogin);

function closePopup(evt) {
  if (
    evt.target.classList.contains("popup__btn-close") &&
    evt.target.closest(".popup").classList.contains("popup_opened")
  ) {
    evt.target.closest(".popup").classList.remove("popup_opened");
  }
}


//Слушатели
document.addEventListener("click", closePopup);
