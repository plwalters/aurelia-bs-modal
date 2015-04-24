import {bindable} from 'aurelia-framework';

export class ModalHeader {
  @bindable title = '';
  closeModal(){
    console.log(this.modal);
  }
}
