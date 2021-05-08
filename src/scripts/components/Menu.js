export default class Menu {
  constructor(menuSettings) {
    this._handleClose = this._handleCloseMenu.bind(this);
    this._menuSettings = menuSettings;
    this._mediaQuery = window.matchMedia("(min-width: 1320px)");
  }

  _handleViewMenu() {
    this._toggleClassList();
    this._menuSettings.closeButton.addEventListener("click", this._handleClose);
  }

  _handleCloseMenu() {
    if (!this._menuSettings.header.classList.contains("header__overlay")) return;

    this._toggleClassList();
    this._menuSettings.closeButton.removeEventListener(
      "click",
      this._handleClose
    );
  }

  _toggleClassList() {
    this._menuSettings.header.classList.toggle("header__overlay");
    this._menuSettings.header.classList.toggle("header_fixed");
    this._menuSettings.menu.classList.toggle("header__item_active");
    this._menuSettings.closeButton.classList.toggle("header__item_active");
    this._menuSettings.menuButton.classList.toggle("header__item_inactive");
    this._menuSettings.personalAccountButton.classList.toggle("header__item_active");
    this._menuSettings.content.classList.toggle("content_inactive");
  }

  _closeColumnMenu() {
    if (
      this._mediaQuery.matches &&
      this._menuSettings.menu.classList.contains("header__item_active")
    ) {
      this._handleCloseMenu();
    }
  }

  _showFixedMenu() {
    if (!this._prevScrollPos) this._prevScrollPos = 0;
    let scrollY = window.scrollY;

    if ((scrollY < this._prevScrollPos) && (this._mediaQuery.matches) && (scrollY>100)) {
      this._menuSettings.header.classList.add('header_fixed');
    } else if ((scrollY > this._prevScrollPos) && (this._mediaQuery.matches) && (scrollY>100) ||
      ((scrollY<=100) && (this._mediaQuery.matches) && this._menuSettings.header.classList.contains('header_fixed'))) {
      this._menuSettings.header.classList.remove('header_fixed');
    } else if ((scrollY < this._prevScrollPos) && (!this._mediaQuery.matches) && (scrollY>100) && 
      (!this._menuSettings.header.classList.contains('header_fixed'))) {
      this._handleViewMenu();
    } else if ((scrollY > this._prevScrollPos) && (!this._mediaQuery.matches) && (scrollY>100) &&
      (this._menuSettings.header.classList.contains('header_fixed')) ||
      ((scrollY<=100) && (!this._mediaQuery.matches) && this._menuSettings.header.classList.contains('header_fixed'))) {
      this._handleCloseMenu();
    }
    
    this._prevScrollPos = scrollY;
  }

  setEventListeners() {
    this._menuSettings.menuButton.addEventListener("click",
      this._handleViewMenu.bind(this)
    );

    this._menuSettings.personalAccountButton.addEventListener("mouseup", this._handleCloseMenu.bind(this));

    window.addEventListener("resize", this._closeColumnMenu.bind(this));
    document.addEventListener("scroll", this._showFixedMenu.bind(this));
  }
}
