var RestaurantView = {	//기존 소스를 BrandView 변수 객체의 리터럴(literal)로 선언
	data : [			//객체의 속성이기떄문에 var 변수 대신 내부값으로 변경
		'매드 포 갈릭',
		'부처스 컷',
		'빕스',
		'바피아노',
		'아웃벡 스테이크'
	],

	render : function($parent) {	//객체의 속성이므로 function 를 render라는 내부 값으로 변경
		var $restaurantList = $("<ul></ul>");
		$.each(this.data, function(index, item) {	// 객체내의 변수 참조를 위해 data-> this.data로 변경
			$restaurantList.append("<li>" + item + "</li>")
		});
		$parent.append($restaurantList);
	}
}