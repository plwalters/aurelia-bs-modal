define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function configure(aurelia) {
    aurelia.globalizeResources('./modal');
    aurelia.globalizeResources('./modal-header');
    aurelia.globalizeResources('./modal-body');
    aurelia.globalizeResources('./modal-footer');
    aurelia.globalizeResources('./au-button');
  }
});