System.register(['aurelia-framework'], function (_export) {
  var inject, customElement, bindable, _classCallCheck, _createDecoratedClass, _defineDecoratedPropertyDescriptor, Modal;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      _defineDecoratedPropertyDescriptor = function (target, key, descriptors) { var _descriptor = descriptors[key]; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer(); Object.defineProperty(target, key, descriptor); };

      Modal = (function () {
        var _instanceInitializers = {};

        function Modal() {
          _classCallCheck(this, _Modal);

          _defineDecoratedPropertyDescriptor(this, 'showing', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'modal_id', _instanceInitializers);
        }

        var _Modal = Modal;

        _createDecoratedClass(_Modal, [{
          key: 'showing',
          decorators: [bindable],
          initializer: function () {
            return false;
          },
          enumerable: true
        }, {
          key: 'modal_id',
          decorators: [bindable],
          initializer: function () {
            return 'au-modal';
          },
          enumerable: true
        }], null, _instanceInitializers);

        Modal = inject(Element)(Modal) || Modal;
        Modal = customElement('modal')(Modal) || Modal;
        return Modal;
      })();

      _export('Modal', Modal);
    }
  };
});