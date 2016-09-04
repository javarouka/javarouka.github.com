// 익명함수를 통해 변수를 private으로 사용 가능하게 만듬
var RestaurantView = (function(){
	var data = [
	    '매드 포 갈릭',
	    '부처스 컷',
	    '빕스',
	    '바피아노',
	    '아웃벡 스테이크'
	];
	
	return{
	
		render: function ($parent) {
		    var $restaurantList = $("<ul></ul>");
		    $.each(data, function(index, item) {
		        $restaurantList.append("<li>" + item + "</li>")
		    });
		    $parent.append($restaurantList);
		}
	}
})();