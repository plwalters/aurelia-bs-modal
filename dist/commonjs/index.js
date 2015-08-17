'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

function configure(config) {
  config.globalResources('./modal');
  config.globalResources('./modal-header');
  config.globalResources('./modal-body');
  config.globalResources('./modal-footer');
  config.globalResources('./au-button');
}