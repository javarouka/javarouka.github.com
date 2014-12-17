/*
	모듈화를 위해 함수와 프로토타입을 이용하여 객체 구현
*/
function Brand() {	//Brand 객체 구현
	this.data = [	//this. 키워드를 이용하여 function내 멤버 배열 변수로 변경
		'레드윙',
		'호킨스',
		'닥터마틴',
		'클락스',
		'버팔로',
		'팀버랜드'
	];	
}

Brand.prototype.render = function($parent) {	// 중복 생성을 방지하기위해 Restaurant 객체의 prototype 으로 render 함수 변경
		var $brandList = $("<ul></ul>");
		$.each(this.data, function(index, item) {	//data -> this.data 로 변경
			$brandList.append("<li>" + item + "</li>")
		});
		$parent.append($brandList);
	}