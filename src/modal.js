import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';

@customElement('modal')
@inject(Element)
export class Modal {
  @bindable showing = false;
  constructor(element) {
    this.element = element;
  }
  attached(){
    $(this.element).modal({show: false})
    .on('show.bs.modal', () => {	
      this.showing = true;
    })
    .on('hide.bs.modal', () => {	
      this.showing = false;
    });
  }
  showingChanged(newValue){
    if (newValue) {
      $(this.element).modal('show')
    } else {
      $(this.element).modal('hide')
    }
  }
}
