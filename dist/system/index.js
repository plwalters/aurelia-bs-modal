System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(config) {
    config.globalizeResources('./modal');
    config.globalizeResources('./modal-header');
    config.globalizeResources('./modal-body');
    config.globalizeResources('./modal-footer');
    config.globalizeResources('./au-button');
  }

  return {
    setters: [],
    execute: function () {}
  };
});