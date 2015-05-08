define(['exports', 'aurelia-framework', 'jquery'], function (exports, _aureliaFramework, _jquery) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  var _$ = _interopRequire(_jquery);

  var Modal = (function () {
    var _instanceInitializers = {};

    function Modal(element) {
      _classCallCheck(this, _Modal);

      _defineDecoratedPropertyDescriptor(this, 'showing', _instanceInitializers);

      this.element = element;
    }

    var _Modal = Modal;

    _createDecoratedClass(_Modal, [{
      key: 'showing',
      decorators: [_aureliaFramework.bindable],
      initializer: function () {
        return false;
      },
      enumerable: true
    }, {
      key: 'attached',
      value: function attached() {
        _$(this.modal).modal({ show: false });
      }
    }, {
      key: 'showingChanged',
      value: function showingChanged(newValue) {
        if (newValue) {
          _$(this.modal).modal('show');
        } else {
          _$(this.modal).modal('hide');
        }
      }
    }], null, _instanceInitializers);

    Modal = _aureliaFramework.inject(Element)(Modal) || Modal;
    Modal = _aureliaFramework.customElement('modal')(Modal) || Modal;
    return Modal;
  })();

  exports.Modal = Modal;
});