import Ember from "ember";

export default Ember.ObjectController.extend({
  model: function() {
    return { title: 'Loading' };
  }
});
