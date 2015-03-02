import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Session from 'simple-auth/session';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    // singular object
    // return this.store.find('secret');
  }
});