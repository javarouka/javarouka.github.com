//레스토랑 네임스페이스 생성
var restaurant = new function() {
	this.data = [
    	'매드 포 갈릭',
    	'부처스 컷',
    	'빕스',
    	'바피아노',
    	'아웃벡 스테이크'
	];

	this.render = function ($parent) {
    	var $restaurantList = $("<ul></ul>");
    	$.each(this.data, function(index, item) {
        	$restaurantList.append("<li>" + item + "</li>")
    	});
    	$parent.append($restaurantList);
	}
}