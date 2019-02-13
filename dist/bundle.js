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
    var coinImg = new Image();
    coinImg.src = 'https://www.spriters-resource.com/resources/sheets/107/109971.png';
    _this.image = coinImg;
    return _this;
  }

  _createClass(Coin, [{
    key: "remove",
    value: function remove() {
      debugger;
      this.game.coins.delete(this);
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
    value: function remove() {
      console.log("Removing collectable");
    }
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
// move stuff in 'entry' to 'game' class that can be passed into objects
// 1. write collides function for objects - collectables disappear
// 2. write arrows to spam randomly from all sides
// 3. write potion and coin collectable generators
// 4. Game over?
// 5. 

document.addEventListener("DOMContentLoaded", function () {
  // set up the canvas
  var gameCanvas = document.getElementById("game-canvas");
  gameCanvas.width = 320;
  gameCanvas.height = 224;
  var ctx = gameCanvas.getContext('2d');
  var coinImg = new Image();
  coinImg.src = 'https://www.spriters-resource.com/resources/sheets/107/109971.png';
  var coin = new _coin__WEBPACK_IMPORTED_MODULE_3__["default"]({
    canvas: gameCanvas,
    sX: 6,
    sY: 6,
    sWidth: 60,
    sHeight: 60,
    startX: 50,
    startY: 50,
    speed: 0.3,
    dX: 1,
    width: 5,
    height: 5
  });
  var coin2 = new _collectable__WEBPACK_IMPORTED_MODULE_2__["default"]({
    canvas: gameCanvas,
    image: coinImg,
    sX: 6,
    sY: 6,
    sWidth: 60,
    sHeight: 60,
    startX: 100,
    startY: 100,
    speed: 0.3,
    dX: 1,
    width: 5,
    height: 5,
    range: 50,
    direction: "V"
  });
  var snake = new Image();
  snake.src = "https://www.spriters-resource.com/resources/sheets/84/87238.png";
  var testFire = new _projectile__WEBPACK_IMPORTED_MODULE_4__["default"]({
    canvas: gameCanvas,
    image: snake,
    sX: 83,
    sY: 112,
    sWidth: 18,
    sHeight: 17,
    startX: gameCanvas.width + 10,
    startY: -10,
    speed: 0.1,
    width: 18,
    height: 17
  });
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]({
    canvas: gameCanvas,
    coins: [coin, coin2],
    arrows: [testFire]
  });

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    game.draw(ctx);
  }

  animate();
}); // movement:
// https://www.kirupa.com/canvas/moving_shapes_canvas_keyboard.htm

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
/* harmony import */ var _collectable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collectable */ "./src/collectable.js");
/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coin */ "./src/coin.js");
/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectile */ "./src/projectile.js");
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
    this.potions = options.potions || new Set();
    this.arrows = options.arrows || new Set();
    this.gameObjects = Array.from(new Set([].concat(_toConsumableArray(this.coins), _toConsumableArray(this.arrows), _toConsumableArray(this.potions))));
    this.playerSpeed = 0.5;
    this.projectileSpeed = 0.1;
    this.score = 0;
    this.over = false; //functions

    this.detectCollisions = this.detectCollisions.bind(this);
    this.drawInfo = this.drawInfo.bind(this);
  }

  _createClass(Game, [{
    key: "addPlayer",
    value: function addPlayer() {
      var frog = new Image();
      frog.src = 'https://www.spriters-resource.com/resources/sheets/86/88720.png';
      var player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]({
        game: this,
        canvas: this.canvas,
        image: frog,
        sX: 24,
        sY: 21,
        sWidth: 13,
        sHeight: 10,
        startX: this.canvas.width / 2,
        startY: this.canvas.height / 2,
        speed: this.playerSpeed,
        width: 13,
        height: 10
      });
      this.player = player;
    }
  }, {
    key: "detectCollisions",
    value: function detectCollisions() {
      for (var i = 0; i < this.gameObjects.length; i++) {
        var obj = this.gameObjects[i];

        if (this.player.isCollidingWith(obj)) {
          this.player.hits(obj);

          if (obj instanceof _collectable__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            this.score++;
          } else if (obj instanceof _projectile__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            this.player.health -= 0.01;

            if (this.player.health <= 0) {
              this.over = true;
              window.alert("You lose");
              document.location.reload();
            }
          }
        }
      }
    }
  }, {
    key: "drawScore",
    value: function drawScore(ctx) {
      ctx.font = "12px Courier New";
      ctx.fillStyle = "black";
      ctx.fillText("Score: " + this.score, 10, 15);
    }
  }, {
    key: "drawHealth",
    value: function drawHealth(ctx) {
      ctx.font = "12px Courier New";
      ctx.fillStyle = "black";
      ctx.fillText("Health: ", this.canvas.width - 125, 15);
    }
  }, {
    key: "drawHealthBar",
    value: function drawHealthBar(ctx) {
      ctx.beginPath();
      ctx.rect(this.canvas.width - 62, 5, 50, 12);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.rect(this.canvas.width - 61, 6, this.player.health * 47, 10);

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
    key: "drawInfo",
    value: function drawInfo(ctx) {
      this.drawScore(ctx);
      this.drawHealth(ctx);
      this.drawHealthBar(ctx);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (!this.player) {
        this.addPlayer();
      }

      if (!this.over) {
        this.drawInfo(ctx);
        this.player.draw(ctx);
        this.gameObjects.forEach(function (object) {
          return object.draw(ctx);
        });
        this.detectCollisions();
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
    return _this;
  }

  _createClass(Moveable, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.image, this.sX, this.sY, this.sWidth, this.sHeight, this.posX, this.posY, this.width, this.height);
      this.move();
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
/* harmony import */ var _collectable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collectable */ "./src/collectable.js");
/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coin */ "./src/coin.js");
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
      console.log("Player is hitting");

      if (object instanceof _coin__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        debugger;
        object.remove();
      }
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

      if (this.leftPressed && this.posX > 0) {
        this.dX -= 1; // console.log("left!");
        // this.posX -= 1;
      } else if (this.rightPressed && this.posX < this.canvas.width - this.width) {
        this.dX += 1; // this.posX += 1;
      }

      if (this.upPressed && this.posY > 0) {
        this.dY -= 1;
      } else if (this.downPressed && this.posY < this.canvas.height - this.height) {
        this.dY += 1;
      }
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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Projectile =
/*#__PURE__*/
function (_Moveable) {
  _inherits(Projectile, _Moveable);

  function Projectile(options) {
    var _this;

    _classCallCheck(this, Projectile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Projectile).call(this, options)); // projectiles will originate off the screen and fly across
    // if they are off the left side they will have a positive dX, right side negative
    // if they are off the top side they will have a positive dY, bottom negative

    _this.dX = _this.startX < 0 ? 1 : -1;
    _this.dY = _this.startY < 0 ? 1 : -1;
    _this.deltaX = Math.floor(Math.random() * (1000 - 500)) / 100;
    _this.deltaY = Math.floor(Math.random() * (1000 - 500)) / 100;
    _this.move = _this.move.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Projectile, [{
    key: "move",
    value: function move() {
      // generate a random number between 0 and 5 for the projecticle's x and y direction
      this.posX = this.startX + this.dX * this.speed;
      this.posY = this.startY + this.dY * this.speed;

      if (this.startX < 0 && this.startY < 0) {
        this.dX += this.deltaX;
        this.dY += this.deltaY;
      } else if (this.startX < 0 && this.startY > 0) {
        this.dX += this.deltaX;
        this.dY -= this.deltaY;
      } else if (this.startX > 0 && this.startY < 0) {
        this.dX -= this.deltaX;
        this.dY += this.deltaY;
      } else if (this.startX > 0 && this.startY > 0) {
        this.dX -= this.deltaX;
        this.dY -= this.deltaY;
      }
    }
  }]);

  return Projectile;
}(_moveable__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Projectile);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map