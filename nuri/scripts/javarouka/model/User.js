require([
    "jquery"
], function($) {

	var CONTEXT = GLOBAL_CONTEXT.CONTEXT;
	
	var getUserInfo = function(success, failure) {
		$.getJSON(
			CONTEXT + "/scripts/data/userinfo.json",
			success,
			failure
		);
	}
	
	return {
		list: getUserInfo
	}
});