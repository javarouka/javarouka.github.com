var BrandView = new function(){		//싱글톤 객체의 전역 인스턴트 생성 (BrandView 생성)
	this.data = [		//내부 변수 이므로 var data -> this.data 로 변경
		'레드윙',
		'호킨스',
		'닥터마틴',
		'클락스',
		'버팔로',
		'팀버랜드'
	];

	this.render = function($parent) {				//내부 함수 이므로 function render를 -> this.render = function() 로 변경
		var $brandList = $("<ul></ul>");
		$.each(this.data, function(index, item) {	//내부 변수 이므로 var data -> this.data 로 변경
			$brandList.append("<li>" + item + "</li>")
		});
		$parent.append($brandList);
	}
}