import {inject, customElement, bindable} from 'aurelia-framework';

@customElement('modal')
@inject(Element)
export class Modal {
  @bindable showing = false;
}
