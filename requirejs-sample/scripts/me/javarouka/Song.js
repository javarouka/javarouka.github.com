define([
    "me/javarouka/Storage",
], function(Storage) {
	
	var getList = function() {
		return Storage.get("song");
	};
	
	return {
		getList: getList
	}
	
});