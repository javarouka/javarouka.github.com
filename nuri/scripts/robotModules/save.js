define([
	"jquery",
	"scripts/robotModules/Logger"
], function($, Logger) {

	var executed = false;

	var saveOurEarth = function($robot) {

		if(executed) {
			Logger.error("이미 출동했습니다.");
			return;
		}
		if($robot.size() < 1 || $robot.find("div.parts") < 3) {
			Logger.error("출격할 로봇이 미완성이거나 없습니다.");
			return;
		}

		Logger.log("출동합니다.");

		var w = $robot.width();
		var h = $robot.height();

		$robot.css("position", "relative").animate({
			right: -9000,
			bottom: -5000,
			width: w * 2,
			height: h * 2,
		}, 4000, function() {
			$robot.hide();
		});		

		executed = true;
	};

	var isComplete = function() {
		return executed;
	};

	return {
		execute: saveOurEarth,
		isComplete: isComplete
	}
	
});