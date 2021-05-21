import "./index.css";
import Menu from "../scripts/components/Menu.js";
import Widget from "../scripts/components/Widget.js";
import Select from "../scripts/components/Select.js";
import {
  menuSettings,
  popupLogin,
  popupVideo,
  popupCity,
  popupConfirm,
  pseudotextArea,
  popupCalendar,
  popupSuccess,
  popupRecomendationPlace,
  textAreaPopupRecomendation,
  widgetSelector,
  selectActivityElement,
  videoBigCardSelector,
  // tagsElement
} from "../scripts/utils/utils.js";

// document.documentElement.scrollTop = document.body.scrollTop = 1000;
// document.documentElement.scrollLeft = document.body.scrollLeft = 50;

// tagsElement.scrollLeft = 100;
// tagsElement.scrollTop = 1000;

// if (tagsElement) {
//   console.log(tagsElement.scrollLeft, tagsElement.scrollTop);
// } else console.log("Не найден tagsElement");

const menu = new Menu(menuSettings);
menu.setEventListeners();

const widget = new Widget(widgetSelector);
widget.setEventListeners();

if (selectActivityElement) {
  const select = new Select(selectActivityElement);
  select.setEventListeners();
}

//Работа с попапом регистрации
function openPopup(ModalWindowForm) {
  if (ModalWindowForm) ModalWindowForm.classList.add("popup_opened");
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

function setSizeOfTextarea(evt) {
  if (pseudotextArea.offsetWidth != selectActivityElement.offsetWidth) {
    pseudotextArea.style.width = selectActivityElement.offsetWidth + "px";
  }
  pseudotextArea.innerHTML = evt.target.value;
  let height = pseudotextArea.offsetHeight;

  if (evt.keyCode == 13) {
    height += 15;
  } else if (height < 48) {
    height = 48;
  }

  textAreaPopupRecomendation.style.height = height + "px";
}

function doSomething(evt) {
  if (
    evt.target.classList.contains("popup__btn-close") ||
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__btn-return")
  ) {
    if (popupRecomendationPlace.classList.contains("popup__opened")) {
      textAreaPopupRecomendation.removeEventListener(
        "keyup",
        setSizeOfTextarea
      );
    }
    closePopup(evt);
  }

  if (evt.target.classList.contains("calendar__full-view-button")) {
    openPopup(popupCalendar);
  }

  if (evt.target.classList.contains("button_singup")) {
    if (document.querySelector(".popup_opened")) {
      document.querySelector(".popup_opened").classList.remove("popup_opened");
    }
    openPopup(popupConfirm);
  }

  if (evt.target.classList.contains("popup__btn-confirm")) {
    document.querySelector(".popup_opened").classList.remove("popup_opened");
    openPopup(popupSuccess);
  }

  if (evt.target.classList.contains("togo-page__clickable-header_place_page")) {
    openPopup(popupRecomendationPlace);
    textAreaPopupRecomendation.addEventListener("keyup", setSizeOfTextarea);
  }
}

//Слушатели
if (menuSettings.personalAccountButton) {
  menuSettings.personalAccountButton.addEventListener(
    "click",
    handleRegistration
  );
}

if (videoBigCardSelector) {
  videoBigCardSelector.addEventListener("click", handleViewVideo);
}
if (menuSettings.changeCity) {
  menuSettings.changeCity.addEventListener("click", handleChangeCity);
}
document.addEventListener("click", doSomething);
