import {inject, computedFrom, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';

@customElement('modal')
@inject(Element)
export class Modal {
  @bindable showing = false;
  @bindable large = false;
  @bindable small = false;
  constructor(element) {
    this.element = element;
  }
  @computedFrom('large', 'small')
  get modalClass() {
	  var className = 'modal-dialog';
	  if(this.large && !this.small) {
		  className += ' modal-lg';
	  } else if(!this.small && this.large) {
		  className += ' modal-sm';
	  }
	  return className;
  }
  attached(){
    $(this.modal).modal({show: false})
    .on('show.bs.modal', () => {	
      this.showing = true;
    })
    .on('hide.bs.modal', () => {	
      this.showing = false;
    });
  }
  showingChanged(newValue){
    if (newValue) {
      $(this.modal).modal('show')
    } else {
      $(this.modal).modal('hide')
    }
  }
}
