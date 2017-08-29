/*global HealthTracker, Backbone, JST*/

HealthTracker.Views = HealthTracker.Views || {};

(function () {
  'use strict';

  HealthTracker.Views.Index = Backbone.View.extend({

    el: '#app',

    template: JST['app/scripts/templates/index.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      // this.listenTo(this.model, 'change', this.render);
      this.render();
    },

    render: function () {
      // this.$el.html(this.template(this.model.toJSON()));
      this.$el.html(this.template());
    }

  });
})();
