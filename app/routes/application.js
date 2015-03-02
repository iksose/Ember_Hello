import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  setupController: function(controller) {
    // Set the IndexController's `title`
    controller.set('title', 'My App');
  }
});