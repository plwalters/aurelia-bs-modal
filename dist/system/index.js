System.register([], function (_export) {
  _export('configure', configure);

  function configure(aurelia) {
    aurelia.globalizeResources('./modal');
    aurelia.globalizeResources('./modal-header');
    aurelia.globalizeResources('./modal-body');
    aurelia.globalizeResources('./modal-footer');
    aurelia.globalizeResources('./au-button');
  }

  return {
    setters: [],
    execute: function () {
      'use strict';
    }
  };
});