export default class Widget {
  constructor(widgetSelector) {
    this._widgetElement = widgetSelector;
    this._mediaQueryFull = window.matchMedia("(min-width: 1441px)");
    this._mediaQueryWide = window.matchMedia("(min-width: 1025px) and (max-width: 1440px)");
    this._mediaQueryMiddle = window.matchMedia("(min-width: 681px) and (max-width: 1024px)");
    this._mediaQuerySmall = window.matchMedia("(max-width: 425px)");
    this._temporaryWidth = 420;
    this._temporaryHeight = 627;
  }

  _setSizeOfWidget(width, height) {
    if ((this._temporaryWidth != width) || (this._temporaryHeight != height)) {
      this._widgetElement.src = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBigBrothers.BigSisters.Russia&tabs=timeline&width=${width}&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`;
      this._widgetElement.width = `${width}`;
      this._widgetElement.height = `${height}`;
      this._temporaryWidth = width;
      this._temporaryHeight = height;
    }

  }

  _resizeWidget() {
    if (this._mediaQueryFull.matches) {
      this._setSizeOfWidget(420, 670);
    }

    if (this._mediaQueryWide.matches) {
      this._setSizeOfWidget(370, 627);
    }

    if (this._mediaQueryMiddle.matches) {
      this._setSizeOfWidget(370, 552);
    }

    if (this._mediaQuerySmall.matches) {
      this._setSizeOfWidget(290, 433);
    }
  }

  setEventListeners() {
    window.addEventListener("resize", this._resizeWidget.bind(this));
  }
}
