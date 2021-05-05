export default class Menu {
    constructor (menuSettings) {
      this._handleClose = this._handleCloseMenu.bind(this);
      this._menuSettings = menuSettings;
      this._mediaQuery = window.matchMedia('(min-width: 1280px)');
    }
  
    _handleViewMenu() {
      this._toggleClassList();  
      this._menuSettings.closeButton.addEventListener('click', this._handleClose);
    }
    
    _handleCloseMenu() {
      this._toggleClassList();
      this._menuSettings.closeButton.removeEventListener('click', this._handleClose);
    }
    
    _toggleClassList() {
      document.querySelector('.header').classList.toggle('header__overlay');
      // this._menuSettings.menu.classList.toggle('header__overlay');
      this._menuSettings.menu.classList.toggle('header__item_active');
      this._menuSettings.closeButton.classList.toggle('header__item_active');
      this._menuSettings.menuButton.classList.toggle('header__item_inactive');
      this._menuSettings.personalAccountButton.classList.toggle('header__item_active');
      this._menuSettings.content.classList.toggle('content_inactive');
    }
    
    _closeColumnMenu() {
      if ((this._mediaQuery.matches) && (this._menuSettings.menu.classList.contains('header__item_active'))) {
        this._handleCloseMenu();
      }
    }
  
    setEventListeners() {
      this._menuSettings.menuButton.addEventListener('click', this._handleViewMenu.bind(this));
      window.addEventListener('resize', this._closeColumnMenu.bind(this));
    }
  
  }