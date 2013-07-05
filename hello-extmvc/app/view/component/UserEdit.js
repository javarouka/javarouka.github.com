/**
 * Created with JetBrains WebStorm.
 * User: javarouka
 * Date: 13. 6. 20
 * Time: 오후 2:45
 * To change this template use File | Settings | File Templates.
 */
Ext.define("LoveExtMVC.view.component.UserEdit", {
  extend: "Ext.window.Window",
  alias: "widget.userEdit",
  autoShow: true,
  initComponent: function() {

    this.items = [
      {
        xtype: 'form',
        items: [
          {
            xtype: 'textfield',
            name : 'id',
            fieldLabel: '아이디'
          },
          {
            xtype: 'textfield',
            name : 'name',
            fieldLabel: '이름'
          }
        ]
      }
    ];

    this.buttons = [
      {
        text: 'Save',
        action: 'save'
      },
      {
        text: 'Cancel',
        scope: this,
        handler: this.close
      }
    ];

    this.callParent(arguments);
  }
});
