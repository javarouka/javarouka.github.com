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
	
	return {
		list: getArticleList
	}
});