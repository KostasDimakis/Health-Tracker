/*global HealthTracker, Backbone*/

HealthTracker.Models = HealthTracker.Models || {};

(function () {
  'use strict';

  HealthTracker.Models.Food = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
