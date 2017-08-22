/*global HealthTracker, Backbone*/

HealthTracker.Routers = HealthTracker.Routers || {};

(function () {
  'use strict';

  HealthTracker.Routers.Router = Backbone.Router.extend({
    routes: {
      '' : 'index',
      '/search' : 'search',
      '/foods/store' : 'store',
      '/foods/destroy/:id' : 'destroy',

      '*notFound': 'notFound'
    }
  });

})();
