// 익명함수를 통해 변수를 private으로 사용 가능하게 만듬
var BrandView = (function(){
	var data = [
	    '레드윙',
	    '호킨스',
	    '닥터마틴',
	    '클락스',
	    '버팔로',
	    '팀버랜드'
	];
	
	return{
		render: function($parent) {
		    var $brandList = $("<ul></ul>");
		    $.each(data, function(index, item) {
		        $brandList.append("<li>" + item + "</li>")
		    });
		    $parent.append($brandList);
		}
	}
})();