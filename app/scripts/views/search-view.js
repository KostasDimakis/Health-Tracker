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
      'click #back': 'navigateToIndexView',
      'input #input': 'onChange'
    },

    initialize: function () {
      this.listenTo(Backbone, 'app:search', this.render);
    },

    render: function () {
      this.$el.html(this.template());
    },

    navigateToIndexView: function(e) {
      // Navigate back to index
      e.preventDefault();
      router.navigate('', {trigger: true});
    },

    onChange   : function() {
      var $target = $('#results');
      var $input = $('#input');

      NUTRITIONIX_API.getResults($input.val()).then( (data) => {
        this._renderResults($target, data);
      }).catch(function(error) {
        console.error('There has been a problem with your fetch operation: ' + error);
      });
    },

    // TODO: Restructure the whole search. Have a dedicated collection for search results or maybe even force Backbone's fetch to do the API call
    _renderResults: function($target, data) {
      // clear previous results
      $target.html('');
      // append each search result
      data.forEach((item) => {
        let food = new HealthTracker.Models.Food(item);
        let resultView = new HealthTracker.Views.ResultView({
          model     : food,
          collection: this.collection
        });
        resultView.render();
        $target.append(resultView.$el);
      });
    }

  });

})();
