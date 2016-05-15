(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var dataOnScreenToggle = {
	init: function init() {
		var els = this._els = document.querySelectorAll('[data-onscreen-toggle]');

		if (els.length > 0) {
			this._checkEls = this._checkEls.bind(this);

			this._checkEls();
			document.addEventListener('scroll', this._checkEls, false);
		}
	},
	_checkEls: function _checkEls() {
		var _this = this;

		[].concat(_toConsumableArray(this._els)).forEach(function (el) {
			//check if element is on screen
			var onScreen = _this._isOnScreen(el);

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
		var extraOffset = el.offsetHeight;

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

dataOnScreenToggle.init();

},{}]},{},[1]);
