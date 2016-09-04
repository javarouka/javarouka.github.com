/* @file brand.js */
function BrandView($pParent) { //brand의 render이름이 곂치지지 않게 하기 위해 BrandView라는 함수를 감싸었음
	var data = [
	    '레드윙',
	    '호킨스',
	    '닥터마틴',
	    '클락스',
	    '버팔로',
	    '팀버랜드'
	];
	
	function render($parent) {
	    var $brandList = $("<ul></ul>");
	    $.each(data, function(index, item) {
	        $brandList.append("<li>" + item + "</li>");
	    });
	    $parent.append($brandList);
	}

	render($pParent); //BrandView를 call시 render함수에 넘기기 위해서 썼음
}