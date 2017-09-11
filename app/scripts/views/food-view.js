/*global HealthTracker, Backbone, JST*/

HealthTracker.Views = HealthTracker.Views || {};

(function () {
  'use strict';

  HealthTracker.Views.FoodView = Backbone.View.extend({

    template: JST['app/scripts/templates/food-view.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {
      'click .close': 'clear'
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    },

    clear: function() {
      this.$el.fadeTo('slow', 0, () => {
        this.model.destroy();
      });
    }

  });

})();
