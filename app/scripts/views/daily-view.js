/*global HealthTracker, Backbone, JST*/

HealthTracker.Views = HealthTracker.Views || {};

(function () {
  'use strict';

  HealthTracker.Views.DailyView = Backbone.View.extend({

    el: '#timeline',

    template: JST['app/scripts/templates/daily-view.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      // this.listenTo(this.model, 'change', this.render);
      this.render();
    },

    render: function () {
      this.$el.prepend(this.template());
    }

  });

})();
