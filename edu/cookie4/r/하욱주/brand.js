//브랜드 네임스페이스 생성
var brand = new function() {
	this.data = [
    '레드윙',
    '호킨스',
    '닥터마틴',
    '클락스',
    '버팔로',
    '팀버랜드'
	];
	
	this.render = function($parent) {
    	var $brandList = $("<ul></ul>");
    	$.each(this.data, function(index, item) {
        	$brandList.append("<li>" + item + "</li>")
    	});
    	$parent.append($brandList);
	}
}