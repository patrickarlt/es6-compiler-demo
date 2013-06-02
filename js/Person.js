var $__getDescriptors = function(object) {
  var descriptors = {}, name, names = Object.getOwnPropertyNames(object);
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    descriptors[name] = Object.getOwnPropertyDescriptor(object, name);
  }
  return descriptors;
}, $__createClassNoExtends = function(object, staticObject) {
  var ctor = object.constructor;
  Object.defineProperty(object, 'constructor', {enumerable: false});
  ctor.prototype = object;
  Object.defineProperties(ctor, $__getDescriptors(staticObject));
  return ctor;
};
define("Person", ["exports"], function(__exports__) {
  "use strict";
  var Person = function() {
    var $Person = ($__createClassNoExtends)({
      constructor: function(name) {
        this.name = name;
      },
      talk: function(words) {
        console.log(words);
      },
      step: function(direction) {
        console.log('Stepping ' + direction);
      },
      walk: function(steps) {
        for (var i = 0; i < steps; i++) this.step('forward');
      }
    }, {});
    return $Person;
  }();
  __exports__.Person = Person;
});
