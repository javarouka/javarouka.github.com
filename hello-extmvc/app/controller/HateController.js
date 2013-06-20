/**
 * Created with JetBrains WebStorm.
 * User: javarouka
 * Date: 13. 6. 20
 * Time: 오전 9:48
 * To change this template use File | Settings | File Templates.
 */
;"use strict";
Ext.define("LoveExtMVC.controller.HateController", {
  extend: "Ext.app.Controller",
  init: function() {
    console.log("HateController Initialized");
    this.application.on({
      sendTheClick: this.caughtTheClick,
      scope: this
    });
  },
  caughtTheClick: function(button, event, eOpts) {
    console.log(this.application);
    console.log(button, event, eOpts);
  }
});
