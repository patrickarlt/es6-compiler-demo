define("main", ["Person", "Troll"], function(__dependency1__, __dependency2__) {
  "use strict";
  var Person = __dependency1__.Person;
  var Troll = __dependency2__.Troll;
  var person = new Person();
  var troll = new Troll();
  person.talk("i am a person");
  person.walk(5);
  troll.talk("i am a troll");
  troll.walk(2);
  troll.walk(10);
});
