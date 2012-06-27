require([
    "jquery"
], function($) {

	var getArticleList = function(parameters, success, failure) {
		$.getJSON(
			"script/data/articles.json",
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