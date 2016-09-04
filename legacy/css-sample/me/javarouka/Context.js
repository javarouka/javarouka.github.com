define([
	"javarouka/Util/HttpService",
	"javarouka/Util/LocalStorage"
], function(Http, Storage) {

	return {
		Storage: Storage,
		Request: Http
	};

});