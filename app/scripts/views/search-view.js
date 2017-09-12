/*global HealthTracker, Backbone, JST*/

HealthTracker.Views = HealthTracker.Views || {};

(function () {
  'use strict';

  HealthTracker.Views.SearchView = Backbone.View.extend({

    el: '#app',

    template: JST['app/scripts/templates/search-view.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      this.listenTo(Backbone, 'app:search', this.render);
    },

    render: function () {
      this.$el.html(this.template());
      // This line is to be removed and be used
      // only when a new result is ready
      new HealthTracker.Views.ResultView();
    }

  });

})();
