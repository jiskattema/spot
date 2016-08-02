/**
 * CategorialTransfrom defines a transformation on categorial and textual data, and is implemented as a collection of rules.
 *
 * @class CategorialTransform
 */
var Collection = require('ampersand-collection');
var Rule = require('./categorial-rule');

/**
 * Apply the first applicable transformation rule.
 * When no matching rule is found, return 'Other'
 * @function
 * @memberof! CategorialTransform
 * @param {string} text
 * @returns {string} text The transformed text
 */
function transform (rules, text) {
  var i;
  for (i = 0; i < rules.length; i++) {
    var group = rules.models[i].match(text);
    if (group) {
      return group;
    }
  }
  return 'Other';
}

module.exports = Collection.extend({
  model: Rule,
  transform: function (text) {
    return transform(this, text);
  },
  clear: function () {
    this.reset();
  }
});
