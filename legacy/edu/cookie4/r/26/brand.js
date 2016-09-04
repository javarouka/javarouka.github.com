// 모듈화. RestaurantView객체 생성
var BrandView = (function(){
// private 영역 시작

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
	//private 영역 끝
	
	// 필요한 것만 공개. 접근 제한은 public이 된다.
	// return되는 객체의 메서드들은 클로저로서
	// private 영역의 변수에 접근이 가능.
	return {
		render : render
	};
})();