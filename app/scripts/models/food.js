/*global HealthTracker, Backbone*/

HealthTracker.Models = HealthTracker.Models || {};

(function () {
  'use strict';

  HealthTracker.Models.Food = Backbone.Model.extend({

    initialize: function() {
    },

    defaults: {
      name: '',
      timestamp: Date.now(),
      // In case no image was provided
      img: 'https://www.nutritionix.com/images/apple-touch-icon-152x152.png',
      fats: 0,
      proteins: 0,
      carbohydrates: 0,
      calories: 0,
      // see parse method for date attr
      date: ''
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      // Add a local time & date attribute to the model
      response.date = new Date(response.timestamp).toLocaleString();
      return response;
    }
  });

})();
