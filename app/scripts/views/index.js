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
      this.listenTo(this.collection, 'change', this.render);
      this.listenTo(Backbone, 'app:index', this.render);
    },

    render: function () {
      // render header
      this.$el.html(this.template());
      // and now render foods
      // every food has to be appended on #foods
      // that's inside index template
      var $target = $('#foods');
      this._renderCollection($target);
    },

    navigateToSearchView: function(e) {
      e.preventDefault();
      router.navigate('search', {trigger: true});
    },

    /**
     * Append food views on target element
     * @param {jQuery} $target
     * @private
     */
    _renderCollection: function($target) {
      // for each food in the collection
      // create a new food view
      // render it and append it on target
      this.collection.forEach(food => {
        let foodView = new HealthTracker.Views.FoodView({ model: food });
        foodView.render();
        $target.append(foodView.el);
      });
    }

  });
})();
