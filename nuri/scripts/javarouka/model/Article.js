define([
    "jquery"
], function($) {
	var CONTEXT = GLOBAL_CONTEXT.CONTEXT;
	
	var getArticleList = function(parameters, success, failure) {
		$.getJSON(
			"scripts/data/articles.json",
			function(data) {
				if(data && typeof failure === 'function') {
					if(data.result === 'success') {
						success(data);
					}
					else {
						failure(data);
					}
				}
			},
			function(data) {
				if(data && typeof failure === 'function') {
					failure(data);
				}
			}
		);
	}

	var getArticleDataStore = function(option) {
		return new Ext.data.JsonStore({
	        root: 'data',
	        totalProperty: 'totalCount',
	        idProperty: 'id',
	        fields: [
            		{ name: 'id', type: 'string' },
            		{ name: 'title', type: 'string' },
            		{ name: 'desc', type: 'string' }
        	],
	        proxy: new Ext.data.HttpProxy({
	            url: 'scripts/data/articles.json'
	        }),
	        autoLoad: true
	    });
	}
	
	return {
		list: getArticleList,
		getArticleDataStore: getArticleDataStore
	}
});