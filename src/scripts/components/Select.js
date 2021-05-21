export default class Select {
  constructor(selectElement) {
    this._selectElement = selectElement;
    this._buttonSelect = this._selectElement.querySelector('.select-activity__icon');
    this._listItems = this._selectElement.querySelector('.select-activity__items');
    this._title = this._selectElement.querySelector('.select-activity__title');
    this._handleSelectItem = this._handleSelectItem.bind(this)
  }

  _handleViewSelect() {
    this._toggleClassList();

    this._listItems.addEventListener('click', this._handleSelectItem);
  }

  _handleSelectItem(evt) {
    if (evt.target.classList.contains('select-activity__item')) {
      this._title.textContent = evt.target.textContent;
      this._toggleClassList();
      this._listItems.removeEventListener('click', this._handleSelectItem);
    }
  }


  _toggleClassList() {
    if (!this._title.classList.contains('select-activity__title_opened')) {
      this._title.classList.add('select-activity__title_opened');
    }
    this._listItems.classList.toggle("select-activity__items_opened");
    this._selectElement.classList.toggle("select-activity_opened");
    this._buttonSelect.classList.toggle("select-activity__icon_type_opened");
  }

  setEventListeners() {
    this._title.addEventListener('click', this._handleViewSelect.bind(this));
    this._buttonSelect.addEventListener('click', this._handleViewSelect.bind(this));
  }
}
