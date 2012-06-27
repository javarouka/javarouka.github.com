define([
    "jquery"
], function($) {

	var CONTEXT = GLOBAL_CONTEXT.CONTEXT;
	
	var getUserInfo = function(success, failure) {
		$.getJSON(
			"scripts/data/userinfo.json",
			success,
			failure
		);
	}
	
	return {
		getUserInfo: getUserInfo
	}
});