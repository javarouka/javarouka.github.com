/**
 * Created with JetBrains WebStorm.
 * User: javarouka
 * Date: 13. 6. 20
 * Time: 오전 9:40
 * To change this template use File | Settings | File Templates.
 */
;"use strict";
Ext.define("LoveExtMVC.controller.LoveController", {
  extend: "Ext.app.Controller",
  models: [ 'LoveExtMVC.model.UserListModel' ],
  init: function() {

    this.control({
      'button': {
        click: this.onButtonClick
      }
    });
    this.application.on();
  },
  onButtonClick: function(button, event, eOpts) {
    this.application.fireEvent('sendTheClick', button, event, eOpts);
  }
});
