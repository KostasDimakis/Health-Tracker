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

    events: {
      'click #add': 'navigateToSearchView'
    },

    initialize: function () {
      // Setup listeners
      // this.listenTo(this.model, 'change', this.render);
      this.listenTo(Backbone, 'app:index', this.render);
    },

    render: function () {
      // this.$el.html(this.template(this.model.toJSON()));
      this.$el.html(this.template());
      new HealthTracker.Views.FoodView();
    },

    navigateToSearchView: function(e) {
      e.preventDefault();
      router.navigate('search', {trigger: true});
    }

  });
})();
