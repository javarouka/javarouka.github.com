define([
    "Models/User", 
    "Views/ListView"
], function(User, ListView) {
	
	var start = function() {
		var storage = window.localStorage;	
		storage.removeItem("users");	
		ListView.render();
	}
	
	return {
		start: start
	};
	
})