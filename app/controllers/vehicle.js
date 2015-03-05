import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    editTodo: function() {
      console.log("cranked")
      this.set('isEditing', true);
    },
    poo: function() {
      console.log("name", this.get("name"))
      console.log("winnie the poo", this.get('model'))
    }
  }
});