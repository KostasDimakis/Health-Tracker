/*global HealthTracker, Backbone*/

HealthTracker.Models = HealthTracker.Models || {};

(function () {
  'use strict';

  HealthTracker.Models.Food = Backbone.Model.extend({

    initialize: function() {
    },

    defaults: {
      timestamp: Date.now(),
      date: (new Date(Date.now()).toDateString()),
      // In case no image was provided
      img: 'https://www.nutritionix.com/images/apple-touch-icon-152x152.png',
      fats: 0,
      proteins: 0,
      carbohydrates: 0,
      calories: 0
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
