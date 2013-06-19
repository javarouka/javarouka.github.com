/**
 * Created with JetBrains WebStorm.
 * User: javarouka
 * Date: 13. 6. 19
 * Time: 오후 5:24
 * To change this template use File | Settings | File Templates.
 */
"use strict";
Ext.define("LoveExtMVC.view.LovePanel", {
  extend: "Ext.panel.Panel",
  alias: 'widget.lovepanel',
  items:[{
    xtype:'button',
    text:'button1'
  },{
    xtype:'button',
    text:'button2'
  }]
});
