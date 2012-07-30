define([
	"jquery",
	"scripts/robotModules/Logger"
], function($, Logger) {

	var isBuild = false;

	var build = function() {

		if(isBuild) {
			Logger.log("이미 만들었습니다.");
			return;
		}

		Logger.log("머리, 팔,다리를 만들고 있습니다.");

		var etc = $("<div>머리, 팔, 다리</div>");

		Logger.log("완료되었습니다.");

		isBuild = true;

		return etc;
	};

	var isComplete = function() {
		return isBuild;
	};

	return {
		build: build,
		isComplete: isComplete
	}
	
});