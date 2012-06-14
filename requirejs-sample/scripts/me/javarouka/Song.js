define([
    "me/javarouka/Storage",
], function(Storage) {
	
	var key = "song";
	
	var add = function(song) {
		var songs = getList();
		songs.push(song);
		Storage.add(key, songs);
	};
	
	var getList = function() {
		return Storage.get(key);
	};
	
	return {
		add: add,
		getList: getList
	}
	
});