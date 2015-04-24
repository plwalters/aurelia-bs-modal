import {bindable} from 'aurelia-framework';

export class Header {
  @bindable title = '';
  closeModal(){
    console.log(this.modal);
  }
}
