System.register(['aurelia-framework'], function (_export) {
  var bindable, _classCallCheck, _createDecoratedClass, ModalHeader;

  function closeModal() {
    console.log('Please bind a function to close modal - "<modal-header close.call="myFunc()"></modal-header>');
  }
  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      ModalHeader = (function () {
        var _instanceInitializers = {};

        function ModalHeader() {
          _classCallCheck(this, ModalHeader);

          this.title = _instanceInitializers.title.call(this);
          this.close = _instanceInitializers.close.call(this);
        }

        _createDecoratedClass(ModalHeader, [{
          key: 'title',
          decorators: [bindable],
          initializer: function () {
            return '';
          },
          enumerable: true
        }, {
          key: 'close',
          decorators: [bindable],
          initializer: function () {
            return closeModal;
          },
          enumerable: true
        }], null, _instanceInitializers);

        return ModalHeader;
      })();

      _export('ModalHeader', ModalHeader);
    }
  };
});