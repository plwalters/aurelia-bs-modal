define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function configure(config) {
    config.globalizeResources('./modal');
    config.globalizeResources('./modal-header');
    config.globalizeResources('./modal-body');
    config.globalizeResources('./modal-footer');
    config.globalizeResources('./au-button');
  }
});