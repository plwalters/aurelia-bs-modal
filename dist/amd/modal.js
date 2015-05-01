define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var Modal = (function () {
    var _instanceInitializers = {};

    function Modal() {
      _classCallCheck(this, _Modal);

      this.showing = _instanceInitializers.showing.call(this);
    }

    var _Modal = Modal;

    _createDecoratedClass(_Modal, [{
      key: 'showing',
      decorators: [_aureliaFramework.bindable],
      initializer: function () {
        return false;
      },
      enumerable: true
    }], null, _instanceInitializers);

    Modal = _aureliaFramework.inject(Element)(Modal) || Modal;
    Modal = _aureliaFramework.customElement('modal')(Modal) || Modal;
    return Modal;
  })();

  exports.Modal = Modal;
});