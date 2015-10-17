'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _bootstrap = require('bootstrap');

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var Modal = (function () {
  var _instanceInitializers = {};

  function Modal(element) {
    _classCallCheck(this, _Modal);

    _defineDecoratedPropertyDescriptor(this, 'showing', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'escapeCallback', _instanceInitializers);

    this.keydownHandler = null;

    this.element = element;
  }

  var _Modal = Modal;

  _createDecoratedClass(_Modal, [{
    key: 'attached',
    value: function attached() {
      var _this = this;

      (0, _bootstrap2['default'])(this.modal).modal({ show: false }).on('show.bs.modal', function () {
        _this.showing = true;
      }).on('hide.bs.modal', function () {
        _this.showing = false;
      });
      if (this.showing) {
        this.addEscHandler();
        this.ensureFocus();
      }
    }
  }, {
    key: 'detached',
    value: function detached() {
      this.removeEscHandler();
    }
  }, {
    key: 'showingChanged',
    value: function showingChanged(newValue) {
      if (newValue) {
        this.addEscHandler();
        (0, _bootstrap2['default'])(this.modal).modal('show');
        this.ensureFocus();
      } else {
        (0, _bootstrap2['default'])(this.modal).modal('hide');
        this.removeEscHandler();
      }
    }
  }, {
    key: 'addEscHandler',
    value: function addEscHandler() {
      var _this2 = this;

      if (this.escapeCallback && !this.keydownHandler) {
        this.keydownHandler = function (e) {
          if (e.which == 27) {
            _this2.escapeCallback();
          }
        };
        (0, _bootstrap2['default'])(this.modal).on('keydown.dismiss.bs.modal', this.keydownHandler);
      }
    }
  }, {
    key: 'removeEscHandler',
    value: function removeEscHandler() {
      if (this.keydownHandler) {
        (0, _bootstrap2['default'])(this.modal).off('keydown.dismiss.bs.modal', this.escapeCallback);
        this.keydownHandler = null;
      }
    }
  }, {
    key: 'ensureFocus',
    value: function ensureFocus() {
      var _this3 = this;

      var $focused = (0, _bootstrap2['default'])(':focus');
      if ((0, _bootstrap2['default'])($focused).closest(this.element).length !== 1) {
        setTimeout(function () {
          (0, _bootstrap2['default'])(_this3.element).find('input, textarea, select, datalist, keygen, button').eq(0).focus();
        }, 500);
      }
    }
  }, {
    key: 'showing',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'escapeCallback',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  Modal = (0, _aureliaFramework.inject)(Element)(Modal) || Modal;
  Modal = (0, _aureliaFramework.customElement)('modal')(Modal) || Modal;
  return Modal;
})();

exports.Modal = Modal;