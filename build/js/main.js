/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/level.js":
/*!****************************!*\
  !*** ./assets/js/level.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function applyMixins(targetClass) {
  for (var _len = arguments.length, mixins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    mixins[_key - 1] = arguments[_key];
  }
  mixins.forEach(function (mixin) {
    Object.getOwnPropertyNames(mixin.prototype).forEach(function (name) {
      targetClass.prototype[name] = mixin.prototype[name];
    });
  });
}
var HasDescription = /*#__PURE__*/function () {
  function HasDescription() {
    _classCallCheck(this, HasDescription);
  }
  _createClass(HasDescription, [{
    key: "describe",
    value: function describe() {
      return this.description;
    }
  }]);
  return HasDescription;
}();
var HasConditions = /*#__PURE__*/function () {
  function HasConditions() {
    _classCallCheck(this, HasConditions);
  }
  _createClass(HasConditions, [{
    key: "getConditions",
    value: function getConditions() {
      return this.conditions;
    }
  }, {
    key: "checkConditions",
    value: function checkConditions() {
      var errors = [];
      this.conditions.forEach(function (condition) {
        switch (condition.type) {
          case "state":
            errors.push("state not implemented");
            break;
        }
      });
      return {
        errors: errors
      };
    }
  }]);
  return HasConditions;
}();
var HasState = /*#__PURE__*/function () {
  function HasState() {
    _classCallCheck(this, HasState);
  }
  _createClass(HasState, [{
    key: "getStates",
    value: function getStates() {
      return this.states;
    }
  }]);
  return HasState;
}();
var HasEffects = /*#__PURE__*/function () {
  function HasEffects() {
    _classCallCheck(this, HasEffects);
  }
  _createClass(HasEffects, [{
    key: "getEffects",
    value: function getEffects() {
      return this.effects;
    }
  }]);
  return HasEffects;
}();
var HasActions = /*#__PURE__*/function () {
  function HasActions() {
    _classCallCheck(this, HasActions);
  }
  _createClass(HasActions, [{
    key: "getActions",
    value: function getActions() {
      return this.actions;
    }
  }, {
    key: "findAction",
    value: function findAction(actionID) {
      return this.actions.find(function (action) {
        return action.command.toLowerCase() === actionID.toLowerCase();
      });
    }
  }]);
  return HasActions;
}();
var HasEntities = /*#__PURE__*/function () {
  function HasEntities() {
    _classCallCheck(this, HasEntities);
  }
  _createClass(HasEntities, [{
    key: "getEntities",
    value: function getEntities() {
      return this.entities;
    }
  }, {
    key: "findEntity",
    value: function findEntity(entityName) {
      return this.entities.find(function (entity) {
        return entity.name.toLowerCase() === entityName.toLowerCase();
      });
    }
  }]);
  return HasEntities;
}();
var Room = /*#__PURE__*/_createClass(function Room() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? 0 : _ref$id,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? "Room" : _ref$name,
    _ref$entities = _ref.entities,
    entities = _ref$entities === void 0 ? [] : _ref$entities,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? "You are in a room" : _ref$description;
  _classCallCheck(this, Room);
  this.id = id;
  this.name = name;
  this.entities = entities;
  this.description = description;
});
applyMixins(Room, HasDescription, HasActions, HasEntities, HasState);
var Action = /*#__PURE__*/function () {
  function Action() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$command = _ref2.command,
      command = _ref2$command === void 0 ? "" : _ref2$command,
      _ref2$conditions = _ref2.conditions,
      conditions = _ref2$conditions === void 0 ? [] : _ref2$conditions,
      _ref2$effects = _ref2.effects,
      effects = _ref2$effects === void 0 ? [] : _ref2$effects,
      _ref2$message = _ref2.message,
      message = _ref2$message === void 0 ? null : _ref2$message;
    _classCallCheck(this, Action);
    this.command = command;
    this.conditions = conditions;
    this.effects = effects;
    this.message = message;
  }
  _createClass(Action, [{
    key: "execute",
    value: function execute() {
      // setup return values
      var result = {
        messages: [],
        errors: []
      };

      // add the message
      if (this.message) result.messages.push(this.message);

      // check conditions
      var _this$checkConditions = this.checkConditions(),
        conditionErrors = _this$checkConditions.errors;

      // if conditions failed return errors
      if (conditionErrors.length > 0) {
        result.errors = [].concat(_toConsumableArray(result.errors), _toConsumableArray(conditionErrors));
        return result;
      }
      this.effects.forEach(function (effect) {
        switch (effect.type) {
          case "message":
            result.messages.push(effect.value);
            break;
        }
      });
      return result;
    }
  }]);
  return Action;
}();
applyMixins(Action, HasConditions, HasEffects);
var Entity = /*#__PURE__*/_createClass(function Entity() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref3$id = _ref3.id,
    id = _ref3$id === void 0 ? "" : _ref3$id,
    _ref3$name = _ref3.name,
    name = _ref3$name === void 0 ? "Entity" : _ref3$name,
    _ref3$actions = _ref3.actions,
    actions = _ref3$actions === void 0 ? [] : _ref3$actions,
    _ref3$states = _ref3.states,
    states = _ref3$states === void 0 ? [] : _ref3$states,
    _ref3$description = _ref3.description,
    description = _ref3$description === void 0 ? "This is an object" : _ref3$description;
  _classCallCheck(this, Entity);
  this.id = id;
  this.name = name;
  this.actions = actions;
  this.states = states;
  this.description = description;
});
applyMixins(Entity, HasDescription, HasActions);
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
    _ref5$key = _ref5.key,
    key = _ref5$key === void 0 ? 0 : _ref5$key,
    _ref5$value = _ref5.value,
    value = _ref5$value === void 0 ? "" : _ref5$value;
  _classCallCheck(this, State);
  this.key = key;
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
var Level = /*#__PURE__*/_createClass(function Level() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref7$startRoom = _ref7.startRoom,
    startRoom = _ref7$startRoom === void 0 ? "" : _ref7$startRoom,
    _ref7$actions = _ref7.actions,
    actions = _ref7$actions === void 0 ? [] : _ref7$actions,
    _ref7$rooms = _ref7.rooms,
    rooms = _ref7$rooms === void 0 ? [] : _ref7$rooms,
    _ref7$entities = _ref7.entities,
    entities = _ref7$entities === void 0 ? [] : _ref7$entities;
  _classCallCheck(this, Level);
  this.startRoom = startRoom;
  this.actions = actions;
  this.rooms = rooms;
  this.entities = entities;
});
applyMixins(Level, HasActions, HasEntities);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Level({
  startRoom: "hallway",
  //global entities
  entities: [new Entity({
    id: "phone",
    name: "phone",
    actions: [new Action({
      command: "check",
      message: "You checked the phone",
      effects: [new Effect({
        type: "message",
        value: "You have no new messages"
      })]
    })]
  })],
  // global actions
  actions: [new Action({
    command: "help",
    effects: [new Effect({
      type: "listOptions"
    })]
  })],
  rooms: [new Room({
    id: "hallway",
    name: "Hallway",
    description: "You are in a hallway",
    actions: [new Action({
      command: "describe",
      message: "You see a door"
    })],
    // Entities are objects that can be interacted with
    entities: [new Entity({
      id: "door",
      name: "door",
      // internal variables
      states: [new State({
        key: "locked",
        value: true
      })],
      // Actions can be triggered by typing <action.command> <entity.name>
      actions: [new Action({
        command: "open",
        message: "You try to open the door",
        conditions: [new Condition({
          type: "state",
          key: "locked",
          value: false,
          message: "The door is locked"
        })],
        effects: [new Effect({
          type: "move",
          value: "kitchen",
          message: "You moved to the kitchen"
        })]
      }), new Action({
        command: "describe",
        message: "You see a door"
      }), new Action({
        command: "unlock",
        message: "You try to unlock the door",
        // When an action is triggered, it will check if the conditions are met
        conditions: [new Condition({
          type: "state",
          key: "locked",
          value: false,
          message: "Door is already unlocked"
        }), new Condition({
          type: "hasItem",
          key: "key",
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
        key: "locked",
        value: true
      })],
      actions: [new Action({
        command: "open",
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
        command: "describe",
        message: "You see a chest"
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
}));

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _level_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level.js */ "./assets/js/level.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var TextAdventure = /*#__PURE__*/function () {
  function TextAdventure(level) {
    _classCallCheck(this, TextAdventure);
    this.level = level;
    this.currentRoom = this.getRoom(level.startRoom);
    this.lines = {
      next: function next() {
        return "What do you do next?";
      },
      invalidEntity: function invalidEntity(entity) {
        return "No ".concat(entity, " here");
      },
      invalidAction: function invalidAction(entity, action) {
        return "".concat(entity, " cannot do that");
      }
    };
    this.nextAction();
  }

  //------------------------
  // General
  //------------------------
  _createClass(TextAdventure, [{
    key: "nextAction",
    value: function nextAction() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // prompt for command
      var command = this.prompt(message, this.currentRoom.describe(), this.lines.next());

      // parse command
      var _this$resolveAction = this.resolveAction(command),
        action = _this$resolveAction.action,
        entity = _this$resolveAction.entity,
        entityErrors = _this$resolveAction.errors;

      // if entity not found return error
      if (entityErrors.length > 0) {
        console.error(entityErrors);
        this.nextAction(entityErrors.join("\n"));
        return;
      }

      // execute action
      var _action$execute = action.execute(action),
        messages = _action$execute.messages,
        actionErrors = _action$execute.errors;

      // if the action errored
      if (actionErrors.length > 0) {
        console.error(actionErrors);
        this.nextAction([].concat(_toConsumableArray(messages), _toConsumableArray(actionErrors)).join("\n"));
        return;
      }
      this.nextAction(messages.join("\n"));
    }
  }, {
    key: "prompt",
    value: function (_prompt) {
      function prompt() {
        return _prompt.apply(this, arguments);
      }
      prompt.toString = function () {
        return _prompt.toString();
      };
      return prompt;
    }(function () {
      // filter out falsey values
      var params = Array.prototype.slice.call(arguments).filter(function (arg) {
        return arg;
      });
      return prompt(_toConsumableArray(params).join("\n"));
    })
  }, {
    key: "resolveAction",
    value: function resolveAction(command) {
      // return value
      var result = {
        action: null,
        entity: null,
        errors: []
      };

      // parse command
      var _command$split = command.split(" "),
        _command$split2 = _slicedToArray(_command$split, 2),
        actionID = _command$split2[0],
        entityName = _command$split2[1];

      // search for entity in current room
      var entity = this.currentRoom.findEntity(entityName);

      // if not found search for entity in level
      if (!entity) entity = this.level.findEntity(entityName);

      // if no entity found return error
      if (!entity) {
        result.errors.push(this.lines.invalidEntity(entityName));
        return result;
      }

      // find action
      var action = entity.findAction(actionID);

      // if no action found return error
      if (!action) {
        result.errors.push(this.lines.invalidAction(entityName, actionID));
        return result;
      }

      // return action and entity
      result.action = action;
      result.entity = entity;
      return result;
    }

    //------------------------
    // rooms
    //------------------------
  }, {
    key: "getRoom",
    value: function getRoom(id) {
      return _level_js__WEBPACK_IMPORTED_MODULE_0__["default"].rooms.find(function (room) {
        return room.id === id;
      });
    }
  }]);
  return TextAdventure;
}();
new TextAdventure(_level_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
//# sourceMappingURL=main.js.map