define([
    "me/javarouka/Storage",
], function(Storage) {
	
	var key = "song";
	var scope = "local";
	
	var add = function(song) {
		var songs = getList();
		songs.push(song);
		Storage.add(key, songs);
	};
	
	var getList = function() {
		return Storage.get(key);
	};
	
	var persistRemote = function() {
		throw new Error("not Implements...")
	};
	
	return {
		add: add,
		getList: getList,
		persistRemote: persistRemote
	}
	
});