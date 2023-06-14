class Room {
  constructor({ id = 0, name = "Room", entities = [] } = {}) {
    this.id = id;
    this.name = name;
    this.entities = entities;
  }
}

class Action {
  constructor({
    id = 0,
    name = "Action",
    conditions = [],
    effects = [],
    message = null,
  } = {}) {
    this.id = id;
    this.name = name;
    this.conditions = conditions;
    this.effects = effects;
    this.message = message;
  }
}

class Entity {
  constructor({ id = "", name = "Entity", actions = [], states = [] } = {}) {
    this.id = id;
    this.name = name;
    this.actions = actions;
    this.states = states;
  }
}

class Effect {
  constructor({ id = 0, type = "", value = "", message = "" } = {}) {
    this.id = id;
    this.type = type;
    this.value = value;
    this.message = message;
  }
}

class State {
  constructor({ id = 0, value = "" } = {}) {
    this.id = id;
    this.value = value;
  }
}

class Condition {
  constructor({
    key = 0,

    type = "",
    value = "",
    message = "",
  } = {}) {
    this.key = key;
    this.type = type;
    this.value = value;
    this.message = message;
  }
}

const level = {
  rooms: [
    new Room({
      id: "hallway",
      name: "Hallway",
      // Entities are objects that can be interacted with
      entities: [
        new Entity({
          id: "door",
          name: "door",
          // internal variables
          states: [
            new State({
              id: "locked",
              value: true,
            }),
          ],

          // Actions can be triggered by typing <action.name> <entity.name>
          actions: [
            new Action({
              id: "open",
              name: "Open",
              message: "You try to open the door",
              conditions: [
                new Condition({
                  key: "locked",
                  value: false,
                  message: "The door is locked",
                }),
              ],
              effects: [
                new Effect({
                  key: "move",
                  type: "move",
                  value: "kitchen",
                  message: "You moved to the kitchen",
                }),
              ],
            }),
            new Action({
              id: "describe",
              name: "Describe",
              message: "You see a door",
            }),
            new Action({
              id: "unlock",
              name: "Unlock",
              message: "You try to unlock the door",
              // When an action is triggered, it will check if the conditions are met
              conditions: [
                new Condition({
                  key: "locked",
                  type: "state",
                  value: false,
                  message: "Door is already unlocked",
                }),
                new Condition({
                  key: "key",
                  type: "hasItem",
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
              id: "locked",
              value: true,
            }),
          ],
          actions: [
            new Action({
              id: "open",
              name: "Open",
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
              id: "describe",
              name: "Describe",
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
};

console.log(level);
