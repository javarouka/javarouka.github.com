var RestaurantView = new function(){		//싱글톤 객체의 전역 인스턴트 생성 (RestaurantView 생성)
	this.data = [		//내부 변수 이므로 var data -> this.data 로 변경
		'매드 포 갈릭',
		'부처스 컷',
		'빕스',
		'바피아노',
		'아웃벡 스테이크'
	];

	this.render = function($parent) {		//내부 함수 이므로 function render를 -> this.render = function() 로 변경
		var $restaurantList = $("<ul></ul>");
		$.each(this.data, function(index, item) {		//객체내의 data를 참조하기위해 data -> this.data로 변경 
			$restaurantList.append("<li>" + item + "</li>")
		})
		$parent.append($restaurantList);
	}
}