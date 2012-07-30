define([
	"jquery",
	"scripts/robotModules/Logger"
], function($, Logger) {

	var isBuild = false;

	var build = function() {

		if(isBuild) {
			Logger.error("이미 만들었습니다.");
			return;
		}

		Logger.log("몸통을 만들고 있습니다.");

		var body = $("<div>몸통<div>");

		Logger.log("완료되었습니다.");

		isBuild = true;

		return body;
	};

	var isComplete = function() {
		return isBuild;
	};

	return {
		build: build,
		isComplete: isComplete
	}
	
});