import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';

@customElement('modal')
@inject(Element)
export class Modal {
  @bindable showing = false;
  constructor(element) {
    this.element = element;
  }
}
