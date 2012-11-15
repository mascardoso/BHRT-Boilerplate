/*** author: @anotherwebstorm */
/**
 *
 * -> Start App 
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
  'text!templates/layout.html'
], function($, _, Backbone, Vm, layoutTemplate){
  var AppView = Backbone.View.extend({
    
    el: '.app',
    
    initialize: function () {
      this.render();
    },

    render: function () {
      $(this.el).html(layoutTemplate); 
    }

  });
  return AppView;
});