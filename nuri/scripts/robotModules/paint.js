define([
	"jquery",
	"scripts/robotModules/Logger"
], function($, Logger) {

	var executed = false;

	var paint = function($robot) {

		if(executed) {
			Logger.error("이미 칠했습니다.");
			return;
		}

		Logger.log("페인트를 칠하고 있습니다.");
		Logger.log("완료되었습니다.");

		executed = true;
	};

	var isComplete = function() {
		return executed;
	};

	return {
		execute: paint,
		isComplete: isComplete
	}
	
});