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

		Logger.log("출동합니다.");
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