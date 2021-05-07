import Menu from "../scripts/components/Menu.js";
import { menuSettings, popupLogin } from "../scripts/utils/utils.js";

const menu = new Menu(menuSettings);
menu.setEventListeners();


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