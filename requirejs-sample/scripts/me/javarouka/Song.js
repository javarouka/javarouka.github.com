define([
    "me/javarouka/Storage",
], function(Storage) {
	
	var add = function(song) {
		var songs = getList();
		songs.push(song);
		Storage.add(songs);
	};
	
	var getList = function() {
		return Storage.get("song");
	};
	
	return {
		add: add,
		getList: getList
	}
	
});