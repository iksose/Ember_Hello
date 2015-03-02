import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Session from 'simple-auth/session';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function(transition, queryParams) {
    console.log("Pre", Session.currentUser);
    this._super(transition, queryParams);
  },
  model: function() {
    // singular object
    return this.store.find('secret');
  }
});