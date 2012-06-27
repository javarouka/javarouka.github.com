require([
    "jquery",
    "javarouka/utils/Logger"
], function($, Logger) {
	
	var I18N = GOLBAL_CONTEXT.I18N;
	
	var desc;
	
	var renderList = function(store) {
		Logger.info(store);
		var conf = {
			id: "article-list-ex",
			renderTo: 'article-list',
			title: I18N['article-title'],
			store: store,
			width: 200,
			selModel: new Ext.grid.RowSelectionModel({
	    		singleSelect: true
	    	}),
			columns: [
	    	    {
	    	    	header: I18N["article-id"],
	    	    	align: 'center',
	    	    	width: 50,
	    	    	dataIndex: "id"
	    	    },
	    	    {
	    	    	header: I18N["article-row-title"],
	    	    	width: 150,
	    	    	dataIndex: "title"
	    	    }
	    	]
		};
		return new Ext.grid.GridPanel(conf);
	};
	
	var detailView = function(record) {
		Logger.info(record);
		var $layerLIs = $("#detail-layer li");
		$layerLIs.each(function() {
			var v = record[$(this).attr("data-value")];
			$(this).text(v);
		});
		desc = new Ext.Window({
            applyTo:'detail-layer',
            title: I18N['detail-window-title']
            layout:'fit',
            width:500,
            height:300,
            closeAction:'hide',
            plain: true,
            buttons: [{
                text: title: I18N['detail-window-close'],
                handler: function(){
                	desc.hide();
                }
            }]
        });
	};
	
	return {
		renderList: renderList,
		detailView: detailView
	}
});