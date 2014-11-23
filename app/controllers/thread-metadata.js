import Ember from "ember";

export default Ember.ArrayController.extend({
  itemController: 'thread-metadatum',

  selected: 0,

  select(offset) {
    var length = this.get('length');
    var newSel = this.selected + offset;
    if (newSel < 0)
      newSel = 0;
    else if (newSel >= length)
      newSel = length - 1;

    if (newSel !== this.selected) {
      this.objectAt(this.selected).set('active', false);
      this.objectAt(newSel).set('active', true);
      this.selected = newSel;
    }
  }
});
