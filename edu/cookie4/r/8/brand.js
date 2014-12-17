/*
 * 함수객체를 용
 */

function BrandView() { //BrandView라는 함수 객체를 선언한다.
	var data = [
	    '레드윙',
	    '호킨스',
	    '닥터마틴',
	    '클락스',
	    '버팔로',
	    '팀버랜드'
	];
	
	this.render = function($parent) { // 현재 함수를 실행하고 있는 객체를 참조한다.
	    $brandList = $("<ul></ul>");
	    $.each(data, function(index, item) {
	        $brandList.append("<li>" + item + "</li>");
	    });
	    $parent.append($brandList);
	};
}