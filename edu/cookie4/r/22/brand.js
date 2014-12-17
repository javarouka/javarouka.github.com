//function으로 모듈화
function BrandObj(){	//BrandObj 객체 생성
	var data = [
	    '레드윙',
	    '호킨스',
	    '닥터마틴',
	    '클락스',
	    '버팔로',
	    '팀버랜드'
	];	
	this.render = function ($parent) {	//BrandObj의 render함수 정의
		    var $brandList = $("<ul></ul>");
		    $.each(data, function(index, item) {
		        $brandList.append("<li>" + item + "</li>")
		    });
		    $parent.append($brandList);
	}
}