/**
 * Created with JetBrains WebStorm.
 * User: javarouka
 * Date: 13. 6. 20
 * Time: 오후 1:42
 * To change this template use File | Settings | File Templates.
 */
Ext.define('LoveExtMVC.store.UserStore', {
  extend : 'Ext.data.Store',
  alias: "userStore",
  model : 'LoveExtMVC.model.UserListModel',
  autoLoad : true,
  pageSize : 10,
  proxy : {
    type : 'ajax',
    api: {
      read: 'data/data.json',
      update: 'data/data.json'
    },
    reader : {
      type : 'json',
      root: '',
      successProperty: 'success'
    },
    listeners : {
      exception : function(_this, response, operation, eventOpts){
        console.log(_this)
      }
    }
  }
});
