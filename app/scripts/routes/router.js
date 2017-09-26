/*global HealthTracker, Backbone*/

HealthTracker.Routers = HealthTracker.Routers || {};

(function () {
  'use strict';

  HealthTracker.Routers.Router = Backbone.Router.extend({
    routes: {
      '' : 'index',
      'search' : 'search',

      '*notFound': 'notFound'
    },

    index: function() {
      // trigger index view
      Backbone.trigger('app:index');
    },

    search: function() {
      // triger search view
      Backbone.trigger('app:search');
    },

    notFound: function() {
      // 404
      window.location = '../../404.html';
    }

  });

})();
