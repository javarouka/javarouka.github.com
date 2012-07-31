define([
	"jquery",
	"scripts/samples/Logger"
], function($, Logger) {

	var paint = function($canvas, callback) {
		Logger.log($canvas.attr("id") + "에 그리고 있습니다.");

		var canvas = $canvasContainer.find("canvas")[0];

		var ctx = canvas.getContext("2d");

		ctx.fillStyle = "rgb(200,0,0)";
		ctx.fillRect (10, 10, 50, 50);

		ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
		ctx.fillRect (30, 30, 50, 50);

		Logger.log("완료되었습니다.");
		
		return body;
	};

	return {
		paint: paint
	}
	
});