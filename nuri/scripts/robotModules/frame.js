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

		Logger.log("프레임을 만들고 있습니다.");

		var frame = $("<div>프레임<div>");

		Logger.log("완료되었습니다.");

		isBuild = true;

		return frame;
	};

	var isComplete = function() {
		return isBuild;
	};

	return {
		build: build,
		isComplete: isComplete
	}
	
});