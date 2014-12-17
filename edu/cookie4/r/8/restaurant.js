/*
 * 합성객체 용
 * 객체를 이용하여 내용을 캡슐화하면 객체를 이용해야만 안의 내용에 접근이 가능해진다.
 * 객체를 통해 접근한다 같은 속성이라도 객체이름에 따라 내용이 다르게 나온다. 
 */
var RestaurantView = {render : function($parent) { //RestaurantView라는 객체를 만들고 객체 안에 render라는 이름을 가진 함수객체를 저장한다. 
		var data = [
		    '매드 포 갈릭',
		    '부처스 컷',
		    '빕스',
		    '바피아노',
		    '아웃벡 스테이크'
		];
		
	    var $restaurantList = $("<ul></ul>");
	    $.each(data, function(index, item) {
	        $restaurantList.append("<li>" + item + "</li>");
	    });
	    $parent.append($restaurantList);
	
	}
};
