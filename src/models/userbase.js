var State = require('ampersand-state');
var App = require('ampersand-app');

module.exports = State.extend({
   ajaxConfig: function(){
      return {
         headers: {
            'Authorization': App.user.token
         }
      }
   },
   type: 'user'
});
