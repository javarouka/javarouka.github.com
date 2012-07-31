define([
	"jquery",
	"scripts/robotModules/Logger"
], function($, Logger) {

	var executed = false;

	var remove = function($canvasContainer, callback) {
		
		if($canvasContainer.size() < 1) {
			Logger.error("지울 도형이 없습니다.");
			return;
		}
		var w = $canvasContainer.width();
		var h = $canvasContainer.height();

		$canvasContainer.css("position", "relative").animate({
			right: -9000,
			bottom: -5000,
			width: w * 2,
			height: h * 2,
		}, 4000, function() {
		    var canvas = $canvasContainer.find("canvas")[0];
		    var ctx = canvas.getContext('2d');
		    ctx.clearRect(0, 0, cnvs.width, cnvs.height);
		    ctx.beginPath();
			Logger.error("지웠습니다.");
		});		
	};

	return {
		execute: remove
	}
	
});