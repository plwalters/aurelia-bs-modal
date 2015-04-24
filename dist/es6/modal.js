import {inject, customElement} from 'aurelia-framework';
import $ from 'jquery'

@customElement('modal')
@inject(Element)
export class Modal {
  constructor(element) {
    this.element = element;
  }
  attached(){
    $(this.modal).modal();
  }
}
