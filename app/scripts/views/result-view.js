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

    store: function() {
      this.collection.add(this.model);
      this.model.save();
      this._navigateToIndexView();
    },

    _navigateToIndexView: function() {
      // Navigate to index
      router.navigate('', {trigger: true});
    }

  });

})();
