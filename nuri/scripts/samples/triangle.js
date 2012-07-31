// 모듈을 정의할때는 require 대신 define 함수를 쓴다.
// define 함수도 require처럼 의존관계를 정의할 수 있다.
// 내부적으로 실행되고 그만둘 기능이 아니라면 외부로 노출할
// 속성이나 함수를 반환하는 객체를 코딩해둬야 한다.
define([
	"jquery",
	"scripts/samples/Logger"
], function($, Logger) {

	var paint = function($canvasContainer, callback) {
		Logger.log($canvasContainer.attr("id") + "에 그리고 있습니다.");

		var canvas = $canvasContainer.find("canvas")[0];

		var ctx = canvas.getContext("2d");

		ctx.beginPath();
		ctx.moveTo(60 + 135/2, 60);
		ctx.lineTo(60 + 135, 125 + 60);
		ctx.lineTo(60, 125 + 60);
		ctx.closePath();
		
		ctx.fillStyle = "green";
		ctx.fill();

		Logger.log("완료되었습니다.");
	};

	return {
		paint: paint
	}
	
});