/**
 * Created with JetBrains WebStorm.
 * User: javarouka
 * Date: 13. 6. 19
 * Time: 오후 4:46
 * To change this template use File | Settings | File Templates.
 */
Ext.define("App.view.Viewport", {
  extend: "Ext.container.Viewport",
  use: [
    "Ext.panel.Panel"
  ],
  layout: "fit",
  items: [Ext.create('Ext.panel.Panel', {
    title: 'Hello',
    width: 200,
    html: '<p>World!</p>',
    renderTo: Ext.getBody()
  })]
});
