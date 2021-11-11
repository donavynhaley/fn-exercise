/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

// UNUSED EXPORTS: creak, makeSound, squeak, squeakOnce

;// CONCATENATED MODULE: ./src/libs/hof.js
//Underscore and Lodash already have a similar function, invoked as _.once(). Ramda also provides R.once(), and most FP libraries include similar functionality, so you wouldn't have to program it on your own.
var once = function once(fn) {
  var done = false;
  return function () {
    if (!done) {
      done = true;
      fn.apply(void 0, arguments);
    }
  };
};
var onceAndAfter = function onceAndAfter(fn1, fn2) {
  var done = false;
  return function () {
    if (!done) {
      done = true;
      fn1.apply(void 0, arguments);
    } else {
      fn2.apply(void 0, arguments);
    }
  };
};
var onceNoVar = function onceNoVar(fn) {
  return function () {
    fn.apply(void 0, arguments);

    fn = function fn() {
      return console.log("Error, function can be called only once");
    };
  };
};
var alternator = function alternator(fn1, fn2) {
  return function () {
    fn1.apply(void 0, arguments);
    var _ref = [fn2, fn1];
    fn1 = _ref[0];
    fn2 = _ref[1];
  };
};
var callThisManyTime = function callThisManyTime(fn, limit) {
  return function () {
    if (limit > 0) {
      limit--;
      return fn.apply(void 0, arguments);
    }
  };
};
;// CONCATENATED MODULE: ./src/index.js

var squeak = function squeak(text) {
  return console.log("".concat(text, " squeak"));
};
var creak = function creak(text) {
  return console.log("".concat(text, " creak"));
};
squeak("Mouse");
squeak("Mouse");
squeak("Parrot");
var squeakOnce = once(squeak);
squeakOnce("Mouse");
squeakOnce("Mouse");
squeakOnce("Mouse");
squeakOnce("Parrot");
var makeSound = onceAndAfter(squeak, creak);
makeSound("door");
makeSound("door");
makeSound("door");
makeSound("door");
var squeakOnce1 = onceNoVar(squeak);
squeakOnce1("PipSqueak");
squeakOnce1("PipSqueak");
squeakOnce1("PipSqueak");

var sayA = function sayA() {
  console.log("A");
};

var sayB = function sayB() {
  console.log("B");
};

var sayLetter = alternator(sayA, sayB);
sayLetter();
sayLetter();
sayLetter();
sayLetter();
sayLetter();
var squeak5Times = callThisManyTime(squeak, 3);
squeak5Times("Nikki");
squeak5Times("Nikki2");
squeak5Times("Nikki3");
squeak5Times("Nikki4");
/******/ })()
;
//# sourceMappingURL=bundle.js.map