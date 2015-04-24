'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _inject$customElement = require('aurelia-framework');

var _$ = require('jquery');

var _$2 = _interopRequireWildcard(_$);

var Modal = (function () {
  function Modal(element) {
    _classCallCheck(this, _Modal);

    this.element = element;
  }

  var _Modal = Modal;

  _createClass(_Modal, [{
    key: 'attached',
    value: function attached() {
      _$2['default'](this.modal).modal();
    }
  }]);

  Modal = _inject$customElement.inject(Element)(Modal) || Modal;
  Modal = _inject$customElement.customElement('modal')(Modal) || Modal;
  return Modal;
})();

exports.Modal = Modal;