(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
	init: function init() {
		var _this = this;

		var els = this._els = document.querySelectorAll('[data-onscreen-toggle]');

		if (els.length > 0) {
			this._checkEls = this._checkEls.bind(this);

			window.addEventListener('load', function () {
				_this._checkEls();
				document.addEventListener('scroll', _this._checkEls, false);
			}, false);
		}
	},
	_checkEls: function _checkEls() {
		var _this2 = this;

		[].concat(_toConsumableArray(this._els)).forEach(function (el) {
			//check if element is on screen
			var onScreen = _this2._isOnScreen(el);

			if (onScreen) {
				//if element is on screen
				//add class
				var addClassName = el.getAttribute('data-onscreen-toggle');
				el.classList.add(addClassName);
			}
		});
	},
	_isOnScreen: function _isOnScreen(el) {
		var win = window;

		//adds an extra offset so the class isn't added
		//untill its completely in the viewport
		var extraOffset = el.offsetHeight - el.offsetHeight / 1.5;

		var viewport = {
			top: win.scrollY,
			left: win.scrollX
		};
		viewport.right = viewport.left + win.innerWidth;
		viewport.bottom = viewport.top + win.innerHeight;

		var bounds = {
			top: el.offsetTop + extraOffset,
			left: el.offsetLeft
		};
		bounds.right = bounds.left + el.offsetWidth;
		bounds.bottom = bounds.top + el.offsetHeight;

		return !(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom);
	}
};

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

var _imageModal = require('./image-modal');

var _imageModal2 = _interopRequireDefault(_imageModal);

var _dataOnScreenToggle = require('./data-on-screen-toggle');

var _dataOnScreenToggle2 = _interopRequireDefault(_dataOnScreenToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dataOnScreenToggle2.default.init();
(0, _imageModal2.default)();

},{"./data-on-screen-toggle":1,"./image-modal":2}]},{},[3]);
