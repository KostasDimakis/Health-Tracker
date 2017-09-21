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

    events: {
      'click #back': 'navigateToIndexView'
    },

    initialize: function () {
      this.listenTo(Backbone, 'app:search', this.render);
      // TODO: Listen for changes in search bar and do as I was thinking about on the boat, with throttling and checking for last change
    },

    render: function () {
      this.$el.html(this.template());
      // TODO: Create a function that renders results just like in index.js
      // Example usage
      // var target = $('#results');
      // let food = new HealthTracker.Models.Food({name: 'banana'});
      // let resultView = new HealthTracker.Views.ResultView({
      //   model: food,
      //   collection: this.collection
      // });
      // resultView.render();
      // target.append(resultView.$el);
    },

    navigateToIndexView: function(e) {
      // Navigate back to index
      e.preventDefault();
      router.navigate('', {trigger: true});
    }

  });

})();
