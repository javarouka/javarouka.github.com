/**
 * @author Coupang
 */
/* @file restaurant.js */
//익명함수를 클래스로 만들어서 new 키워드를 통해 인스턴스를 brandView에 할당한다.
var restaurantView = new function () {
	//private property
	var data = [
	    '매드 포 갈릭',
	    '부처스 컷',
	    '빕스',
	    '바피아노',
	    '아웃벡 스테이크'
	];
	
	//render method, jQuery를 통해 ul노드를 래퍼로 하는 list 노드를 동적으로 생성하여 $parent jQuery 노드 셋에 자식으로 추
	this.render = function ($parent) {
	    var $restaurantList = $("<ul></ul>");
	    $.each(data, function(index, item) {
	        $restaurantList.append("<li>" + item + "</li>");
	    });
	    $parent.append($restaurantList);
	};
};