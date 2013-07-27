/**
 * Created with JetBrains WebStorm.
 * User: javarouka
 * Date: 13. 6. 19
 * Time: 오후 4:46
 * To change this template use File | Settings | File Templates.
 */
Ext.define("LoveExtMVC.view.Viewport", {
  extend: "Ext.container.Viewport",
  requires:['LoveExtMVC.view.LovePanel'],
//  padding: "20",
//  layout: "vbox",
  items: [
//    {
//      xtype: "lovepanel"
//    },
//    {
//      xtype:'panel',
//      title:'hello',
//      html:'this is a panel inside a viewport!',
//      items:[{
//        xtype:'button',
//        text:'click me'
//      }]
//    },
//    Ext.create('Ext.panel.Panel', {
//      title: 'Hello',
//      width: 200,
//      html: '<p>World!</p>',
//      renderTo: Ext.getBody()
//    }),
    {
      xtype: 'userGrid',
      cls: "myClass"
    }
  ]
});
