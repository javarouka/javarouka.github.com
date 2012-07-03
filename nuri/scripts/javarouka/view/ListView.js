define([
    "jquery",
    "javarouka/utils/Logger"
], function($, Logger) {
	
	var I18N = GLOBAL_CONTEXT.I18N;
	
	/**
	 * 그리드를 그린다
	 * @ dependancy Extjs
	 */
	var renderList = function(store) {
		var conf = {
			id: "article-list-ex",
			renderTo: 'article-list',
			title: I18N['article-title'],
			store: store,
			width: 500,
			autoHeight: true,
			viewConfig : {
	            forceFit: true
	        },
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
		var $UL = $("#article-list ul");
		$UL.hide(200, function(){
			var $LIs = $UL.find("li");
			$LIs.each(function() {
				var v = record[$(this).attr("data-value")];
				$(this).text(v);
			});
			$UL.show('normal');
		})
	};
	
	return {
		renderList: renderList,
		detailView: detailView
	}
});