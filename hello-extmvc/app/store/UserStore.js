/**
 * Created with JetBrains WebStorm.
 * User: javarouka
 * Date: 13. 6. 20
 * Time: 오후 1:42
 * To change this template use File | Settings | File Templates.
 */
Ext.define('LoveExtMVC.store.UserStore', {
  extend : 'Ext.data.Store',
  model : 'LoveExtMVC.model.UserListModel',
  autoLoad : true,
  pageSize : 10,
  storeId : 'UserListData',
  proxy : {
    type : 'ajax',
    url : 'data/data.json',
    reader : {
      type : 'json',
      root: ""
    },
    listeners : {
      exception : function(_this, response, operation, eventOpts){
        Aimir.ajax.failure(response);
      }
    }
  }
});
