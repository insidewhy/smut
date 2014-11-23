import Ember from "ember";

export default Ember.ObjectController.extend({
  model() {
    return { title: 'Loading' };
  }
});
