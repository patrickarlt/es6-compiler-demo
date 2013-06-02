import Person from "Person";

class Troll extends Person {
  walk(steps) {
    if (steps.length > 5) throw("Too much effort");
    super(steps);
  }
}

export Troll;