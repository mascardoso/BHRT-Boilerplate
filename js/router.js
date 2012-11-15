/*** author: @anotherwebstorm */
/**
 *
 * -> Defining our travel app routes
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
  'bootstrap'
], function($, _, Backbone, Vm){

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
      'about': 'about',
      
      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(options){

    var appView = options.appView;
    var router = new AppRouter(options);
   
    router.on('route:defaultAction', function (actions) {
      require(['views/home'], function (HomePage) {
        var homePage = Vm.create(appView, 'HomePage', HomePage);
        homePage.initialize();
      });
    });

    router.on('route:about', function (actions) {
      require(['views/about'], function (AboutPage) {
        var aboutPage = Vm.create(appView, 'AboutPage', AboutPage);
        aboutPage.initialize();
      });
    });
    
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };

});
