import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    this._super(...arguments);

    controller.set('instrument', this.modelFor('instrument.challenge'));
  }
});
