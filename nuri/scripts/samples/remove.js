define([
	"jquery",
	"scripts/samples/Logger"
], function($, Logger) {

	var remove = function($canvasContainer, callback) {
		
	    var canvas = $canvasContainer.find("canvas")[0];
	    var ctx = canvas.getContext('2d');

	    // trick
	    canvas.width = canvas.width;

		Logger.log("지웠습니다.");
	};

	return {
		execute: remove
	}
	
});