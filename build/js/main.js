/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Room = /*#__PURE__*/_createClass(function Room() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? 0 : _ref$id,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? "Room" : _ref$name,
    _ref$entities = _ref.entities,
    entities = _ref$entities === void 0 ? [] : _ref$entities;
  _classCallCheck(this, Room);
  this.id = id;
  this.name = name;
  this.entities = entities;
});
var Action = /*#__PURE__*/_createClass(function Action() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref2$id = _ref2.id,
    id = _ref2$id === void 0 ? 0 : _ref2$id,
    _ref2$name = _ref2.name,
    name = _ref2$name === void 0 ? "Action" : _ref2$name,
    _ref2$conditions = _ref2.conditions,
    conditions = _ref2$conditions === void 0 ? [] : _ref2$conditions,
    _ref2$effects = _ref2.effects,
    effects = _ref2$effects === void 0 ? [] : _ref2$effects,
    _ref2$message = _ref2.message,
    message = _ref2$message === void 0 ? null : _ref2$message;
  _classCallCheck(this, Action);
  this.id = id;
  this.name = name;
  this.conditions = conditions;
  this.effects = effects;
  this.message = message;
});
var Entity = /*#__PURE__*/_createClass(function Entity() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref3$id = _ref3.id,
    id = _ref3$id === void 0 ? "" : _ref3$id,
    _ref3$name = _ref3.name,
    name = _ref3$name === void 0 ? "Entity" : _ref3$name,
    _ref3$actions = _ref3.actions,
    actions = _ref3$actions === void 0 ? [] : _ref3$actions,
    _ref3$states = _ref3.states,
    states = _ref3$states === void 0 ? [] : _ref3$states;
  _classCallCheck(this, Entity);
  this.id = id;
  this.name = name;
  this.actions = actions;
  this.states = states;
});
var Effect = /*#__PURE__*/_createClass(function Effect() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref4$id = _ref4.id,
    id = _ref4$id === void 0 ? 0 : _ref4$id,
    _ref4$type = _ref4.type,
    type = _ref4$type === void 0 ? "" : _ref4$type,
    _ref4$value = _ref4.value,
    value = _ref4$value === void 0 ? "" : _ref4$value,
    _ref4$message = _ref4.message,
    message = _ref4$message === void 0 ? "" : _ref4$message;
  _classCallCheck(this, Effect);
  this.id = id;
  this.type = type;
  this.value = value;
  this.message = message;
});
var State = /*#__PURE__*/_createClass(function State() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref5$id = _ref5.id,
    id = _ref5$id === void 0 ? 0 : _ref5$id,
    _ref5$value = _ref5.value,
    value = _ref5$value === void 0 ? "" : _ref5$value;
  _classCallCheck(this, State);
  this.id = id;
  this.value = value;
});
var Condition = /*#__PURE__*/_createClass(function Condition() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref6$key = _ref6.key,
    key = _ref6$key === void 0 ? 0 : _ref6$key,
    _ref6$type = _ref6.type,
    type = _ref6$type === void 0 ? "" : _ref6$type,
    _ref6$value = _ref6.value,
    value = _ref6$value === void 0 ? "" : _ref6$value,
    _ref6$message = _ref6.message,
    message = _ref6$message === void 0 ? "" : _ref6$message;
  _classCallCheck(this, Condition);
  this.key = key;
  this.type = type;
  this.value = value;
  this.message = message;
});
var level = {
  rooms: [new Room({
    id: "hallway",
    name: "Hallway",
    // Entities are objects that can be interacted with
    entities: [new Entity({
      id: "door",
      name: "door",
      // internal variables
      states: [new State({
        id: "locked",
        value: true
      })],
      // Actions can be triggered by typing <action.name> <entity.name>
      actions: [new Action({
        id: "open",
        name: "Open",
        message: "You try to open the door",
        conditions: [new Condition({
          key: "locked",
          value: false,
          message: "The door is locked"
        })],
        effects: [new Effect({
          key: "move",
          type: "move",
          value: "kitchen",
          message: "You moved to the kitchen"
        })]
      }), new Action({
        id: "describe",
        name: "Describe",
        message: "You see a door"
      }), new Action({
        id: "unlock",
        name: "Unlock",
        message: "You try to unlock the door",
        // When an action is triggered, it will check if the conditions are met
        conditions: [new Condition({
          key: "locked",
          type: "state",
          value: false,
          message: "Door is already unlocked"
        }), new Condition({
          key: "key",
          type: "hasItem",
          value: "key",
          message: "You don't have the key"
        })],
        // If the conditions are met, it will execute the effects
        effects: [new Effect({
          type: "state",
          key: "locked",
          value: false,
          message: "You unlocked the door"
        })]
      })]
    }),
    // Chest
    new Entity({
      id: "chest",
      name: "chest",
      states: [new State({
        id: "locked",
        value: true
      })],
      actions: [new Action({
        id: "open",
        name: "Open",
        conditions: [new Condition({
          key: "locked",
          type: "state",
          value: false,
          message: "Chest is locked"
        })],
        effects: [new Effect({
          type: "addItem",
          key: "key",
          value: true,
          message: "You found a key"
        })],
        message: "You try to open the chest"
      }), new Action({
        id: "describe",
        name: "Describe"
      })]
    })]
  }), new Room({
    id: "kitchen",
    name: "Kitchen"
  }), new Room({
    id: "living-room",
    name: "Living Room"
  }), new Room({
    id: "bedroom",
    name: "Bedroom"
  })]
};
console.log(level);

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"build/css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktext_adventure"] = self["webpackChunktext_adventure"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["build/css/main"], () => (__webpack_require__("./assets/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["build/css/main"], () => (__webpack_require__("./assets/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;