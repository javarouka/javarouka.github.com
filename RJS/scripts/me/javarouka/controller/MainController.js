define([
    "me/javarouka/utils/ObjectUtils",
    "me/javarouka/view/ViewResolver"
], function(ObjectUtils, ViewResolver) {
	
	var execute = function(executeParams) {
		
		// 모델 작성 처리
		
		ViewResolver.resolve("TemplateHTML", {
			name: "Main",
			path: "Main",
			callback: function(res) {
				console.log("ㅗ띠ㅣㅐ?");
				// 뷰 로딩 후 처리...이벤트 및 모델 데이터 할당
			}
		});
	};
	
	return {
		execute: execute
	};
});