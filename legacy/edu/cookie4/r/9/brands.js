/**
 * @author Coupang
 */
/* @file brands.js */
var BrandData = { // data변수와 render 함수를 객체 리터럴 변수에 저장하여 이름 변경 없이 사용   
	data : ['레드윙', '호킨스', '닥터마틴', '클락스', '버팔로', '팀버랜드'],

	render : function($parent) {
		var $brandList = $("<ul></ul>");
		$.each(this.data, function(index, item) {
			$brandList.append("<li>" + item + "</li>");
		});
		$parent.append($brandList);
	}
}; 