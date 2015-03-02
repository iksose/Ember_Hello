import Session from 'simple-auth/session';
import Ember from "ember";

var SessionWithCurrentUser = Session.extend({
  currentUser: function() {
    var userId = this.get('user_id');
    console.log("Got", userId)
    if (!Ember.isEmpty(userId)) {
      return userId;
      // return this.container.lookup('store:main').find('user', "wangs");
    }
  }.property('user_id')
});

export default {
  name: 'customize-session',
  initialize: function(container) {
    container.register('session:withCurrentUser', SessionWithCurrentUser);
  }
};