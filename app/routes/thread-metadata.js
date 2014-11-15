import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    // todo:
    //   params.after: pagination
    //   params.account: for multiple e-mail accounts

    var tags = params.tags || '+inbox';

    if (tags[0] !== '+' && tags[0] !== '-') {
      tags = '+' + tags;
    }

    tags = tags.split(/(?=[\+\-])/);
    this.controllerFor('application').set('title', tags.join(' '));

    // todo: also find with tags
    return this.store.find('thread-metadatum');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.some(function(datum) {
      datum.set('active', true);
      return true;
    });
  },

  shortcuts: {
    // colemak
    n: 'nextThread',
    e: 'previousThread',

    // qwerty
    j: 'nextThread',
    k: 'previousThread',
  },

  actions: {
    nextThread: function() {
      console.log("TODO: nextThread");
    },
    previousThread: function() {
      console.log("TODO: previousThread");
    },
  }

});
