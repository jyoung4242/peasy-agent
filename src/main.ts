import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { Agent, Action, World, Goal, PlannerNode, IContext } from "@peasy-lib/peasy-agent";

const model = {};
const template = `<div> Hello Peasy!!! </div>`;
await UI.create(document.body, model, template).attached;

let gameState = {
  testdata: [1, 2, 3, 4, 5],
};

class myGoal1 extends Goal {
  constructor(priority: any) {
    super("goal1", priority);
  }
}

class myAction extends Action {
  name: string = "myactions";

  static getAvailableActions(world: World, agent: Agent, previous: PlannerNode | null): Action[] {
    let actions: any[] = [];
    actions.push(testAction1.create(), testAction2.create());
    return actions;
  }

  apply() {}

  undo() {}
}

let myAgent = Agent.create({
  id: "testagent",
  goals: [new myGoal1(1)],
  actions: [myAction],
});

class testWorld extends World {
  static create(state: any) {
    const world = World.create({ state });
    world.state = state;
    return world;
  }
}

class testAction1 extends Action {
  name: string = "action1";
  apply() {}
  undo() {}
}
class testAction2 extends Action {
  name: string = "action2";
  apply() {}
  undo() {}
}

let myWorld = testWorld.create(gameState);

const actions = myAction.getAvailableActions(myWorld, myAgent, null);
console.log("actions", actions);
