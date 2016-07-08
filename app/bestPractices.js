/* eslint-disable */
exports = typeof window === 'undefined' ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals: function() {
    // if you do not declare myObject as a variable it get declared at global scope
    var myObject = {
      name: 'Jory'
    };

    return myObject;
  },

  parseInt: function(num) {
    //use base of 10, indicates to convert from a decimal numeral system
    return parseInt(num, 10);
  },

  identity: function(val1, val2) {
    return val1 === val2;
  }
};
