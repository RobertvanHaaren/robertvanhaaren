(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initImageModal;
function initImageModal() {
  var modalNode = document.querySelector('.js-image-modal');

  if (!modalNode) {
    return;
  }

  var modalImageNode = document.querySelector('.js-image-modal__img');

  document.addEventListener('click', function (_ref) {
    var target = _ref.target;

    if (!target.hasAttribute('data-src') || target.parentNode.tagName === 'A') {
      modalNode.classList.remove('image-modal--is-visible');
      return;
    }
    var imageSrc = target.getAttribute('data-src');
    modalImageNode.src = imageSrc;
    modalNode.classList.add('image-modal--is-visible');
  });
}

},{}],2:[function(require,module,exports){
'use strict';

var _imageModal = require('./image-modal');

var _imageModal2 = _interopRequireDefault(_imageModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _imageModal2.default)();

},{"./image-modal":1}]},{},[2]);
