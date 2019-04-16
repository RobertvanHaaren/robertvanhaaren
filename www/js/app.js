(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initImageModal;
function initImageModal() {
  var modalNode = document.querySelector('.js-image-modal');
  var modalImageNode = document.querySelector('.js-image-modal__img');

  document.addEventListener('click', function (_ref) {
    var target = _ref.target;

    var buttonNode = getButtonNode(target);
    if (!buttonNode) {
      modalNode.classList.remove('image-modal--is-visible');
      return;
    }
    var imageSrc = buttonNode.getAttribute('data-modal-src');
    modalImageNode.src = imageSrc;
    modalNode.classList.add('image-modal--is-visible');
  });

  function getButtonNode(target) {
    if (target.parentNode.hasAttribute('data-modal-src')) {
      return target.parentNode;
    }
    if (target.parentNode.parentNode.hasAttribute('data-modal-src')) {
      return target.parentNode.parentNode;
    }
    return null;
  }
}

},{}],2:[function(require,module,exports){
'use strict';

var _imageModal = require('./image-modal');

var _imageModal2 = _interopRequireDefault(_imageModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _imageModal2.default)();

},{"./image-modal":1}]},{},[2]);
