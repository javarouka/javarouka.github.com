/* @file restaurant.js */
/*brand.js와 변수, 함수명이 같기 때문에
  전체 namespace로 함께 들어가서
  main.js에서 call 했을 때, 충돌하게 된다.
  이를 해결하기 위해 캡슐화하여 같은 영역에서 변수가 충돌하는 것을 막았다.
  */
function RestaurantView(){
	var data = [
	    '매드 포 갈릭',
	    '부처스 컷',
	    '빕스',
	    '바피아노',
	    '아웃벡 스테이크'
	];
	
	this.render = function ($parent) {
	    var $restaurantList = $("<ul></ul>");
	    $.each(data, function(index, item) {
	        $restaurantList.append("<li>" + item + "</li>");
	    });
	    $parent.append($restaurantList);
	};	
}
