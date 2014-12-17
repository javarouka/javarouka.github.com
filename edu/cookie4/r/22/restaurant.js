//function으로 모듈화하여 render함수와 data를 구분했습니다.
function RestaurantObj(){	//RestaurantObj 객체 생성
	var data = [
	    '매드 포 갈릭',
	    '부처스 컷',
	    '빕스',
	    '바피아노',
	    '아웃벡 스테이크'
	];
	this.render = function($parent) {	//RestaurantObj의 render함수 정의
		    var $restaurantList = $("<ul></ul>");
		    $.each(data, function(index, item) {
		        $restaurantList.append("<li>" + item + "</li>")
		    });
		    $parent.append($restaurantList);
	}
}