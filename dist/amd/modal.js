define(['exports', 'aurelia-framework', 'jquery'], function (exports, _aureliaFramework, _jquery) {
  'use strict';

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _$ = _interopRequire(_jquery);

  var Modal = (function () {
    function Modal(element) {
      _classCallCheck(this, _Modal);

      this.element = element;
    }

    var _Modal = Modal;

    _createClass(_Modal, [{
      key: 'attached',
      value: function attached() {
        _$(this.modal).modal();
      }
    }]);

    Modal = _aureliaFramework.inject(Element)(Modal) || Modal;
    Modal = _aureliaFramework.customElement('modal')(Modal) || Modal;
    return Modal;
  })();

  exports.Modal = Modal;
});