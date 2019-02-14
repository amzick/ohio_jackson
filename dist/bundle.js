/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/coin.js":
/*!*********************!*\
  !*** ./src/coin.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collectable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collectable */ "./src/collectable.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Coin =
/*#__PURE__*/
function (_Collectable) {
  _inherits(Coin, _Collectable);

  function Coin(options) {
    var _this;

    _classCallCheck(this, Coin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Coin).call(this, options));
    var coinImg = new Image(); // coinImg.src = 'https://www.spriters-resource.com/resources/sheets/107/109971.png';
    // coinImg.src = './images/ring.png';

    coinImg.src = "https://www.spriters-resource.com/resources/sheets/78/81059.png";
    _this.image = coinImg;
    _this.frameIndicies = [[2, 1, 61, 62], [68, 1, 60, 62], [133, 1, 58, 52], [201, 1, 51, 62], [12, 65, 46, 62], [81, 65, 35, 62], [148, 65, 29, 62], [214, 65, 23, 62], [23, 129, 19, 62], [83, 129, 24, 62], [145, 129, 28, 62], [205, 129, 35, 62], [7, 193, 46, 62], [67, 193, 54, 62], [130, 193, 58, 62], [193, 193, 61, 62]];
    return _this;
  }

  _createClass(Coin, [{
    key: "update",
    value: function update() {
      this.tickCount += 1;

      if (this.tickCount > 15 * this.ticksPerFrame) {
        this.tickCount = 0;
      }

      var index = Math.floor(this.tickCount / this.ticksPerFrame);
      this.sX = this.frameIndicies[index][0];
      this.sY = this.frameIndicies[index][1];
      this.sWidth = this.frameIndicies[index][2];
      this.sHeight = this.frameIndicies[index][3];
      this.width = this.sWidth / 4;
      this.height = this.sHeight / 4;
    }
  }, {
    key: "remove",
    value: function remove() {
      this.game.coins.delete(this);
    }
  }], [{
    key: "random",
    value: function random(game) {
      var range = Math.random() * (25 - 7) + 7;
      var validStartX = Math.random() * (game.canvas.width - 15 - 16 - range) + (16 + range);
      var validStartY = Math.random() * (game.canvas.height - 15 - 16 - range) + (16 + range);
      var direction = ["V", "H"][Math.floor(Math.random() * (2 - 0) + 0)];
      var switchDirection = [true, false][Math.floor(Math.random() * (2 - 0) + 0)];
      return new Coin({
        game: game,
        sX: 2,
        sY: 1,
        sWidth: 61,
        sHeight: 62,
        startX: validStartX,
        startY: validStartY,
        speed: 0.3,
        dX: 1,
        width: 12,
        height: 12,
        range: range,
        direction: direction,
        switchDirection: switchDirection
      });
    }
  }]);

  return Coin;
}(_collectable__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Coin);

/***/ }),

/***/ "./src/collectable.js":
/*!****************************!*\
  !*** ./src/collectable.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moveable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveable */ "./src/moveable.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Collectable =
/*#__PURE__*/
function (_Moveable) {
  _inherits(Collectable, _Moveable);

  function Collectable(options) {
    var _this;

    _classCallCheck(this, Collectable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collectable).call(this, options));
    _this.range = options.range || 25;
    _this.direction = options.direction || "H";
    _this.switchDirection = false;
    return _this;
  }

  _createClass(Collectable, [{
    key: "remove",
    value: function remove() {}
  }, {
    key: "move",
    value: function move() {
      this.posX = this.startX + this.dX * this.speed;
      this.posY = this.startY + this.dY * this.speed;

      if (this.direction === "H") {
        var positiveX = this.dX > 0;

        if (positiveX && this.posX < this.startX + this.range && !this.switchDirection) {
          this.switchDirection = false;
          this.dX++;
        } else if (positiveX && this.posX >= this.startX + this.range) {
          this.switchDirection = true;
          this.dX--;
        } else if (positiveX && this.posX < this.startX + this.range && this.switchDirection) {
          this.dX--;
        } else if (!positiveX && this.posX > this.startX - this.range && this.switchDirection) {
          this.dX--;
        } else if (!positiveX && this.posX > this.startX - this.range && !this.switchDirection) {
          this.dX++;
        } else if (!positiveX && this.posX <= this.startX - this.range) {
          this.switchDirection = false;
          this.dX++;
        }
      }

      if (this.direction === "V") {
        var positiveY = this.dY > 0;

        if (positiveY && this.posY < this.startY + this.range && !this.switchDirection) {
          this.switchDirection = false;
          this.dY++;
        } else if (positiveY && this.posY >= this.startY + this.range) {
          this.switchDirection = true;
          this.dY--;
        } else if (positiveY && this.posY < this.startY + this.range && this.switchDirection) {
          this.dY--;
        } else if (!positiveY && this.posY > this.startY - this.range && this.switchDirection) {
          this.dY--;
        } else if (!positiveY && this.posY > this.startY - this.range && !this.switchDirection) {
          this.dY++;
        } else if (!positiveY && this.posY <= this.startY - this.range) {
          this.switchDirection = false;
          this.dY++;
        }
      }
    }
  }]);

  return Collectable;
}(_moveable__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Collectable);

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _collectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collectable */ "./src/collectable.js");
/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coin */ "./src/coin.js");
/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectile */ "./src/projectile.js");




 // goals:
// 4. Game over?
// 5. 

document.addEventListener("DOMContentLoaded", function () {
  // set up the canvas
  var gameCanvas = document.getElementById("game-canvas");
  gameCanvas.width = 320;
  gameCanvas.height = 224;
  var ctx = gameCanvas.getContext('2d');
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]({
    canvas: gameCanvas
  });

  function togglePause(event) {
    if (event.key === "Enter") {
      game.paused ? game.paused = false : game.paused = true;
    }
  }

  function startGame(event) {
    if (event.key === "Enter") {
      document.removeEventListener("keydown", startGame);
      document.addEventListener("keydown", togglePause);
      game.begun ? game.begun = false : game.begun = true;
    }
  }

  document.addEventListener("keydown", startGame);
  var jungleImg = new Image(); // jungleImg.src = "https://www.spriters-resource.com/resources/sheets/103/106034.png";

  jungleImg.src = "https://www.spriters-resource.com/resources/sheets/2/1633.png";

  function drawBorder(ctx) {
    // sides
    for (var i = 0; i < 14; i++) {
      ctx.drawImage(jungleImg, 1061, 363, 47, 51, 0, i * 16, 16, 16);
      ctx.drawImage(jungleImg, 1061, 363, 47, 51, gameCanvas.width - 16, i * 16, 16, 16);
    } // top and bottom


    for (var _i = 0; _i < 20; _i++) {
      ctx.drawImage(jungleImg, 1061, 363, 47, 51, _i * 16, 0, 16, 16);
      ctx.drawImage(jungleImg, 1061, 363, 47, 51, _i * 16, gameCanvas.height - 16, 16, 16);
    }
  }

  var ground = new Image();
  ground.src = "https://www.spriters-resource.com/resources/sheets/56/59176.png";

  function drawGround(ctx) {
    for (var i = 1; i < 19; i++) {
      for (var j = 1; j < 13; j++) {
        ctx.drawImage(ground, 762, 267, 28, 28, i * 16, j * 16, 16, 16);
      }
    }
  }

  function animate() {
    if (game.over) {
      document.removeEventListener("keydown", togglePause);
      game.drawGameOver(ctx);
      document.addEventListener("keyup", function x(event) {
        if (event.key === "Enter") {
          game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]({
            canvas: gameCanvas,
            begun: true
          }); // removeEventListener only works with a named function?

          document.removeEventListener("keyup", x);
          document.addEventListener("keydown", togglePause);
          animate();
        }
      });
      return;
    }

    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

    if (game.begun) {
      drawBorder(ctx);
      drawGround(ctx);
      game.draw(ctx);
    } else {
      game.drawStartScreen(ctx);
      return;
    }
  }

  if (!game.over) {
    animate();
  }
}); // movement:
// https://www.kirupa.com/canvas/moving_shapes_canvas_keyboard.htm

/***/ }),

/***/ "./src/fruit.js":
/*!**********************!*\
  !*** ./src/fruit.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collectable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collectable */ "./src/collectable.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Fruit =
/*#__PURE__*/
function (_Collectable) {
  _inherits(Fruit, _Collectable);

  function Fruit(options) {
    var _this;

    _classCallCheck(this, Fruit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Fruit).call(this, options));
    var fruitImg = new Image();
    fruitImg.src = "https://s3.amazonaws.com/letsgoeros-dev/fruit_alpha.png";
    _this.image = fruitImg;
    return _this;
  }

  _createClass(Fruit, [{
    key: "update",
    value: function update() {
      this.tickCount++;

      if (this.tickCount > 14 * this.ticksPerFrame) {
        this.tickCount = 0;
      }

      var frame = Math.floor(this.tickCount / this.ticksPerFrame);
      this.sX = frame * 16 + 2;
    }
  }, {
    key: "remove",
    value: function remove() {
      this.game.fruits.delete(this);
    }
  }], [{
    key: "fresh",
    value: function fresh(game) {
      var range = Math.random() * (25 - 7) + 7;
      var validStartX = Math.random() * (game.canvas.width - 15 - 16 - range) + (16 + range);
      var validStartY = Math.random() * (game.canvas.height - 15 - 16 - range) + (16 + range);
      var direction = ["V", "H"][Math.floor(Math.random() * (2 - 0) + 0)];
      var switchDirection = [true, false][Math.floor(Math.random() * (2 - 0) + 0)];
      return new Fruit({
        game: game,
        sX: 2,
        sY: 0,
        sWidth: 13,
        sHeight: 15,
        startX: validStartX,
        startY: validStartY,
        speed: 0.3,
        dX: 1,
        width: 9,
        height: 10,
        range: range,
        direction: direction,
        switchDirection: switchDirection
      });
    }
  }]);

  return Fruit;
}(_collectable__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Fruit);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coin */ "./src/coin.js");
/* harmony import */ var _fruit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fruit */ "./src/fruit.js");
/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectile */ "./src/projectile.js");
/* harmony import */ var _speed_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./speed_boost */ "./src/speed_boost.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Game =
/*#__PURE__*/
function () {
  function Game(options) {
    _classCallCheck(this, Game);

    this.canvas = options.canvas; // import default player?
    // this.player = options.player; 

    this.coins = options.coins || new Set();
    this.arrows = options.arrows || new Set();
    this.fruits = options.fruits || new Set();
    this.powerUps = options.powerUps || new Set();
    this.gameObjects = Array.from(new Set([].concat(_toConsumableArray(this.coins), _toConsumableArray(this.arrows), _toConsumableArray(this.fruits), _toConsumableArray(this.powerUps))));
    this.playerSpeed = 1;
    this.projectileSpeed = 0.1;
    this.score = 0;
    this.over = false;
    this.maxArrows = options.maxArrows || 1;
    this.maxFruits = options.maxFruits || 1;
    this.maxPowerUps = options.maxPowerUps || 0;
    this.disablePowerUps = false;
    this.boosted = false; //in the boosted state I'll render a blue bar showing the remaining time left

    this.paused = false;
    this.begun = options.begun || false; //functions

    this.detectCollisions = this.detectCollisions.bind(this);
    this.drawInfo = this.drawInfo.bind(this);
  }

  _createClass(Game, [{
    key: "addPlayer",
    value: function addPlayer() {
      this.player = _player__WEBPACK_IMPORTED_MODULE_0__["default"].ohio(this);
    }
  }, {
    key: "updateGameObjects",
    value: function updateGameObjects() {
      switch (true) {
        case this.score < 10:
          this.maxArrows = 1;
          break;

        case this.score < 20:
          this.maxArrows = 2;
          break;

        case this.score < 30:
          this.maxArrows = 5;
          this.maxFruits = 2;
          break;

        case this.score < 50:
          this.maxArrows = 8;
          this.maxPowerUps = 1;
          break;

        case this.score < 75:
          this.maxArrows = 10;
          this.maxFruits = 3;
          break;

        default:
          this.maxArrows = 100000;
          break;
      }

      this.gameObjects = Array.from(new Set([].concat(_toConsumableArray(this.coins), _toConsumableArray(this.arrows), _toConsumableArray(this.fruits), _toConsumableArray(this.powerUps))));
    }
  }, {
    key: "addCoin",
    value: function addCoin() {
      this.coins.add(_coin__WEBPACK_IMPORTED_MODULE_1__["default"].random(this));
      this.updateGameObjects();
    }
  }, {
    key: "addArrow",
    value: function addArrow() {
      this.arrows.add(_projectile__WEBPACK_IMPORTED_MODULE_3__["default"].random(this));
      this.updateGameObjects();
    }
  }, {
    key: "addFruit",
    value: function addFruit() {
      this.fruits.add(_fruit__WEBPACK_IMPORTED_MODULE_2__["default"].fresh(this));
      this.updateGameObjects();
    }
  }, {
    key: "addSpeedBoost",
    value: function addSpeedBoost() {
      this.powerUps.add(_speed_boost__WEBPACK_IMPORTED_MODULE_4__["default"].generate(this));
      this.updateGameObjects();
    }
  }, {
    key: "detectCollisions",
    value: function detectCollisions() {
      var _this = this;

      for (var i = 0; i < this.gameObjects.length; i++) {
        var obj = this.gameObjects[i];

        if (this.player.isCollidingWith(obj)) {
          this.player.hits(obj);

          if (obj instanceof _coin__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            this.score++;

            if (this.player.health < 1) {
              this.player.health += 0.01;
            }
          } else if (obj instanceof _fruit__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            if (this.player.health <= 0.9) {
              this.player.health += 0.1;
            } else {
              this.player.health = 1;
            }
          } else if (obj instanceof _projectile__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            this.player.health -= 0.1;

            if (this.player.health <= 0) {
              this.over = true; // window.alert("You lose");
              // document.location.reload();
            }
          } else if (obj instanceof _speed_boost__WEBPACK_IMPORTED_MODULE_4__["default"]) {
            this.disablePowerUps = true; // I'm doing this so I can render a bar

            this.powerUpTime = 10000;
            this.boosted = true; // ten seconds of speed boost, 15 seconds of no powerups

            this.maxPowerUps = 0;
            this.player.speed *= 2; // had a bug where the speed changed caused the character to leap off the screen,
            // since the position is partially the calculation of the change from the start times the speed, this quick reset helps.. a little

            this.player.dX /= 3; // dY doesn't like being divided by 2 ...

            this.player.dY /= 1.5;
            window.setTimeout(function () {
              _this.player.speed /= 2;
              _this.boosted = false;
            }, 10000);
            window.setTimeout(function () {
              _this.maxPowerUps = 1;
              _this.disablePowerUps = false;
            }, 15000);
          }
        }
      }
    }
  }, {
    key: "drawScore",
    value: function drawScore(ctx) {
      ctx.font = "10px Courier New";
      ctx.fillStyle = "white";
      ctx.fillText("Score: " + this.score, 8, 12);
    }
  }, {
    key: "drawHealth",
    value: function drawHealth(ctx) {
      ctx.font = "10px Courier New";
      ctx.fillStyle = "white";
      ctx.fillText("Health: ", this.canvas.width - 125, 12);
    }
  }, {
    key: "drawHealthBar",
    value: function drawHealthBar(ctx) {
      ctx.beginPath();
      ctx.rect(this.canvas.width - 72, 3, 50, 10);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.rect(this.canvas.width - 71, 4, this.player.health * 47, 8);

      if (this.player.health <= 0.3) {
        ctx.fillStyle = 'red';
      } else if (this.player.health <= 0.6) {
        ctx.fillStyle = 'yellow';
      } else {
        ctx.fillStyle = 'green';
      }

      ctx.fill();
    }
  }, {
    key: "drawBoost",
    value: function drawBoost(ctx) {
      ctx.font = "10px Courier New";
      ctx.fillStyle = "#16ffd0";
      ctx.fillText("Boost: ", 70, 12);
    }
  }, {
    key: "drawBoostBar",
    value: function drawBoostBar(ctx) {
      ctx.beginPath();
      ctx.rect(109, 3, 50, 10);
      ctx.strokeStyle = "#f50fd0";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();
      ctx.fillStyle = "#16ffd0";
      ctx.fillRect(110, 4, this.powerUpTime / 10000 * 47, 8);
    }
  }, {
    key: "drawInfo",
    value: function drawInfo(ctx) {
      this.drawScore(ctx);
      this.drawHealth(ctx);
      this.drawHealthBar(ctx);

      if (this.boosted) {
        this.powerUpTime -= 17;
        this.drawBoost(ctx);
        this.drawBoostBar(ctx);
      }
    }
  }, {
    key: "drawGameOver",
    value: function drawGameOver(ctx) {
      ctx.font = "50px Courier New";
      ctx.fillStyle = "red";
      ctx.fillText("GAME", this.canvas.width / 3 - 8, this.canvas.height / 2 - 16);
      ctx.fillText("OVER", this.canvas.width / 3 - 8, this.canvas.height / 2 + 16);
      ctx.font = "20px Courier New";
      ctx.fillText("Press Enter to Try Again", 16, this.canvas.height / 2 + 64);
    }
  }, {
    key: "drawPauseScreen",
    value: function drawPauseScreen(ctx) {
      ctx.font = "50px Courier New";
      ctx.fillStyle = "white";
      ctx.fillText("PAUSED", this.canvas.width / 4 - 8, this.canvas.height / 2 - 16);
      ctx.fillText("GAME", this.canvas.width / 3 - 8, this.canvas.height / 2 + 16);
    }
  }, {
    key: "drawStartScreen",
    value: function drawStartScreen(ctx) {
      var portrait = new Image();
      portrait.src = "https://www.sideshowtoy.com/wp-content/uploads/2016/03/indiana-jones-temple-of-doom-sixth-scale-feature-3914-2.jpg";
      ctx.drawImage(portrait, 0, 0, 990, 600, 0, 0, 320, 224);
      ctx.font = "50px Courier New";
      ctx.fillStyle = "white";
      ctx.fillText("OHIO", 8 - 8, 64);
      ctx.fillText("JACKSON", 8 - 8, 96);
      ctx.font = "15px Courier New";
      ctx.fillText("and the Quest for El Dorado", 4, 114);
      ctx.font = "10px Courier New";
      ctx.fillText("Use the arrow keys to move", 4, 130);
      ctx.fillText("Hit enter to pause the game", 4, 140);
      ctx.fillText("Press m to toggle music", 4, 150);
      ctx.font = "30px Courier New";
      ctx.fillText("PRESS", 2, 180);
      ctx.fillText("ENTER", 2, 200);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (!this.player) {
        this.addPlayer();
      }

      if (!this.over && !this.paused) {
        this.drawInfo(ctx);
        this.player.draw(ctx);

        if (this.coins.size <= 20) {
          this.addCoin();
        }

        if (this.arrows.size < this.maxArrows) {
          this.addArrow();
        }

        if (this.fruits.size < this.maxFruits) {
          this.addFruit();
        }

        if (this.powerUps.size < this.maxPowerUps && !this.disablePowerUps) {
          this.addSpeedBoost();
        }

        this.gameObjects.forEach(function (object) {
          object.draw(ctx);
          object.update();
        });
        this.detectCollisions();
      } else if (this.over) {
        this.drawGameOver(ctx);
      } else if (this.paused) {
        this.drawPauseScreen(ctx);
      }
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/game_object.js":
/*!****************************!*\
  !*** ./src/game_object.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameObject =
/*#__PURE__*/
function () {
  function GameObject(options) {
    _classCallCheck(this, GameObject);

    this.game = options.game;
    this.isCollidingWith = this.isCollidingWith.bind(this);
  }

  _createClass(GameObject, [{
    key: "isCollidingWith",
    value: function isCollidingWith(gameObject) {
      var that = this;

      if (this.posX < gameObject.posX + gameObject.width && this.posX + this.width > gameObject.posX && this.posY < gameObject.posY + gameObject.height && this.posY + this.height > gameObject.posY) {
        return true;
      }

      return false;
    }
  }]);

  return GameObject;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameObject);

/***/ }),

/***/ "./src/moveable.js":
/*!*************************!*\
  !*** ./src/moveable.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_object */ "./src/game_object.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Moveable =
/*#__PURE__*/
function (_GameObject) {
  _inherits(Moveable, _GameObject);

  function Moveable(options) {
    var _this;

    _classCallCheck(this, Moveable);

    // need a reference to the canvas?
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Moveable).call(this, options));
    _this.canvas = options.canvas; // eventually I'll have a sprite

    _this.image = options.image;
    _this.sX = options.sX;
    _this.sY = options.sY;
    _this.sWidth = options.sWidth;
    _this.sHeight = options.sHeight; // need to keep track of the objects x and y pos

    _this.startX = options.startX;
    _this.startY = options.startY; // speed in x and y

    _this.speed = options.speed || 1;
    _this.dX = options.dX || 0;
    _this.dY = options.dY || 0; // width and height

    _this.width = options.width;
    _this.height = options.height; // default posX and posY
    // this.posX = options.posX || this.canvas.width / 2;
    // this.posY = options.posY || this.canvas.height / 2;

    _this.posX = _this.startX + _this.dX * _this.speed;
    _this.posY = _this.startY + _this.dY * _this.speed;
    _this.draw = _this.draw.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.move = _this.move.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.tickCount = 0;
    _this.ticksPerFrame = 15;
    _this.update = _this.update.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Moveable, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.image, this.sX, this.sY, this.sWidth, this.sHeight, this.posX, this.posY, this.width, this.height);
      this.move();
      this.update();
    }
  }, {
    key: "collides",
    value: function collides() {// will I call super collides and then have rules depending on the object?
      // and just define what happens here?
    }
  }, {
    key: "move",
    value: function move() {// redefined in each child class since they'll have unique patterns
    }
  }, {
    key: "update",
    value: function update() {// redefined in each child. some won't update (arrows)
    }
  }]);

  return Moveable;
}(_game_object__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Moveable);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moveable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveable */ "./src/moveable.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Player =
/*#__PURE__*/
function (_Moveable) {
  _inherits(Player, _Moveable);

  function Player(options) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, options));
    var playerImg = new Image(); // playerImg.src = 'https://www.spriters-resource.com/resources/sheets/86/88720.png';

    playerImg.src = "https://www.spriters-resource.com/resources/sheets/17/18910.png";
    _this.image = playerImg;
    _this.leftPressed = false;
    _this.rightPressed = false;
    _this.upPressed = false;
    _this.downPressed = false; // add the constructors right away

    document.addEventListener("keydown", _this.handleKeydown.bind(_assertThisInitialized(_assertThisInitialized(_this))), false);
    document.addEventListener("keyup", _this.handleKeyup.bind(_assertThisInitialized(_assertThisInitialized(_this))), false);
    _this.health = 1;
    return _this;
  }

  _createClass(Player, [{
    key: "hits",
    value: function hits(object) {
      object.remove();
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(event) {
      if (event.key === "ArrowRight" || event.key === "Right") {
        this.rightPressed = true;
      } else if (event.key === "ArrowLeft" || event.key === "Left") {
        this.leftPressed = true;
      } // the up and down are in seperate 


      if (event.key === "ArrowUp" || event.key === "Up") {
        this.upPressed = true;
      } else if (event.key === "ArrowDown" || event.key === "Down") {
        this.downPressed = true;
      }
    }
  }, {
    key: "handleKeyup",
    value: function handleKeyup(event) {
      if (event.key === "ArrowRight" || event.key === "Right") {
        this.rightPressed = false;
      } else if (event.key === "ArrowLeft" || event.key === "Left") {
        this.leftPressed = false;
      } // the up and down are in seperate 


      if (event.key === "ArrowUp" || event.key === "Up") {
        this.upPressed = false;
      } else if (event.key === "ArrowDown" || event.key === "Down") {
        this.downPressed = false;
      }
    } // add in can't go through edge of canvas

  }, {
    key: "move",
    value: function move() {
      this.posX = this.startX + this.dX * this.speed;
      this.posY = this.startY + this.dY * this.speed;

      if (this.leftPressed && this.posX > 16) {
        this.dX -= 1;
      } else if (this.rightPressed && this.posX < this.canvas.width - 16 - this.width) {
        this.dX += 1;
      }

      if (this.upPressed && this.posY > 16) {
        this.dY -= 1;
      } else if (this.downPressed && this.posY < this.canvas.height - 16 - this.height) {
        this.dY += 1;
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.tickCount += 1;

      if (this.tickCount > 2 * this.ticksPerFrame) {
        this.tickCount = 0;
      }

      var index = Math.floor(this.tickCount / this.ticksPerFrame);
      var frameIndicies;

      if (this.leftPressed) {
        frameIndicies = [[1, 103, 22, 32], [25, 103, 22, 32], [49, 103, 21, 32]];
      } else if (this.rightPressed) {
        frameIndicies = [[73, 103, 22, 32], [97, 103, 22, 32], [102, 103, 21, 32]];
      } else if (this.downPressed) {
        frameIndicies = [[87, 137, 27, 32], [115, 137, 28, 32], [144, 137, 28, 32]];
      } else if (this.upPressed) {
        frameIndicies = [[0, 137, 28, 32], [29, 137, 28, 32], [58, 137, 28, 32]];
      } else {
        // when stationary
        frameIndicies = [[57, 19, 22, 32], [57, 19, 22, 32], [57, 19, 22, 32]];
      }

      this.sX = frameIndicies[index][0];
      this.sY = frameIndicies[index][1];
      this.sWidth = frameIndicies[index][2];
      this.sHeight = frameIndicies[index][3];
      this.width = this.sWidth * (11 / 16);
      this.height = this.sHeight * (11 / 16);
    }
  }], [{
    key: "ohio",
    value: function ohio(game) {
      return new Player({
        game: game,
        canvas: game.canvas,
        sX: 97,
        sY: 103,
        sWidth: 22,
        sHeight: 32,
        startX: game.canvas.width / 2,
        startY: game.canvas.height / 2,
        speed: game.playerSpeed,
        width: 16,
        height: 22
      });
    }
  }]);

  return Player;
}(_moveable__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/projectile.js":
/*!***************************!*\
  !*** ./src/projectile.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moveable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveable */ "./src/moveable.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Projectile =
/*#__PURE__*/
function (_Moveable) {
  _inherits(Projectile, _Moveable);

  function Projectile(options) {
    var _this;

    _classCallCheck(this, Projectile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Projectile).call(this, options));
    var arrowImg = new Image();
    arrowImg.src = "https://s3.amazonaws.com/letsgoeros-dev/new_arrows.png";
    var arrowFlipped = new Image();
    arrowFlipped.src = "https://s3.amazonaws.com/letsgoeros-dev/new_arrows_flipped.png";
    _this.image = options.flipped ? arrowFlipped : arrowImg; // projectiles will originate off the screen and fly across
    // if they are off the left side they will have a positive dX, right side negative
    // if they are off the top side they will have a positive dY, bottom negative

    _this.dX = options.dX || (_this.startX < 0 ? 1 : -1);
    _this.dY = options.dY || (_this.startY < 0 ? 1 : -1);
    _this.deltaX = options.deltaX;
    _this.deltaY = options.deltaY;
    return _this;
  }

  _createClass(Projectile, [{
    key: "remove",
    value: function remove() {
      this.game.arrows.delete(this);
    } // generate arrows from various positions

  }, {
    key: "move",
    value: function move() {
      // generate a random number between 0 and 5 for the projecticle's x and y direction
      this.posX = this.startX + this.dX * this.speed;
      this.posY = this.startY + this.dY * this.speed; // if (this.startX < 0 && this.startY < 0) {
      //   this.dX += this.deltaX;
      //   this.dY += this.deltaY;
      // } else if (this.startX < 0 && this.startY > 0) {
      //   this.dX += this.deltaX;
      //   this.dY -= this.deltaY;
      // } else if (this.startX > 0 && this.startY < 0) {
      //   this.dX -= this.deltaX;
      //   this.dY += this.deltaY;
      // } else if (this.startX > 0 && this.startY > 0) {
      //   this.dX -= this.deltaX;
      //   this.dY -= this.deltaY;
      // }

      this.dX > 0 ? this.dX += this.deltaX : this.dX -= this.deltaX;
      this.dY > 0 ? this.dY += this.deltaY : this.dY -= this.deltaY; // remove the object from the game if it goes out of bounds

      if (this.posX > this.canvas.width || this.posX + this.width < 0 || this.posY > this.canvas.height || this.posY + this.height < 0) {
        this.remove();
      }
    }
  }], [{
    key: "sides",
    value: function sides(game) {
      var origin = [true, false][Math.floor(Math.random() * (2 - 0) + 0)]; // true will be left, false will be right

      var validStartY = Math.random() * (game.canvas.height - 16 - 16) + 16;
      var speed = Math.random() * (1 - 0.6) + 0.6;

      if (origin) {
        // left to right
        return new Projectile({
          game: game,
          canvas: game.canvas,
          flipped: true,
          sX: 69,
          sY: 104,
          sWidth: 29,
          sHeight: 3,
          startX: 8,
          startY: validStartY,
          dX: 1,
          dY: 0,
          deltaX: 2.5,
          deltaY: 0,
          speed: speed,
          width: 14.5,
          height: 1.5
        });
      } else {
        // right to left
        return new Projectile({
          game: game,
          canvas: game.canvas,
          sX: 7,
          sY: 26,
          sWidth: 29,
          sHeight: 3,
          startX: game.canvas.width - 8,
          startY: validStartY,
          dX: -1,
          dY: 0,
          deltaX: 2.5,
          deltaY: 0,
          speed: speed,
          width: 14.5,
          height: 1.5
        });
      }
    }
  }, {
    key: "topBottom",
    value: function topBottom(game) {
      var origin = [true, false][Math.floor(Math.random() * (2 - 0) + 0)]; // top is true, bottom is false

      var validStartX = Math.random() * (game.canvas.width - 16 - 16) + 16;
      var speed = Math.random() * (1 - 0.6) + 0.6;

      if (origin) {
        // top to bottom
        return new Projectile({
          game: game,
          canvas: game.canvas,
          sX: 102,
          sY: 0,
          sWidth: 3,
          sHeight: 29,
          startX: validStartX,
          startY: 8,
          dX: 0,
          dY: 1,
          deltaX: 0,
          deltaY: 2.5,
          speed: speed,
          width: 1.5,
          height: 14.5
        });
      } else {
        // bottom to top
        return new Projectile({
          game: game,
          canvas: game.canvas,
          flipped: true,
          sX: 0,
          sY: 104,
          sWidth: 3,
          sHeight: 29,
          startX: validStartX,
          startY: game.canvas.height - 8,
          dX: 0,
          dY: -1,
          deltaX: 0,
          deltaY: 2.5,
          speed: speed,
          width: 1.5,
          height: 14.5
        });
      }
    }
  }, {
    key: "random",
    value: function random(game) {
      return [Projectile.sides(game), Projectile.topBottom(game)][Math.floor(Math.random() * (2 - 0) + 0)];
    }
  }]);

  return Projectile;
}(_moveable__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Projectile);

/***/ }),

/***/ "./src/speed_boost.js":
/*!****************************!*\
  !*** ./src/speed_boost.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collectable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collectable */ "./src/collectable.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SpeedBoost =
/*#__PURE__*/
function (_Collectable) {
  _inherits(SpeedBoost, _Collectable);

  function SpeedBoost(options) {
    var _this;

    _classCallCheck(this, SpeedBoost);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SpeedBoost).call(this, options));
    var img = new Image();
    img.src = "https://s3.amazonaws.com/letsgoeros-dev/powerups_alpha.png";
    _this.image = img;
    _this.frameIndicies = [[359, 63, 15, 15], [371, 50, 11, 15], [386, 61, 11, 15], [396, 50, 7, 10], [409, 63, 7, 10], [412, 77, 11, 15], [387, 77, 15, 15], [365, 79, 11, 12]];
    return _this;
  }

  _createClass(SpeedBoost, [{
    key: "update",
    value: function update() {
      this.tickCount += 1;

      if (this.tickCount > 7 * this.ticksPerFrame) {
        this.tickCount = 0;
      }

      var index = Math.floor(this.tickCount / this.ticksPerFrame);
      this.sX = this.frameIndicies[index][0];
      this.sY = this.frameIndicies[index][1];
      this.sWidth = this.frameIndicies[index][2];
      this.sHeight = this.frameIndicies[index][3];
      this.width = this.sWidth * (2 / 3);
      this.height = this.sHeight * (2 / 3);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.game.powerUps.delete(this);
    }
  }], [{
    key: "generate",
    value: function generate(game) {
      var range = Math.random() * (25 - 7) + 7;
      var validStartX = Math.random() * (game.canvas.width - 15 - 16 - range) + (16 + range);
      var validStartY = Math.random() * (game.canvas.height - 15 - 16 - range) + (16 + range);
      var direction = ["V", "H"][Math.floor(Math.random() * (2 - 0) + 0)];
      var switchDirection = [true, false][Math.floor(Math.random() * (2 - 0) + 0)];
      return new SpeedBoost({
        game: game,
        sX: 359,
        sY: 63,
        sWidth: 15,
        sHeight: 15,
        startX: validStartX,
        startY: validStartY,
        speed: 0.3,
        dX: 1.5,
        width: 10,
        height: 10,
        range: range,
        direction: direction,
        switchDirection: switchDirection
      });
    }
  }]);

  return SpeedBoost;
}(_collectable__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (SpeedBoost);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map