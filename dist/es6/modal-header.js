import {bindable} from 'aurelia-framework';

export class ModalHeader {
  @bindable title = '';
  @bindable close = closeModal;
}
function closeModal(){
  console.log('not overridden');
}