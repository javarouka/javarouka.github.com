/**
 * Created with JetBrains WebStorm.
 * User: javarouka
 * Date: 13. 6. 20
 * Time: 오전 11:24
 * To change this template use File | Settings | File Templates.
 */
Ext.define("LoveExtMVC.model.UserListModel", {
  extend: "Ext.data.Model",
  alias: "userList",
    fields: [
      { name: "no", type: "int" },
      { name: "id", type: "string" },
      { name: "name", type: "string" },
      { name: "registDate", type: "string" }
    ]
});

