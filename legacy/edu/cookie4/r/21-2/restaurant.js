/*
	모듈화를 위해 함수와 프로토타입을 이용하여 객체 구현
*/
function Restaurant() {		//Restaurant 객체 구현
	this.data = [		//this. 키워드를 이용하여 function내 멤버 배열 변수로 변경
		'매드 포 갈릭',
		'부처스 컷',
		'빕스',
		'바피아노',
		'아웃벡 스테이크'
	];
};

Restaurant.prototype.render = function($parent) {	// 중복 생성을 방지하기위해 Restaurant 객체의 prototype 으로 render 함수 변경
	var $restaurantList = $("<ul></ul>");
	$.each(this.data, function(index, item) {	//data -> this.data 로 변경
		$restaurantList.append("<li>" + item + "</li>")
	});
	$parent.append($restaurantList);
}