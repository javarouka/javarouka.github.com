define([
	"javarouka/Util/HttpService",
	"javarouka/Util/LocalStorage"
], function(Http, Storage) {

	return {
		requireModels: [],
		Storage: Storage,
		Request: Http
	};

});