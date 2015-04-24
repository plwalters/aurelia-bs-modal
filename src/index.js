// import {Modal} from './modal';
// export {Modal} from './modal';

export function install(aurelia, cb){
  if(cb === undefined || typeof cb !== 'function') {
    throw 'You need to provide a callback method to properly configure the library';
  }

  aurelia.globalizeResources('./modal');
  aurelia.globalizeResources('./modal-header');
  aurelia.globalizeResources('./modal-body');
  aurelia.globalizeResources('./modal-footer');
  var instance = new Modal();
  aurelia.container.registerInstance(Modal, instance);

  return cb(instance);
