import DS from "ember-data";

export default DS.Model.extend({
  thread: DS.attr('string'),
  subject: DS.attr('string'),
  total: DS.attr('number'), // number of e-mails in thread...
  timestamp: DS.attr('number'),
  authors: DS.attr('string')
});
