// 모듈화. RestaurantView객체 생성
var RestaurantView = (function(){
	// private 영역 시작
	
	var data = [
   	 '매드 포 갈릭',
   	 '부처스 컷',
   	 '빕스',
   	 '바피아노',
   	 '아웃벡 스테이크'
	];

	var render = function($parent) {
    	var $restaurantList = $("<ul></ul>");
    		$.each(data, function(index, item) {
    	    	$restaurantList.append("<li>" + item + "</li>")
   	 	});
   	 	$parent.append($restaurantList);
	}
	//private 영역 끝
	
	
	// 필요한 것만 공개. 접근 제한은 public이 된다.
	// return되는 객체의 메서드들은 클로저로서
	// private 영역의 변수에 접근이 가능.
	return {
		render : render
	};

})();