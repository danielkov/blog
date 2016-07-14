var Router = require('ampersand-router');
var App = require('ampersand-app');

module.exports = Router.extend({
   routes:{
      '(/)': 'home',
      'user/login(/)': 'login',
      'user/signup(/)': 'signup',
      'user/settings(/)': 'settings',
      'posts/:id': 'postView',
      'posts/new(/)': 'postAdd',
      'posts/edit/:id': 'postEdit',
      'posts/delete/:id': 'postDelete',
      '(*path)': 'catch'
   },

   // ------- ROUTE HANDLERS --------

   home: function(){
      app.trigger('page' /* new HomePage({
         model: App.user
      });*/);
   },
   login: function(){},
   signup: function(){},
   settings: function(){},
   postView: function(){},
   postAdd: function(){},
   postEdit: function(){},
   postDelete: function(){},
   catch: function(){}
});
