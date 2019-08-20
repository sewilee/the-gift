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

/***/ "./src/characters/player.js":
/*!**********************************!*\
  !*** ./src/characters/player.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/sprite */ \"./src/game/sprite.js\");\n/* harmony import */ var _game_game_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/game_object */ \"./src/game/game_object.js\");\n\n\n\nclass Player extends _game_game_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(x, y, engine, offset) {\n        super();\n        this.position = [x, y]\n        this.engine = engine;\n        this.offset = offset\n\n        this.facing = 0;\n        this.lastFace = this.facing;\n\n        const img = \"asset/sprites/Kq0m7RP.png\";\n\n        this.renderables = [\n            new _game_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](img, 144, 192, 3, 4, 3, 2, 13), //left\n            new _game_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](img, 144, 192, 3, 4, 6, 2, 13), //right\n            new _game_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](img, 144, 192, 3, 4, 0, 0, 13), //still\n        ]\n    }\n\n    translate(x, y) {\n\n        // let pX = x + this.position[0] + this.offset[0] + this.renderables[0].subWidth / 2;\n        // let pY = y + this.position[1] + this.offset[1] + this.renderables[0].subHeight - 10;\n\n        super.translate(x, y);\n    }\n\n    draw(ctx) {\n        super.draw(ctx);\n        ctx.save();\n        ctx.translate(this.position[0] + this.offset[0], this.position[1] + this.offset[1]);\n\n        // if (this.currentHealth < this.prevHealth) {\n        //     this.renderables[this.facing].draw(ctx);\n        //     this.prevHealth = this.currentHealth;\n        // } else {\n        //     this.renderables[this.facing].draw(ctx)\n        // }\n\n        this.renderables[this.facing].draw(ctx)\n\n        ctx.restore();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVycy9wbGF5ZXIuanM/NGJjYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBb0M7QUFDUzs7QUFFN0MscUJBQXFCLHlEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixvREFBTTtBQUN0QixnQkFBZ0Isb0RBQU07QUFDdEIsZ0JBQWdCLG9EQUFNO0FBQ3RCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSxxRUFBTSxFQUFDIiwiZmlsZSI6Ii4vc3JjL2NoYXJhY3RlcnMvcGxheWVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwcml0ZSBmcm9tICcuLi9nYW1lL3Nwcml0ZSc7XG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuLi9nYW1lL2dhbWVfb2JqZWN0JztcblxuY2xhc3MgUGxheWVyIGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgZW5naW5lLCBvZmZzZXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFt4LCB5XVxuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXRcblxuICAgICAgICB0aGlzLmZhY2luZyA9IDA7XG4gICAgICAgIHRoaXMubGFzdEZhY2UgPSB0aGlzLmZhY2luZztcblxuICAgICAgICBjb25zdCBpbWcgPSBcImFzc2V0L3Nwcml0ZXMvS3EwbTdSUC5wbmdcIjtcblxuICAgICAgICB0aGlzLnJlbmRlcmFibGVzID0gW1xuICAgICAgICAgICAgbmV3IFNwcml0ZShpbWcsIDE0NCwgMTkyLCAzLCA0LCAzLCAyLCAxMyksIC8vbGVmdFxuICAgICAgICAgICAgbmV3IFNwcml0ZShpbWcsIDE0NCwgMTkyLCAzLCA0LCA2LCAyLCAxMyksIC8vcmlnaHRcbiAgICAgICAgICAgIG5ldyBTcHJpdGUoaW1nLCAxNDQsIDE5MiwgMywgNCwgMCwgMCwgMTMpLCAvL3N0aWxsXG4gICAgICAgIF1cbiAgICB9XG5cbiAgICB0cmFuc2xhdGUoeCwgeSkge1xuXG4gICAgICAgIC8vIGxldCBwWCA9IHggKyB0aGlzLnBvc2l0aW9uWzBdICsgdGhpcy5vZmZzZXRbMF0gKyB0aGlzLnJlbmRlcmFibGVzWzBdLnN1YldpZHRoIC8gMjtcbiAgICAgICAgLy8gbGV0IHBZID0geSArIHRoaXMucG9zaXRpb25bMV0gKyB0aGlzLm9mZnNldFsxXSArIHRoaXMucmVuZGVyYWJsZXNbMF0uc3ViSGVpZ2h0IC0gMTA7XG5cbiAgICAgICAgc3VwZXIudHJhbnNsYXRlKHgsIHkpO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdICsgdGhpcy5vZmZzZXRbMF0sIHRoaXMucG9zaXRpb25bMV0gKyB0aGlzLm9mZnNldFsxXSk7XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuY3VycmVudEhlYWx0aCA8IHRoaXMucHJldkhlYWx0aCkge1xuICAgICAgICAvLyAgICAgdGhpcy5yZW5kZXJhYmxlc1t0aGlzLmZhY2luZ10uZHJhdyhjdHgpO1xuICAgICAgICAvLyAgICAgdGhpcy5wcmV2SGVhbHRoID0gdGhpcy5jdXJyZW50SGVhbHRoO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy5yZW5kZXJhYmxlc1t0aGlzLmZhY2luZ10uZHJhdyhjdHgpXG4gICAgICAgIC8vIH1cblxuICAgICAgICB0aGlzLnJlbmRlcmFibGVzW3RoaXMuZmFjaW5nXS5kcmF3KGN0eClcblxuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/characters/player.js\n");

/***/ }),

/***/ "./src/game/engine.js":
/*!****************************!*\
  !*** ./src/game/engine.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./src/game/input.js\");\n// import GameObject from './game_object';\n\n\nclass Engine {\n    constructor() {\n        //grabs canvas by id\n        this.canvas = document.getElementById(\"canvas\");\n        this.ctx = this.canvas.getContext('2d');\n\n        //determines whether scaled images are smoothed\n        this.ctx.imageSmoothingEnabled = false;\n\n        //clears canvas\n        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n        // this.phyDebug = false;\n\n        this.lastTime = new Date().getTime();\n\n        //\n        this.objs = [];\n\n        //stores key inputs\n        this.input = new _input__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        // this.gameStart = true;\n\n        window.requestAnimationFrame(this.loop.bind(this));\n    }\n\n    addObject(obj) {\n        this.objs.push(obj);\n        // if (obj instanceof GameObject) {\n        //     this.objs.push(obj);\n        // }\n        // else {\n        //     console.error(\"Invalid object added\")\n        // }\n    }\n\n    loop() {\n            let time = new Date().getTime();\n            let dt = (time - this.lastTime) / 1000;\n\n            //do update here\n            if (this.update) {\n                this.update(dt);\n            }\n\n            //do drawing here\n            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n            this.objs.forEach((obj, idx) => {\n                    obj.update(this, dt);\n                    obj.draw(this.ctx, this.canvas);\n            });\n\n            this.lastTime = time;\n            window.requestAnimationFrame(this.loop.bind(this));\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Engine);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9lbmdpbmUuanM/YjFlYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsOENBQUs7QUFDOUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHFFQUFNIiwiZmlsZSI6Ii4vc3JjL2dhbWUvZW5naW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9nYW1lX29iamVjdCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XG5cbmNsYXNzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vZ3JhYnMgY2FudmFzIGJ5IGlkXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAvL2RldGVybWluZXMgd2hldGhlciBzY2FsZWQgaW1hZ2VzIGFyZSBzbW9vdGhlZFxuICAgICAgICB0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAvL2NsZWFycyBjYW52YXNcbiAgICAgICAgLy8gdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIHRoaXMucGh5RGVidWcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5vYmpzID0gW107XG5cbiAgICAgICAgLy9zdG9yZXMga2V5IGlucHV0c1xuICAgICAgICB0aGlzLmlucHV0ID0gbmV3IElucHV0O1xuICAgICAgICAvLyB0aGlzLmdhbWVTdGFydCA9IHRydWU7XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgYWRkT2JqZWN0KG9iaikge1xuICAgICAgICB0aGlzLm9ianMucHVzaChvYmopO1xuICAgICAgICAvLyBpZiAob2JqIGluc3RhbmNlb2YgR2FtZU9iamVjdCkge1xuICAgICAgICAvLyAgICAgdGhpcy5vYmpzLnB1c2gob2JqKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIG9iamVjdCBhZGRlZFwiKVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgbG9vcCgpIHtcbiAgICAgICAgICAgIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBsZXQgZHQgPSAodGltZSAtIHRoaXMubGFzdFRpbWUpIC8gMTAwMDtcblxuICAgICAgICAgICAgLy9kbyB1cGRhdGUgaGVyZVxuICAgICAgICAgICAgaWYgKHRoaXMudXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoZHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2RvIGRyYXdpbmcgaGVyZVxuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5vYmpzLmZvckVhY2goKG9iaiwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9iai51cGRhdGUodGhpcywgZHQpO1xuICAgICAgICAgICAgICAgICAgICBvYmouZHJhdyh0aGlzLmN0eCwgdGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbmdpbmU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/engine.js\n");

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine.js */ \"./src/game/engine.js\");\n/* harmony import */ var _characters_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../characters/player.js */ \"./src/characters/player.js\");\n\n\n\nclass Game {\n    constructor() {\n        this.run();\n    }\n\n    run() {\n        let engine = new _engine_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n        let player = new _characters_player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 0, engine, [0,0]);\n        engine.addObject(player);\n\n        engine.update = (dt) => {\n            // if (engine.input.isKeyPressed(\"ArrowUp\")) {\n            //     console.log(\"up\")\n            // }\n            // if (engine.input.isKeyPressed(\"ArrowDown\")) {\n            //     console.log(\"down\")\n            // }\n            if (engine.input.isKeyPressed(\"ArrowLeft\")) {\n                console.log(\"left\")\n                player.facing = 0;\n            }\n            if (engine.input.isKeyPressed(\"ArrowRight\")) {\n                console.log(\"right\")\n                player.facing = 1;\n            }\n        };\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLmpzPzhmZDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQWlDO0FBQ1k7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGtEQUFNOztBQUUvQix5QkFBeUIsNkRBQU07QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FQUFJIiwiZmlsZSI6Ii4vc3JjL2dhbWUvZ2FtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbmdpbmUgZnJvbSAnLi9lbmdpbmUuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9jaGFyYWN0ZXJzL3BsYXllci5qcyc7XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJ1bigpO1xuICAgIH1cblxuICAgIHJ1bigpIHtcbiAgICAgICAgbGV0IGVuZ2luZSA9IG5ldyBFbmdpbmUoKTtcblxuICAgICAgICBsZXQgcGxheWVyID0gbmV3IFBsYXllcigwLCAwLCBlbmdpbmUsIFswLDBdKTtcbiAgICAgICAgZW5naW5lLmFkZE9iamVjdChwbGF5ZXIpO1xuXG4gICAgICAgIGVuZ2luZS51cGRhdGUgPSAoZHQpID0+IHtcbiAgICAgICAgICAgIC8vIGlmIChlbmdpbmUuaW5wdXQuaXNLZXlQcmVzc2VkKFwiQXJyb3dVcFwiKSkge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwidXBcIilcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGlmIChlbmdpbmUuaW5wdXQuaXNLZXlQcmVzc2VkKFwiQXJyb3dEb3duXCIpKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJkb3duXCIpXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAoZW5naW5lLmlucHV0LmlzS2V5UHJlc3NlZChcIkFycm93TGVmdFwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGVmdFwiKVxuICAgICAgICAgICAgICAgIHBsYXllci5mYWNpbmcgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVuZ2luZS5pbnB1dC5pc0tleVByZXNzZWQoXCJBcnJvd1JpZ2h0XCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyaWdodFwiKVxuICAgICAgICAgICAgICAgIHBsYXllci5mYWNpbmcgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game/game.js\n");

/***/ }),

/***/ "./src/game/game_object.js":
/*!*********************************!*\
  !*** ./src/game/game_object.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameObject {\n    constructor() {\n        this.position = [0, 0];\n        this.children = [];\n        this.prevPosition = [0, 0];\n        this.lastTime = new Date().getTime();\n    }\n\n    translate(x, y) {\n        this.position[0] += x;\n        this.position[1] += y;\n    }\n\n    addChild(child) {\n        this.children.push(child);\n    }\n\n    update(engine, dt) {\n        this.children.forEach(child => {\n            child.update(engine, dt);\n        });\n    }\n\n    draw(ctx) {\n        ctx.save();\n        ctx.translate(this.position[0], this.position[1]);\n\n        this.children.forEach(child => {\n            child.draw();\n        });\n\n        ctx.restore();\n        this.prevPosition[0] = this.position[0];\n        this.prevPosition[1] = this.position[1];\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lX29iamVjdC5qcz9hYWZmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUseUVBQVUiLCJmaWxlIjoiLi9zcmMvZ2FtZS9nYW1lX29iamVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWVPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gWzAsIDBdO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMucHJldlBvc2l0aW9uID0gWzAsIDBdO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxuXG4gICAgdHJhbnNsYXRlKHgsIHkpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvblswXSArPSB4O1xuICAgICAgICB0aGlzLnBvc2l0aW9uWzFdICs9IHk7XG4gICAgfVxuXG4gICAgYWRkQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZW5naW5lLCBkdCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQudXBkYXRlKGVuZ2luZSwgZHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBjaGlsZC5kcmF3KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgIHRoaXMucHJldlBvc2l0aW9uWzBdID0gdGhpcy5wb3NpdGlvblswXTtcbiAgICAgICAgdGhpcy5wcmV2UG9zaXRpb25bMV0gPSB0aGlzLnBvc2l0aW9uWzFdO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/game_object.js\n");

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

/***/ "./src/game/sprite.js":
/*!****************************!*\
  !*** ./src/game/sprite.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Sprite {\n    constructor(\n        image = \"assets/images/blue-slime-png-2.png\",\n        sheetWidth = 64,\n        sheetHeight = 64,\n        cols = 1,\n        rows = 1,\n        startFrame = 0,\n        frameCount = 0,\n        speed = 1,\n        scale = 1) {\n        \n        //create new image and assign it a source\n        this.img = new Image();\n        this.img.src = image;\n\n        //frame = which sprite index is it at currently\n        this.frame = startFrame;\n        \n        //startFrame = sprite index it starts with (in grid system)\n        this.startFrame = startFrame;\n\n        //frameCount = count of frames you want to loop over\n        this.frameCount = frameCount;\n\n        //columns and rows of sprite sheet\n        this.cols = cols;\n        this.rows = rows;\n\n        //sheet size\n        this.sheetWidth = sheetWidth;\n        this.sheetHeight = sheetHeight;\n\n        //size of each sprite\n        this.subWidth = this.sheetWidth / this.cols;\n        this.subHeight = this.sheetHeight / this.rows;\n\n        //speed of next frame per 1000ms\n        this.speed = speed;\n        this.animeTime = new Date().getTime();\n        \n        //scale of sprite\n        this.scale = scale;\n    }\n\n    draw(ctx) {\n        let t = new Date().getTime();\n\n        //if current time is greater than animated time, increase frame index, reassign animated time for delay\n        if (t > this.animeTime) {\n            this.frame++;\n            this.animeTime = t + 1000 / this.speed;\n        }\n\n        //if frame index is greater than start frame + frame count, reassign current frame index to start frame\n        if (this.frame > this.startFrame + this.frameCount) {\n            this.frame = this.startFrame;\n        }\n\n        //position of sprite in sheet\n        let posX = (this.frame % this.cols) * this.subWidth;\n        let posY = Math.floor(this.frame / this.cols) * this.subHeight;\n\n        //draw \n        ctx.drawImage(this.img, posX, posY, this.subWidth, this.subHeight, 0, 0, this.subWidth * this.scale, this.subHeight * this.scale);\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sprite);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9zcHJpdGUuanM/MjI3ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUscUVBQU0iLCJmaWxlIjoiLi9zcmMvZ2FtZS9zcHJpdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTcHJpdGUge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBpbWFnZSA9IFwiYXNzZXRzL2ltYWdlcy9ibHVlLXNsaW1lLXBuZy0yLnBuZ1wiLFxuICAgICAgICBzaGVldFdpZHRoID0gNjQsXG4gICAgICAgIHNoZWV0SGVpZ2h0ID0gNjQsXG4gICAgICAgIGNvbHMgPSAxLFxuICAgICAgICByb3dzID0gMSxcbiAgICAgICAgc3RhcnRGcmFtZSA9IDAsXG4gICAgICAgIGZyYW1lQ291bnQgPSAwLFxuICAgICAgICBzcGVlZCA9IDEsXG4gICAgICAgIHNjYWxlID0gMSkge1xuICAgICAgICBcbiAgICAgICAgLy9jcmVhdGUgbmV3IGltYWdlIGFuZCBhc3NpZ24gaXQgYSBzb3VyY2VcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gaW1hZ2U7XG5cbiAgICAgICAgLy9mcmFtZSA9IHdoaWNoIHNwcml0ZSBpbmRleCBpcyBpdCBhdCBjdXJyZW50bHlcbiAgICAgICAgdGhpcy5mcmFtZSA9IHN0YXJ0RnJhbWU7XG4gICAgICAgIFxuICAgICAgICAvL3N0YXJ0RnJhbWUgPSBzcHJpdGUgaW5kZXggaXQgc3RhcnRzIHdpdGggKGluIGdyaWQgc3lzdGVtKVxuICAgICAgICB0aGlzLnN0YXJ0RnJhbWUgPSBzdGFydEZyYW1lO1xuXG4gICAgICAgIC8vZnJhbWVDb3VudCA9IGNvdW50IG9mIGZyYW1lcyB5b3Ugd2FudCB0byBsb29wIG92ZXJcbiAgICAgICAgdGhpcy5mcmFtZUNvdW50ID0gZnJhbWVDb3VudDtcblxuICAgICAgICAvL2NvbHVtbnMgYW5kIHJvd3Mgb2Ygc3ByaXRlIHNoZWV0XG4gICAgICAgIHRoaXMuY29scyA9IGNvbHM7XG4gICAgICAgIHRoaXMucm93cyA9IHJvd3M7XG5cbiAgICAgICAgLy9zaGVldCBzaXplXG4gICAgICAgIHRoaXMuc2hlZXRXaWR0aCA9IHNoZWV0V2lkdGg7XG4gICAgICAgIHRoaXMuc2hlZXRIZWlnaHQgPSBzaGVldEhlaWdodDtcblxuICAgICAgICAvL3NpemUgb2YgZWFjaCBzcHJpdGVcbiAgICAgICAgdGhpcy5zdWJXaWR0aCA9IHRoaXMuc2hlZXRXaWR0aCAvIHRoaXMuY29scztcbiAgICAgICAgdGhpcy5zdWJIZWlnaHQgPSB0aGlzLnNoZWV0SGVpZ2h0IC8gdGhpcy5yb3dzO1xuXG4gICAgICAgIC8vc3BlZWQgb2YgbmV4dCBmcmFtZSBwZXIgMTAwMG1zXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy5hbmltZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vc2NhbGUgb2Ygc3ByaXRlXG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBsZXQgdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIC8vaWYgY3VycmVudCB0aW1lIGlzIGdyZWF0ZXIgdGhhbiBhbmltYXRlZCB0aW1lLCBpbmNyZWFzZSBmcmFtZSBpbmRleCwgcmVhc3NpZ24gYW5pbWF0ZWQgdGltZSBmb3IgZGVsYXlcbiAgICAgICAgaWYgKHQgPiB0aGlzLmFuaW1lVGltZSkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZSsrO1xuICAgICAgICAgICAgdGhpcy5hbmltZVRpbWUgPSB0ICsgMTAwMCAvIHRoaXMuc3BlZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIGZyYW1lIGluZGV4IGlzIGdyZWF0ZXIgdGhhbiBzdGFydCBmcmFtZSArIGZyYW1lIGNvdW50LCByZWFzc2lnbiBjdXJyZW50IGZyYW1lIGluZGV4IHRvIHN0YXJ0IGZyYW1lXG4gICAgICAgIGlmICh0aGlzLmZyYW1lID4gdGhpcy5zdGFydEZyYW1lICsgdGhpcy5mcmFtZUNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lID0gdGhpcy5zdGFydEZyYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9wb3NpdGlvbiBvZiBzcHJpdGUgaW4gc2hlZXRcbiAgICAgICAgbGV0IHBvc1ggPSAodGhpcy5mcmFtZSAlIHRoaXMuY29scykgKiB0aGlzLnN1YldpZHRoO1xuICAgICAgICBsZXQgcG9zWSA9IE1hdGguZmxvb3IodGhpcy5mcmFtZSAvIHRoaXMuY29scykgKiB0aGlzLnN1YkhlaWdodDtcblxuICAgICAgICAvL2RyYXcgXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHBvc1gsIHBvc1ksIHRoaXMuc3ViV2lkdGgsIHRoaXMuc3ViSGVpZ2h0LCAwLCAwLCB0aGlzLnN1YldpZHRoICogdGhpcy5zY2FsZSwgdGhpcy5zdWJIZWlnaHQgKiB0aGlzLnNjYWxlKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ByaXRlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/sprite.js\n");

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