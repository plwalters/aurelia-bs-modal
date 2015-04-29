'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _defineDecoratedPropertyDescriptor = function (target, key, descriptors) { var _descriptor = descriptors[key]; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer(); Object.defineProperty(target, key, descriptor); };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _bindable = require('aurelia-framework');

var ModalBody = (function () {
  var _instanceInitializers = {};

  function ModalBody() {
    _classCallCheck(this, ModalBody);

    _defineDecoratedPropertyDescriptor(this, 'content_view', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'content_model', _instanceInitializers);
  }

  _createDecoratedClass(ModalBody, [{
    key: 'content_view',
    decorators: [_bindable.bindable],
    initializer: function () {},
    enumerable: true
  }, {
    key: 'content_model',
    decorators: [_bindable.bindable],
    initializer: function () {},
    enumerable: true
  }], null, _instanceInitializers);

  return ModalBody;
})();

exports.ModalBody = ModalBody;