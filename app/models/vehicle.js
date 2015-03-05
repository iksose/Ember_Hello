// import DS from 'ember-data';
//
// export default DS.Model.extend({
//   firstName: DS.attr('string'),
//   lastName: DS.attr('string')
// });

import Ember from 'ember';

var DEFAULTS = {
  year: "",
  make: "",
  models: "",
  trim: "",
  zip: "",
  country: ""
};

var Vehicle = Ember.Object.extend(DEFAULTS);

Vehicle.reopenClass({
  createNew: function(attrs) {
    return Vehicle.create(_.extend(DEFAULTS, attrs));
  }
});

export default Vehicle;