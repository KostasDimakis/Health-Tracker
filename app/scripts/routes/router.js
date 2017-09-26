/*global HealthTracker, Backbone*/

HealthTracker.Routers = HealthTracker.Routers || {};

(function () {
  'use strict';

  HealthTracker.Routers.Router = Backbone.Router.extend({
    routes: {
      '' : 'index',
      'search' : 'search',
      // '/foods/store' : 'store',
      // '/foods/destroy/:id' : 'destroy',

      '*notFound': 'notFound'
    },

    index: function() {
      Backbone.trigger('app:index');
    },

    search: function() {
      Backbone.trigger('app:search');
    },

    notFound: function() {
      window.location = '../../404.html';
    }

  });

})();
