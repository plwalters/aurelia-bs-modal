import {inject, customElement} from 'aurelia-framework';

@customElement('modal')
@inject(Element)
export class Modal {
  constructor(element) {
    this.element = element;
  }
  attached(){
    this.modal.modal();
  }
}
