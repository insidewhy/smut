import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  // a view of mail, currently corresponds to a mail (imap) folder
  this.resource('thread-metadata', { path: '/threads' });
  this.resource('thread-metadata', { path: '/threads/:tags' });
});

export default Router;
