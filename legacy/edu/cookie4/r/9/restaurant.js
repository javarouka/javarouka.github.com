/**
 * @author Coupang
 */

/* @file restaurant.js */
var RestaurantData = { // data변수와 render 함수를 객체 리터럴 변수에 저장하여 이름 변경 없이 사용  
	data : ['매드 포 갈릭', '부처스 컷', '빕스', '바피아노', '아웃벡 스테이크'],

	render : function($parent) {
		var $restaurantList = $("<ul></ul>");
		$.each(this.data, function(index, item) {
			$restaurantList.append("<li>" + item + "</li>");
		});
		$parent.append($restaurantList);
	}
};
