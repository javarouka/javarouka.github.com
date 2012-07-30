// 모듈을 정의할때는 require 대신 define 함수를 쓴다.
// define 함수도 require처럼 의존관계를 정의할 수 있다.
// 내부적으로 실행되고 그만둘 기능이 아니라면 외부로 노출할
// 속성이나 함수를 반환하는 객체를 코딩해둬야 한다.
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

		Logger.log("머리, 팔,다리를 만들고 있습니다.");

		var etc = $("<div>머리, 팔, 다리</div>");

		Logger.log("완료되었습니다.");

		isBuild = true;

		return etc;
	};

	var isComplete = function() {
		return isBuild;
	};

	// 외부로 공개할 기능을 반환한다.
	return {
		build: build,
		isComplete: isComplete
	}
	
});