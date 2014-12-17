/* @file brands.js */
/*restaurant.js와 변수, 함수명이 같기 때문에
  전체 namespace로 함께 들어가서
  main.js에서 call 했을 때, 충돌하게 된다.
  이를 해결하기 위해 캡슐화하여 같은 영역에서 변수가 충돌하는 것을 막았다.
  */
function BrandView() {
	var data = [
	    '레드윙',
	    '호킨스',
	    '닥터마틴',
	    '클락스',
	    '버팔로',
	    '팀버랜드'
	];
	
	this.render = function ($parent) {
	    var $brandList = $("<ul></ul>");
	    $.each(data, function(index, item) {
	        $brandList.append("<li>" + item + "</li>");
	    });
	    $parent.append($brandList);
	};	
}