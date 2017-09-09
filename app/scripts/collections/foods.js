/*global HealthTracker, Backbone*/

HealthTracker.Collections = HealthTracker.Collections || {};

(function () {
  'use strict';

  HealthTracker.Collections.Foods = Backbone.Collection.extend({

    model: HealthTracker.Models.Food,

    localStorage: new Backbone.LocalStorage('foods-backbone'),

  });

})();
