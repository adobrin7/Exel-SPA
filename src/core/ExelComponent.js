import {DomListener} from './DomListener';

export class ExelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }

  toHTML() {
    return '';
  }

  init() {
    this.initDomListeners();
  }

  destroy() {
    this.removeDomListeners();
  }
}
