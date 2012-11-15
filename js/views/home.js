/*** author: @anotherwebstorm */
/**
 *
 * -> Home View
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'Handlebars',
  'text!templates/home.html'
], function($, _, Backbone, hbs, homePageTemplate){

  var HomePage = Backbone.View.extend({

    el: '.app > .container-narrow',

    template: hbs.compile(homePageTemplate),    

    events:{
    },
    
    initialize: function(){
      this.render();
    },

    render: function () {
      $(this.el).html(this.template);
    }

  });
  return HomePage;
});
