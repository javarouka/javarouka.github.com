/**
 * Created with JetBrains WebStorm.
 * User: javarouka
 * Date: 13. 6. 20
 * Time: 오후 1:50
 * To change this template use File | Settings | File Templates.
 */
Ext.define('LoveExtMVC.controller.Users', {
  extend: 'Ext.app.Controller',
  stores: ['UserStore'],
  models: ['UserListModel'],
  views: [
    'component.UserList',
    'component.UserEdit'
  ],
  init: function() {
    this.control({
      'viewport > userGrid': {
        itemdblclick: this.editUser
      },
      'userEdit button[action=save]': {
        click: this.updateUser
      }
    });
  },
  editUser: function(grid, record) {
    console.log('Double clicked on ' + record.get('name'));
    var view = Ext.widget('userEdit');
    view.down('form').loadRecord(record);
  },
  updateUser: function(button) {
    var win    = button.up('window'),
      form   = win.down('form'),
      record = form.getRecord(),
      values = form.getValues();
    record.set(values);
    win.close();

    var s = this.getUserStoreStore();
    console.log(s.sync());
  },
  onPanelRendered: function() {
  }
});
