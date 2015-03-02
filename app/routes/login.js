import Ember from 'ember';
import Session from 'simple-auth/session';

export default Ember.Route.extend({
  beforeModel: function(transition, queryParams) {
    var user = this.get('session.user_id');
    if (!Ember.isEmpty(user)) {
      this.transitionTo('application')
    }
  }
});