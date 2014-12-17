function RestaurantView(){
	//RestaurantView Class 를 만들어 모듈화 하여 변수와 메소드를 제한하여 사용할 수 있게 하였습니다.
	var data = [
	'매드 포 갈릭',
	'부처스 컷',
	'빕스',
	'바피아노',
	'아웃벡 스테이크'
	];
	
	this.render = function ($parent) {//내부 함수이기때문에 this로 참조하였습니다.
	    var $restaurantList = $("<ul></ul>");
	    $.each(data, function(index, item) {
	        $restaurantList.append("<li>" + item + "</li>");
	    });
	    $parent.append($restaurantList);
	};
};