var $__superDescriptor = function(proto, name) {
  if (!proto) throw new TypeError('super is null');
  return Object.getPropertyDescriptor(proto, name);
}, $__superCall = function(self, proto, name, args) {
  var descriptor = $__superDescriptor(proto, name);
  if (descriptor) {
    if ('value'in descriptor) return descriptor.value.apply(self, args);
    if (descriptor.get) return descriptor.get.call(self).apply(self, args);
  }
  throw new TypeError("Object has no method '" + name + "'.");
}, $__getProtoParent = function(superClass) {
  if (typeof superClass === 'function') {
    var prototype = superClass.prototype;
    if (Object(prototype) === prototype || prototype === null) return superClass.prototype;
  }
  if (superClass === null) return null;
  throw new TypeError();
}, $__createClass = function(object, staticObject, protoParent, superClass, hasConstructor) {
  var ctor = object.constructor;
  if (typeof superClass === 'function') ctor.__proto__ = superClass;
  if (!hasConstructor && protoParent === null) ctor = object.constructor = function() {};
  var descriptors = $__getDescriptors(object);
  descriptors.constructor.enumerable = false;
  ctor.prototype = Object.create(protoParent, descriptors);
  Object.defineProperties(ctor, $__getDescriptors(staticObject));
  return ctor;
};
define("Troll", ["Person", "exports"], function(__dependency1__, __exports__) {
  "use strict";
  var Person = __dependency1__.Person;
  var Troll = function($__super) {
    var $__proto = $__getProtoParent($__super);
    var $Troll = ($__createClass)({
      constructor: function() {
        $__superCall(this, $__proto, "constructor", arguments);
      },
      walk: function(steps) {
        if (steps.length > 5) throw ("Too much effort");
        $__superCall(this, $__proto, "walk", [steps]);
      }
    }, {}, $__proto, $__super, false);
    return $Troll;
  }(Person);
  __exports__.Troll = Troll;
});
