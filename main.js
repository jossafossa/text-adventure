class Room {
  constructor({
    id,
    name,
    entities
  }) {
    this.id = id;
    this.name = name;
    this.entities = entities;
  }
};

/**
 * 
 */
class Action {
  constructor({
    id,
    name,
    conditions
  }) {
    this.id = id;
    this.name = name;
    this.conditions = conditions;
  }
}

class ActionReference {
  constructor({
    trigger,
    action
  }) {
    this.trigger = trigger;
    this.action = action;
  }
}

/** 
 * 
 */
class Entity {
  constructor({
    type,
    name,
    actions,
    states
  }) {
    this.type = type;
    this.name = name;
    this.actions = actions;
    this.states = states;
  }
}

class Condition {
  constructor({
    id,
    type,
    value,
    message
  }) {
    this.id = id;
    this.type = type;
    this.value = value;
    this.message = message;
  }
}



const actions = [
  new Action({
    id: 'open',
    name: 'Open',
  }),
  new Action({
    id: 'unlock',
    name: 'Unlock',
  })
]

const entitiesTypes = [
  new Entity({
    type: 'door',
    name: 'Door',
    actions: [{
      trigger: 'open',
      action: 'open',
    }]
  })
]

const level = {
  rooms: [
    new Room({
      id: 'hallway',
      name: 'Hallway',
      // Entities are objects that can be interacted with
      entities: [
        new Entity({
          id: 'door',
          name: 'door',
          // internal variables
          states: [{
            id: 'locked',
            value: true,
          }],

          // Actions can be triggered by typing <action.name> <entity.name>
          actions: [
            new Action({
              id: 'open',
              name: 'Open',
              conditions: [{
                id: 'locked',
                value: false,
                message: 'Door is locked',
              }],
            }),
            new Action({
              id: 'describe',
              name: 'Describe',
            }),
            new Action({
              id: 'unlock',
              name: 'Unlock',
              // When an action is triggered, it will check if the conditions are met
              conditions: [
                new Condition({
                  id: 'locked',
                  type: 'state',
                  value: false,
                  message: 'Door is already unlocked',
                }),
                new Condition({
                  id: 'key',
                  type: 'inventory',
                  value: true,
                  message: 'You don\'t have the key',
                })
              ],
              // If the conditions are met, it will execute the effects
              effects: [{
                id: 'locked',
                type: 'state',
                value: false,
              }]
            }),
          ]
        })
      ]
    }),
    new Room({
      id: 'kitchen',
      name: 'Kitchen',
    }),
    new Room({
      id: 'living-room',
      name: 'Living Room',
    }),
    new Room({
      id: 'bedroom',
      name: 'Bedroom',
    }),

  ]
}

console.log(level);