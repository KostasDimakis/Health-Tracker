/*global HealthTracker, Backbone, JST*/

HealthTracker.Views = HealthTracker.Views || {};

(function () {
  'use strict';

  HealthTracker.Views.ResultView = Backbone.View.extend({

    el: '#results',

    template: JST['app/scripts/templates/result-view.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {
      'click .media-right': 'navigateToIndexView'
    },

    initialize: function () {
      // this.listenTo(this.model, 'change', this.render);
      this.render();
    },

    render: function () {
      this.$el.append(this.template());
    },

    navigateToIndexView: function(e) {
      // Store the new item to the collection
      // On successful store throw an auto dismissible success notification
      // Navigate back to index
      e.preventDefault();
      router.navigate('', {trigger: true});
    }

  });

})();
