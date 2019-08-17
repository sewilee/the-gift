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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game/engine.js":
/*!****************************!*\
  !*** ./src/game/engine.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./src/game/input.js\");\n// import GameObject from './game_object';\n\n\nclass Engine {\n    constructor() {\n        //grabs canvas by id\n        this.canvas = document.getElementById(\"canvas\");\n        this.ctx = this.canvas.getContext('2d');\n\n        //determines whether scaled images are smoothed\n        this.ctx.imageSmoothingEnabled = false;\n\n        //clears canvas\n        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n        // this.phyDebug = false;\n\n        this.lastTime = new Date().getTime();\n\n        //\n        this.objs = [];\n\n        //stores key inputs\n        this.input = new _input__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        // this.gameStart = true;\n\n        window.requestAnimationFrame(this.loop.bind(this));\n    }\n\n    addObject(obj) {\n        this.objs.push(obj);\n        // if (obj instanceof GameObject) {\n        //     this.objs.push(obj);\n        // }\n        // else {\n        //     console.error(\"Invalid object added\")\n        // }\n    }\n\n    loop() {\n            let time = new Date().getTime();\n            let dt = (time - this.lastTime) / 1000;\n\n            //do update here\n            if (this.update) {\n                this.update(dt);\n            }\n\n            //do drawing here\n            this.objs.forEach((obj, idx) => {\n                    obj.update(this, dt);\n                    obj.draw(this.ctx, this.canvas);\n            });\n\n            this.lastTime = time;\n            window.requestAnimationFrame(this.loop.bind(this));\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Engine);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9lbmdpbmUuanM/YjFlYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsOENBQUs7QUFDOUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxxRUFBTSIsImZpbGUiOiIuL3NyYy9nYW1lL2VuZ2luZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vZ2FtZV9vYmplY3QnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xuXG5jbGFzcyBFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL2dyYWJzIGNhbnZhcyBieSBpZFxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgLy9kZXRlcm1pbmVzIHdoZXRoZXIgc2NhbGVkIGltYWdlcyBhcmUgc21vb3RoZWRcbiAgICAgICAgdGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy9jbGVhcnMgY2FudmFzXG4gICAgICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyB0aGlzLnBoeURlYnVnID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMub2JqcyA9IFtdO1xuXG4gICAgICAgIC8vc3RvcmVzIGtleSBpbnB1dHNcbiAgICAgICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dDtcbiAgICAgICAgLy8gdGhpcy5nYW1lU3RhcnQgPSB0cnVlO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGFkZE9iamVjdChvYmopIHtcbiAgICAgICAgdGhpcy5vYmpzLnB1c2gob2JqKTtcbiAgICAgICAgLy8gaWYgKG9iaiBpbnN0YW5jZW9mIEdhbWVPYmplY3QpIHtcbiAgICAgICAgLy8gICAgIHRoaXMub2Jqcy5wdXNoKG9iaik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBvYmplY3QgYWRkZWRcIilcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGxvb3AoKSB7XG4gICAgICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgbGV0IGR0ID0gKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSAvIDEwMDA7XG5cbiAgICAgICAgICAgIC8vZG8gdXBkYXRlIGhlcmVcbiAgICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKGR0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9kbyBkcmF3aW5nIGhlcmVcbiAgICAgICAgICAgIHRoaXMub2Jqcy5mb3JFYWNoKChvYmosIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYmoudXBkYXRlKHRoaXMsIGR0KTtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmRyYXcodGhpcy5jdHgsIHRoaXMuY2FudmFzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5naW5lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/engine.js\n");

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine.js */ \"./src/game/engine.js\");\n\n\nclass Game {\n    constructor() {\n        this.run();\n    }\n\n    run() {\n        let engine = new _engine_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n        engine.update = (dt) => {\n            if (engine.input.isKeyPressed(\"ArrowUp\")) {\n                console.log(\"up\")\n            }\n            if (engine.input.isKeyPressed(\"ArrowDown\")) {\n                console.log(\"down\")\n            }\n            if (engine.input.isKeyPressed(\"ArrowLeft\")) {\n                console.log(\"left\")\n            }\n            if (engine.input.isKeyPressed(\"ArrowRight\")) {\n                console.log(\"right\")\n            }\n        };\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLmpzPzhmZDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsa0RBQU07O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FQUFJIiwiZmlsZSI6Ii4vc3JjL2dhbWUvZ2FtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbmdpbmUgZnJvbSAnLi9lbmdpbmUuanMnO1xuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ydW4oKTtcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIGxldCBlbmdpbmUgPSBuZXcgRW5naW5lKCk7XG5cbiAgICAgICAgZW5naW5lLnVwZGF0ZSA9IChkdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVuZ2luZS5pbnB1dC5pc0tleVByZXNzZWQoXCJBcnJvd1VwXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVuZ2luZS5pbnB1dC5pc0tleVByZXNzZWQoXCJBcnJvd0Rvd25cIikpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRvd25cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbmdpbmUuaW5wdXQuaXNLZXlQcmVzc2VkKFwiQXJyb3dMZWZ0XCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZWZ0XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW5naW5lLmlucHV0LmlzS2V5UHJlc3NlZChcIkFycm93UmlnaHRcIikpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJpZ2h0XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/game.js\n");

/***/ }),

/***/ "./src/game/input.js":
/*!***************************!*\
  !*** ./src/game/input.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Input{\n    constructor(){\n        this.keysPressed = [];\n\n        document.onkeydown = (e) => {\n            this.keysPressed[e.code] = true;\n        }\n\n        document.onkeyup = (e) => {\n            this.keysPressed[e.code] = false;\n        }\n    }\n\n    isKeyPressed(keyCode){\n        return this.keysPressed[keyCode];\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9pbnB1dC5qcz9iYzBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxvRUFBSyIsImZpbGUiOiIuL3NyYy9nYW1lL2lucHV0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW5wdXR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5rZXlzUHJlc3NlZCA9IFtdO1xuXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleXNQcmVzc2VkW2UuY29kZV0gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQub25rZXl1cCA9IChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleXNQcmVzc2VkW2UuY29kZV0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzS2V5UHJlc3NlZChrZXlDb2RlKXtcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5c1ByZXNzZWRba2V5Q29kZV07XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/input.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game */ \"./src/game/game.js\");\n\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n    const welcome = new Welcome(document)\n    welcome.playGame();\n});\n\nclass Welcome {\n    constructor(document) {\n        this.document = document;\n        this.playing = false;\n    }\n\n    playGame() {\n        return new _game_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsa0RBQUk7QUFDdkI7QUFDQSIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS9nYW1lJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCB3ZWxjb21lID0gbmV3IFdlbGNvbWUoZG9jdW1lbnQpXG4gICAgd2VsY29tZS5wbGF5R2FtZSgpO1xufSk7XG5cbmNsYXNzIFdlbGNvbWUge1xuICAgIGNvbnN0cnVjdG9yKGRvY3VtZW50KSB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcGxheUdhbWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgR2FtZSgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });