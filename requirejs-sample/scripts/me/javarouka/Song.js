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
	"me/javarouka/GenericModel",
    "me/javarouka/Storage"
], function(Parent, Storage) {
	
	var MEMBER = {
		key: "song"
	};

	var Song = function(spec) {
		this.name = spec.name;		
	};
	GenericModel.inherits(Song);

	var add = function(song) {
		var songs = getList();
		songs.push(song);
		Storage.add(MEMBER.key, songs);
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