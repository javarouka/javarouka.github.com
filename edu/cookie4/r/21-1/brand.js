var BrandView = {	//기존 소스를 BrandView 변수 객체의 리터럴(literal) 로 선언
	data : [		//객체의 속성이기떄문에 var 변수 대신 내부값으로 변경
		'레드윙',
		'호킨스',
		'닥터마틴',
		'클락스',
		'버팔로',
		'팀버랜드'
	],
	render : function($parent) {	//객체의 속성이므로 function 를 render라는 내부 값으로 변경
		var $brandList = $("<ul></ul>");
		$.each(this.data, function(index, item) {	// 객체내의 변수 참조를 위해 data-> this.data로 변경
			$brandList.append("<li>" + item + "</li>")
		});
		$parent.append($brandList);
	}
}