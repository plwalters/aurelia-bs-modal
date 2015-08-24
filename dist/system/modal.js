System.register(['aurelia-framework', 'jquery'], function (_export) {
  'use strict';

  var inject, customElement, bindable, $, Modal;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
    }, function (_jquery) {
      $ = _jquery['default'];
    }],
    execute: function () {
      Modal = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(Modal, [{
          key: 'showing',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function Modal(element) {
          _classCallCheck(this, _Modal);

          _defineDecoratedPropertyDescriptor(this, 'showing', _instanceInitializers);

          this.element = element;
        }

        _createDecoratedClass(Modal, [{
          key: 'attached',
          value: function attached() {
            var _this = this;

            $(this.modal).modal({ show: false }).on('show.bs.modal', function () {
              _this.showing = true;
            }).on('hide.bs.modal', function () {
              _this.showing = false;
            });
          }
        }, {
          key: 'showingChanged',
          value: function showingChanged(newValue) {
            if (newValue) {
              $(this.modal).modal('show');
            } else {
              $(this.modal).modal('hide');
            }
          }
        }], null, _instanceInitializers);

        var _Modal = Modal;
        Modal = inject(Element)(Modal) || Modal;
        Modal = customElement('modal')(Modal) || Modal;
        return Modal;
      })();

      _export('Modal', Modal);
    }
  };
});