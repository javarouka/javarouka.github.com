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
		var w = $canvasContainer.width();
		var h = $canvasContainer.height();

		$canvasContainer.fadeOut(2000, function() {
		    var canvas = $canvasContainer.find("canvas")[0];
		    var ctx = canvas.getContext('2d');
		    ctx.fillStyle = "#ffffff";
		    ctx.fill();
		    ctx.beginPath();
			Logger.error("지웠습니다.");
		});		
	};

	return {
		execute: remove
	}
	
});