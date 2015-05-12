import {inject, customElement, bindable} from 'aurelia-framework';
import '../styles/pure-css/styles.css!';

@customElement('modal')
@inject(Element)
export class Modal {
  @bindable showing = false;
  constructor(element) {
    this.element = element;
  }
}
