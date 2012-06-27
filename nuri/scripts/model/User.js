require([
    "jquery"
], function($) {

	var getUserInfo = function(success, failure) {
		$.getJSON(
			"script/data/userinfo.json",
			success,
			failure
		);
	}
	
	return {
		list: getArticleList
	}
});