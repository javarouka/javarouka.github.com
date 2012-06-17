/**
 * 메인 엔트리 코드
 * 페이지의 컨트롤러(Controller).
 */
require([
    "jquery",
    "me/javarouka/model/ModelLoader",
    "me/javarouka/view/ViewResolver"
], function($, Model, View) {
	
	var $html = $("html, body");
	
	var $content = $("article");
	
	/**
	 * 실제 이벤트 함수들
	 */
	var eventSet = {
		
	};
	
	/**
	 * 이벤트 델리게이트 함수들
	 */
	var delegation = {
	}
	
	/**
	 * 이벤트를 바인딩한다.
	 * 
	 * jQuery 커스텀 이벤트와 이벤트 델리게이트를 사용하여 바인딩했다.
	 */
	var eventBind = function() {
	};
	
	// 스크립트 로딩이 끝나면 이벤트 바인딩을 시작한다.
	var init = function() {
	};
	
	init();
	
});