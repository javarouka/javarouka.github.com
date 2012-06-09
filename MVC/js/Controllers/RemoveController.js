define([
    "Models/User", 
    "Views/ListView"
], function(User, ListView) {
	
	var start = function() {
		var storage = window.localStorage;
		if(confirm("삭제하시겠습니까?")) {
			storage.removeItem("users");
			ListView.render();
		}
		else {
			window.location.hash = "#list";
		}
	}
	
	return {
		start: start
	};
	
})