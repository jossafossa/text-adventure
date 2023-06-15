import level from "./level.js";

class TextAdventure {
  constructor(level) {
    this.level = level;
    this.currentRoom = this.getRoom(level.startRoom);
    this.lines = {
      next: () => `What do you do next?`,
      invalidEntity: (entity) => `No ${entity} here`,
      invalidAction: (entity, action) => `${entity} cannot do that`,
    };

    this.nextAction();
  }

  //------------------------
  // General
  //------------------------
  nextAction(message = false) {
    // prompt for command
    let command = this.prompt(
      message,
      this.currentRoom.describe(),
      this.lines.next()
    );

    // parse command
    const {
      action,
      entity,
      errors: entityErrors,
    } = this.resolveAction(command);

    // if entity not found return error
    if (entityErrors.length > 0) {
      console.error(entityErrors);
      this.nextAction(entityErrors.join("\n"));
      return;
    }

    // execute action
    const { messages, errors: actionErrors } = action.execute(action);

    // if the action errored
    if (actionErrors.length > 0) {
      console.error(actionErrors);
      this.nextAction([...messages, ...actionErrors].join("\n"));
      return;
    }

    this.nextAction(messages.join("\n"));
  }

  prompt() {
    // filter out falsey values
    const params = [...arguments].filter((arg) => arg);

    return prompt([...params].join("\n"));
  }

  resolveAction(command) {
    // return value
    let result = {
      action: null,
      entity: null,
      errors: [],
    };

    // parse command
    const [actionID, entityName] = command.split(" ");

    // search for entity in current room
    let entity = this.currentRoom.findEntity(entityName);

    // if not found search for entity in level
    if (!entity) entity = this.level.findEntity(entityName);

    // if no entity found return error
    if (!entity) {
      result.errors.push(this.lines.invalidEntity(entityName));
      return result;
    }

    // find action
    let action = entity.findAction(actionID);

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
  getRoom(id) {
    return level.rooms.find((room) => room.id === id);
  }
}

new TextAdventure(level);
