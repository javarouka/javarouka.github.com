/**
 * Created with JetBrains WebStorm.
 * User: javarouka
 * Date: 13. 6. 20
 * Time: 오후 2:19
 * To change this template use File | Settings | File Templates.
 */
Ext.define("LoveExtMVC.view.component.UserList", {
  extend: "Ext.grid.Panel",
  alias: "widget.userGrid",
  title : 'All Users',
  store: "UserStore",
  initComponent: function() {
    this.columns = [
      {header: 'Sequence',  dataIndex: 'no',  flex: 1},
      {header: '아이디',  dataIndex: 'id',  flex: 1},
      {header: '이름', dataIndex: 'name', flex: 1},
      {header: '등록일',  dataIndex: 'registDate',  flex: 1},
    ];
    this.listeners = {
      load :  function() {
        console.log("loaded");
      }
    };
    this.callParent(arguments);
  }
});