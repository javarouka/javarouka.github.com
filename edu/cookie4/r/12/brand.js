/* @file brands.js */

//이름이 겹침으로 문제가 생기므로 둘중한 파일을 함수로 감싸주었습니다.
function BrandView() {
	var data = [ '레드윙', '호킨스', '닥터마틴', '클락스', '버팔로', '팀버랜드' ];

	this.render = function($parent) {
		var $brandList = $("<ul></ul>");
		$.each(data, function(index, item) {
			$brandList.append("<li>" + item + "</li>")
		});
		$parent.append($brandList);
	}
}