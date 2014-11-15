import DS from "ember-data";

export default DS.Model.extend({
  subject: DS.attr('string'),
  emailCount: DS.attr('number'),
  arrived: DS.attr('date'),
  from: DS.attr('string')
});
