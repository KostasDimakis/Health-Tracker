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
      // render search view
      this.$el.html(this.template());
    },

    navigateToIndexView: function(e) {
      // Navigate to index
      e.preventDefault();
      router.navigate('', {trigger: true});
    },

    /**
     * When the value of the search input changes,
     * query the API with the new value and
     * render the results
     */
    onChange   : function() {
      // the search results will be appended on #results
      var $target = $('#results');
      // search input
      var $input = $('#input');

      // query the API for results on input's value
      // and then render them
      NUTRITIONIX_API.getResults($input.val()).then( (data) => {
        this._renderResults($target, data);
      }).catch(function(error) {
        console.error('There has been a problem with your fetch operation: ' + error);
      });
    },

    /**
     * Append result views from data, on target element
     * @param {jQuery} $target Target
     * @param {Array} data Food data
     * @private
     */
    _renderResults: function($target, data) {
      // clear previous results
      $target.html('');
      // for each result
      // create a new result view
      // and append it on $target
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
