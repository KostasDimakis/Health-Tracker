/*global HealthTracker, $*/


var HealthTracker = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');
    // TODO: Make a call to nutrients API
    // TODO: Package the calls in a MUCH PRETTIER way. Be sure to checkout how it can be done from inside Backbone
    var instantHeaders = new Headers();
    var nutritientHeaders = new Headers();
    instantHeaders.append('x-app-id', '84d67ad4');
    instantHeaders.append('x-app-key', '3e892392c1929c39d4afdd9a44e14d60');

    nutritientHeaders.append('x-app-id', '84d67ad4');
    nutritientHeaders.append('x-app-key', '3e892392c1929c39d4afdd9a44e14d60');
    nutritientHeaders.append('x-remote-user-id', '0');
    nutritientHeaders.append('Content-Type', 'application/json');

    var instantOptions = {
      headers: instantHeaders
    };
    var nutritientOptions = {
      method: 'POST',
      headers: nutritientHeaders,
      body: JSON.stringify({
          'query': 'banana'
        })
    };
    var instantRequest = 'https://trackapi.nutritionix.com/v2/search/instant?' +
      'query=banana&' +
      'self=false';
    var nutrientRequest = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
    fetch(instantRequest, instantOptions).then(function(response) {
      if (!response.ok) {
        let msg = 'There was a problem. ' + response.status + ': ' +
          response.statusText;
        console.error(msg);
      } else {
        response.json().then(function(data) {
          console.log(data);
        });
      }
    }).catch(function(error) {
      console.error('There has been a problem with your fetch operation: ' + error.message);
    });
    fetch(nutrientRequest, nutritientOptions).then(function(response) {
      if (!response.ok) {
        let msg = 'There was a problem. ' + response.status + ': ' +
          response.statusText;
        console.error(msg);
      } else {
        response.json().then(function(data) {
          console.log(data);
        });
      }
    }).catch(function(error) {
      console.error('There has been a problem with your fetch operation: ' + error.message);
    });
  }
};

$(document).ready(function () {
  'use strict';
  HealthTracker.init();
});
