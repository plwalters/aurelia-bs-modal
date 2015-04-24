import {inject, customAttribute} from 'aurelia-framework';

@customAttribute('close-modal')
@inject(Element)
export class CloseModal {
  constructor(element) {
    this.element = element;
  }
}
