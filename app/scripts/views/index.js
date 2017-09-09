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
      // This event triggers a new day to be prepended
      // on the timeline
      // Prepending is wrong. Sorting logic
      // should come from the collection.
      // The view only takes data and presents
      // it to the user. Nothing more.
      // TODO: Check if this correct, but probably it needs fix. Fix to appending
      this.listenTo(Backbone, 'app:day', this._newDay);
      // This event triggers a new food to be prepended
      // on the most recent day that's present on the timeline
      // Prepending is wrong. Sorting logic
      // should come from the collection.
      // The view only takes data and presents
      // it to the user. Nothing more.
      // TODO: Check if this correct, but probably it needs fix. Fix to appending
      this.listenTo(Backbone, 'app:food', this._newFood);
    },

    render: function () {
      // this.$el.html(this.template(this.model.toJSON()));
      this.$el.html(this.template());
      // Whenever there is a new day trigger 'app:day'
      // Whenever there is a new food in that particular day trigger 'app:food'
      // Now this is just a template to show it's working
      // Maybe just use new instead of triggers?
      Backbone.trigger('app:day');
      Backbone.trigger('app:food');
    },

    navigateToSearchView: function(e) {
      e.preventDefault();
      router.navigate('search', {trigger: true});
    },

    _newDay: function() {
      new HealthTracker.Views.DailyView();
    },

    _newFood: function() {
      new HealthTracker.Views.FoodView();
    }

  });
})();
