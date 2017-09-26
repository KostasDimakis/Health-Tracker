/*global HealthTracker, Backbone, JST*/

HealthTracker.Views = HealthTracker.Views || {};

(function () {
  'use strict';

  HealthTracker.Views.ResultView = Backbone.View.extend({

    template: JST['app/scripts/templates/result-view.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {
      'click .add': 'store'
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    },

    /**
     * Store a the selected food's nutrients using Nutritionix
     * nutrients API endpoint.
     */
    store: function() {
      // from the selected food's name, get its nutrients
      // and save it in the foods collection
      NUTRITIONIX_API.getNutrients(this.model.get('name')).then( (data) => {
        this.model = new HealthTracker.Models.Food(data);
        this.collection.add(this.model);
        this.model.save();
      }).catch(function(error) {
        console.error('There has been a problem with your fetch operation: ' + error);
      });
      this._navigateToIndexView();
    },

    _navigateToIndexView: function() {
      // Navigate to index
      router.navigate('', {trigger: true});
    }

  });

})();
