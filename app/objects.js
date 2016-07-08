exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  //if fn represents a function and obj represents the new context of the function then use call method to set the new context.
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {

  }
};
