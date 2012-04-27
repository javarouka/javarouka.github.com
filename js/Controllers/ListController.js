define(["Persist/Storage", "Views/ListView"], function(Storage, ListView) {
	
	function start() {
		var userJSON = Storage.get("users"),
			users = { };
		if(userJSON) {
			users.users = userJSON;			
		}
		ListView.render( users );
	}
	
	return {
		start: start
	};
	
});