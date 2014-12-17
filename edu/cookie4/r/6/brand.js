
/**
 * @author Coupang
 */
/* @file brand.js */
//익명함수를 클래스로 만들어서 new 키워드를 통해 인스턴스를 brandView에 할당한다.
var brandView = new function () {
	//private property
	var data = [
	    '레드윙',
	    '호킨스',
	    '닥터마틴',
	    '클락스',
	    '버팔로',
	    '팀버랜드'
	];
	
	//render method, jQuery를 통해 ul노드를 래퍼로 하는 list 노드를 동적으로 생성하여 $parent jQuery 노드 셋에 자식으로 추
	this.render = function ($parent) {
	    var $brandList = $("<ul></ul>");
	    $.each(data, function(index, item) {
	        $brandList.append("<li>" + item + "</li>");
	    });
	    $parent.append($brandList);
	};
};