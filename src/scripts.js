var App = require('ampersand-app');
var User = require('./models/user');
var _ = require('lodash');
var Router = require('./router');

window.app = App;

App.extend({
   user: new User({
      token: // TODO: implement token
   });

   router: new Router(),

   init: function(){
      if(this.user.token == null){ // TODO: better checking
         return;
      }

      this.user.fetch({
         success: bind(function(){
            // TODO: Create and attach our main view

            // Start the router
            this.router.history.start({pushState: true});
         }, this),

         error: bind(function(){
            // If there is an error fetching the user information then we force the user to  login page to regen the token
            this.logout();
         }, this)

      });
   },

   navigate: function(page){
      var url = (page.charAt(0) === '/') ? page.slice(1) : page;
      this.router.history.navigate(url, {
         trigger: true
      });
   },
   logout: function(){
      //delete all stored data
      //redirect
   }
});
