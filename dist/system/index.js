System.register([], function (_export) {
  _export('install', install);

  function install(aurelia) {
    aurelia.globalizeResources('./modal');
    aurelia.globalizeResources('./modal-header');
    aurelia.globalizeResources('./modal-body');
    aurelia.globalizeResources('./modal-footer');
    aurelia.globalizeResources('./modal-button');
  }

  return {
    setters: [],
    execute: function () {
      'use strict';
    }
  };
});