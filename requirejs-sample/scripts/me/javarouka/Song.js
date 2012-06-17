/**
 * Song 모델 (Model)
 * 
 * @dependency Storage
 * 
 * @model
 * {
 * 		title: 노래제목
 * 		singer: 가수
 * 		lyrics: 가사
 * }
 */
define([
    "me/javarouka/Storage",
], function(Storage) {
	
	var key = "song";
	var scope = [ "local" ];
	
	var add = function(song) {
		var songs = getList();
		songs.push(song);
		Storage.add(key, songs);
	};
	
	var getList = function() {
		return Storage.get(key);
	};
	
	var saveRemote = function() {
		throw new Error("not Implements...")
	};
	
	return {
		add: add,
		getList: getList,
		saveRemote: saveRemote
	}
	
});