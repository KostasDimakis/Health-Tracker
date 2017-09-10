/*global HealthTracker, Backbone*/

HealthTracker.Collections = HealthTracker.Collections || {};

(function () {
  'use strict';

  HealthTracker.Collections.Foods = Backbone.Collection.extend({

    model: HealthTracker.Models.Food,

    localStorage: new Backbone.LocalStorage('foods-backbone'),

    comparator: function(food) {
      // NOTE: This only works with numbers
      // now my data is in descending order
      // meaning the most recent timestamp
      // is first and the oldest is last
      return -food.get('timestamp');
    }

  });

})();
