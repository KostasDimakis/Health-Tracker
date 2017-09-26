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
      // TODO: Account for network delays by making sure the input value correlates to the search results
      // With network delays and async programming a scenario can be:
      // 1. Input A is sent to the API
      // 2. User types again and Input B is sent to the API
      // 3. Results B come in faster than Results A
      // 4. Results B (which is the correct, because it correlates with Input B) get overwritten by Results A
      var $target = $('#results');
      var $input = $('#input');

      NUTRITIONIX_API.getResults($input.val()).then( (data) => {
        this._renderResults($target, data);
      }).catch(function(error) {
        console.error('There has been a problem with your fetch operation: ' + error);
      });
    },

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
