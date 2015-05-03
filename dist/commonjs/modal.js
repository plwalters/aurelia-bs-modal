'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _defineDecoratedPropertyDescriptor = function (target, key, descriptors) { var _descriptor = descriptors[key]; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer(); Object.defineProperty(target, key, descriptor); };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _inject$customElement$bindable = require('aurelia-framework');

var Modal = (function () {
  var _instanceInitializers = {};

  function Modal() {
    _classCallCheck(this, _Modal);

    _defineDecoratedPropertyDescriptor(this, 'showing', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'modal_id', _instanceInitializers);
  }

  var _Modal = Modal;

  _createDecoratedClass(_Modal, [{
    key: 'showing',
    decorators: [_inject$customElement$bindable.bindable],
    initializer: function () {
      return false;
    },
    enumerable: true
  }, {
    key: 'modal_id',
    decorators: [_inject$customElement$bindable.bindable],
    initializer: function () {
      return '';
    },
    enumerable: true
  }], null, _instanceInitializers);

  Modal = _inject$customElement$bindable.inject(Element)(Modal) || Modal;
  Modal = _inject$customElement$bindable.customElement('modal')(Modal) || Modal;
  return Modal;
})();

exports.Modal = Modal;