class Person {
  constructor(name) {
    this.name = name;
  }

  talk(words) {
    console.log(words);
  }

  step(direction) {
    console.log('Stepping ' + direction);
  }

  walk(steps) {
    for (var i = 0; i < steps; i++)
      this.step('forward');
  }
}

export Person;