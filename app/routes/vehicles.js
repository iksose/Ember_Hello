import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Session from 'simple-auth/session';
import Vehicle from '../models/vehicle'

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  vehicleArray: [Vehicle.create()],
  model: function() {
    return this.vehicleArray;
  },
  actions: {
    addVehicle: function() {
      this.vehicleArray.pushObject(Vehicle.create());
    }
  }
});