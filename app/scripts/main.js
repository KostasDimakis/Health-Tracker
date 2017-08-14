/*global HealthTracker, $*/


var HealthTracker = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');
    // TODO: Now parse through the response and return a promise with the parsed response as argument
    const NUTRITIONIX_API = {
      NUTRITIONIX_X_APP_ID: '84d67ad4',
      NUTRITIONIX_X_APP_KEY: '3e892392c1929c39d4afdd9a44e14d60',
      getResults: function(query) {
        // check the argument
        if (!query) {
          console.error(Error('No query argument was found in getResults'));
          return;
        }
        // build the request
        const request = 'https://trackapi.nutritionix.com/v2/search/instant?self=false&query=' + query;
        // add custom headers make the request
        fetch(request, {
          headers: {
            'x-app-id': this.NUTRITIONIX_X_APP_ID,
            'x-app-key': this.NUTRITIONIX_X_APP_KEY
          }
        }).then(function(response) {
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
      },
      getNutrients: function(query) {
        // check the argument
        if (!query) {
          console.error(Error('No query argument was found in getResults'));
          return;
        }
        // build the request
        const request = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
        // add custom headers make the request
        fetch(request, {
          method: 'POST',
          headers: {
            'x-app-id': this.NUTRITIONIX_X_APP_ID,
            'x-app-key': this.NUTRITIONIX_X_APP_KEY,
            'x-remote-user-id': '0',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'query': query
          })
        }).then(function(response) {
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
  }
};

$(document).ready(function () {
  'use strict';
  HealthTracker.init();
});
