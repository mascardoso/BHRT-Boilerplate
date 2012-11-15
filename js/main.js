/*** author: @anotherwebstorm */
/**
 *
 * -> Defining our libraries and initializing our app
 */
require.config({
  paths: {
    // Major libraries
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    // Handle Clean Up Views libraries
    vm:'libs/vm/vm',
    events:'libs/vm/events',
    // Bootstrap
    bootstrap: 'libs/bootstrap/bootstrap',
    // Templating
    Handlebars:'libs/handlebars/handlebars-min', 
    // Require plugins
    text: 'libs/require/text',
    // Templates
    templates: '../templates'
  }
});

require.config({
  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'bootstrap':{
      deps:['jquery']
    },
    'Handlebars':{
      exports:'Handlebars'
    }        
  }
});

// Let's kick off the application
require([
  'views/app',
  'router',
  'vm'
], function(AppView, Router, Vm){
  var appView = Vm.create({}, 'AppView', AppView);
  appView.render();
  Router.initialize({appView: appView});  // The router now has a copy of all main appview
});
