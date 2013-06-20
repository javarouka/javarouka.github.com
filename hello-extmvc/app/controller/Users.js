/**
 * Created with JetBrains WebStorm.
 * User: javarouka
 * Date: 13. 6. 20
 * Time: 오후 1:50
 * To change this template use File | Settings | File Templates.
 */
Ext.define('LoveExtMVC.controller.Users', {
  extend: 'Ext.app.Controller',
  views: [
    'component.UserList'
  ],
  init: function() {
    this.control({
      'viewport > panel': {
        render: this.onPanelRendered
      }
    });
  },
  onPanelRendered: function() {
  }
});
