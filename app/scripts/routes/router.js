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

    },

    notFound: function() {
      window.location = '../../404.html';
    }

  });

})();
