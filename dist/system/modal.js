System.register(['aurelia-framework'], function (_export) {
  var inject, customElement, _classCallCheck, _createClass, Modal;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Modal = (function () {
        function Modal(element) {
          _classCallCheck(this, _Modal);

          this.element = element;
        }

        var _Modal = Modal;

        _createClass(_Modal, [{
          key: 'attached',
          value: function attached() {
            this.modal.modal();
          }
        }]);

        Modal = inject(Element)(Modal) || Modal;
        Modal = customElement('modal')(Modal) || Modal;
        return Modal;
      })();

      _export('Modal', Modal);
    }
  };
});