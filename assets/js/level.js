function applyMixins(targetClass, ...mixins) {
  mixins.forEach((mixin) => {
    Object.getOwnPropertyNames(mixin.prototype).forEach((name) => {
      targetClass.prototype[name] = mixin.prototype[name];
    });
  });
}

class HasDescription {
  describe() {
    return this.description;
  }
}

class HasConditions {
  getConditions() {
    return this.conditions;
  }

  checkConditions() {
    let errors = [];
    this.conditions.forEach((condition) => {
      switch (condition.type) {
        case "state":
          errors.push("state not implemented");
          break;
      }
    });

    return {
      errors,
    };
  }
}

class HasState {
  getStates() {
    return this.states;
  }
}

class HasEffects {
  getEffects() {
    return this.effects;
  }
}

class HasActions {
  getActions() {
    return this.actions;
  }

  findAction(actionID) {
    return this.actions.find((action) => {
      return action.command.toLowerCase() === actionID.toLowerCase();
    });
  }
}

class HasEntities {
  getEntities() {
    return this.entities;
  }

  findEntity(entityName) {
    return this.entities.find((entity) => {
      return entity.name.toLowerCase() === entityName.toLowerCase();
    });
  }
}

class Room {
  constructor({
    id = 0,
    name = "Room",
    entities = [],
    description = "You are in a room",
  } = {}) {
    this.id = id;
    this.name = name;
    this.entities = entities;
    this.description = description;
  }
}
applyMixins(Room, HasDescription, HasActions, HasEntities, HasState);

class Action {
  constructor({
    command = "",
    conditions = [],
    effects = [],
    message = null,
  } = {}) {
    this.command = command;
    this.conditions = conditions;
    this.effects = effects;
    this.message = message;
  }

  execute() {
    // setup return values
    let result = {
      messages: [],
      errors: [],
    };

    // add the message
    if (this.message) result.messages.push(this.message);

    // check conditions
    const { errors: conditionErrors } = this.checkConditions();

    // if conditions failed return errors
    if (conditionErrors.length > 0) {
      result.errors = [...result.errors, ...conditionErrors];
      return result;
    }

    this.effects.forEach((effect) => {
      switch (effect.type) {
        case "message":
          result.messages.push(effect.value);
          break;
      }
    });

    return result;
  }
}
applyMixins(Action, HasConditions, HasEffects);

class Entity {
  constructor({
    id = "",
    name = "Entity",
    actions = [],
    states = [],
    description = "This is an object",
  } = {}) {
    this.id = id;
    this.name = name;
    this.actions = actions;
    this.states = states;
    this.description = description;
  }
}
applyMixins(Entity, HasDescription, HasActions);

class Effect {
  constructor({ id = 0, type = "", value = "", message = "" } = {}) {
    this.id = id;
    this.type = type;
    this.value = value;
    this.message = message;
  }
}

class State {
  constructor({ key = 0, value = "" } = {}) {
    this.key = key;
    this.value = value;
  }
}

class Condition {
  constructor({ key = 0, type = "", value = "", message = "" } = {}) {
    this.key = key;
    this.type = type;
    this.value = value;
    this.message = message;
  }
}

class Level {
  constructor({
    startRoom = "",
    actions = [],
    rooms = [],
    entities = [],
  } = {}) {
    this.startRoom = startRoom;
    this.actions = actions;
    this.rooms = rooms;
    this.entities = entities;
  }
}
applyMixins(Level, HasActions, HasEntities);

export default new Level({
  startRoom: "hallway",
  //global entities
  entities: [
    new Entity({
      id: "phone",
      name: "phone",
      actions: [
        new Action({
          command: "check",
          message: "You checked the phone",
          effects: [
            new Effect({
              type: "message",
              value: "You have no new messages",
            }),
          ],
        }),
      ],
    }),
  ],
  // global actions
  actions: [
    new Action({
      command: "help",
      effects: [
        new Effect({
          type: "listOptions",
        }),
      ],
    }),
  ],
  rooms: [
    new Room({
      id: "hallway",
      name: "Hallway",
      description: "You are in a hallway",

      actions: [
        new Action({
          command: "describe",
          message: "You see a door",
        }),
      ],

      // Entities are objects that can be interacted with
      entities: [
        new Entity({
          id: "door",
          name: "door",

          // internal variables
          states: [
            new State({
              key: "locked",
              value: true,
            }),
          ],

          // Actions can be triggered by typing <action.command> <entity.name>
          actions: [
            new Action({
              command: "open",
              message: "You try to open the door",
              conditions: [
                new Condition({
                  type: "state",
                  key: "locked",
                  value: false,
                  message: "The door is locked",
                }),
              ],
              effects: [
                new Effect({
                  type: "move",
                  value: "kitchen",
                  message: "You moved to the kitchen",
                }),
              ],
            }),
            new Action({
              command: "describe",
              message: "You see a door",
            }),
            new Action({
              command: "unlock",
              message: "You try to unlock the door",
              // When an action is triggered, it will check if the conditions are met
              conditions: [
                new Condition({
                  type: "state",
                  key: "locked",
                  value: false,
                  message: "Door is already unlocked",
                }),
                new Condition({
                  type: "hasItem",
                  key: "key",
                  value: "key",
                  message: "You don't have the key",
                }),
              ],
              // If the conditions are met, it will execute the effects
              effects: [
                new Effect({
                  type: "state",
                  key: "locked",
                  value: false,
                  message: "You unlocked the door",
                }),
              ],
            }),
          ],
        }),
        // Chest
        new Entity({
          id: "chest",
          name: "chest",
          states: [
            new State({
              key: "locked",
              value: true,
            }),
          ],
          actions: [
            new Action({
              command: "open",
              conditions: [
                new Condition({
                  key: "locked",
                  type: "state",
                  value: false,
                  message: "Chest is locked",
                }),
              ],
              effects: [
                new Effect({
                  type: "addItem",
                  key: "key",
                  value: true,
                  message: "You found a key",
                }),
              ],
              message: "You try to open the chest",
            }),
            new Action({
              command: "describe",
              message: "You see a chest",
            }),
          ],
        }),
      ],
    }),
    new Room({
      id: "kitchen",
      name: "Kitchen",
    }),
    new Room({
      id: "living-room",
      name: "Living Room",
    }),
    new Room({
      id: "bedroom",
      name: "Bedroom",
    }),
  ],
});
