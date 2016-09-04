/* @file restaurant.js */
function RestaurantView($pParent) { //restaurant의 render이름이 곂치지지 않게 하기 위해 RestaurantView라는 함수를 감싸었음
	var data = [
	    '매드 포 갈릭',
	    '부처스 컷',
	    '빕스',
	    '바피아노',
	    '아웃벡 스테이크'
	];
	
	function render($parent) {
	    var $restaurantList = $("<ul></ul>");
	    $.each(data, function(index, item) {
	        $restaurantList.append("<li>" + item + "</li>");
	    });
	    $parent.append($restaurantList);
	}
	
	render($pParent); //RestaurantView를 call시 render함수에 넘기기 위해서 썼음
}