//data 변수의 충돌을 피하기 위해 namespace 분리
var BrandView = (function() {
	//private 속성
	var data = [
    	'레드윙',
    	'호킨스',
    	'닥터마틴',
    	'클락스',
    	'버팔로',
    	'팀버랜드'
	];

	var render = function($parent) {
    	var $brandList = $("<ul></ul>");
    	$.each(data, function(index, item) {
        	$brandList.append("<li>" + item + "</li>")
    	});
    	$parent.append($brandList);
	}
	
	//public 속성
	return {
		render : render
	};
}());