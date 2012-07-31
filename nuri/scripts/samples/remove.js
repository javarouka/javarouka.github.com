define([
	"jquery",
	"scripts/samples/Logger"
], function($, Logger) {

	var executed = false;

	var remove = function($canvasContainer, callback) {
		
		if($canvasContainer.size() < 1) {
			Logger.error("지울 영역이 없습니다.");
			return;
		}
	    var canvas = $canvasContainer.find("canvas")[0];

	    console.log($canvasContainer.find("canvas"));

	    var ctx = canvas.getContext('2d');
	    ctx.fillStyle = "#ffffff";
	    ctx.fill();

		Logger.log("지웠습니다.");
	};

	return {
		execute: remove
	}
	
});