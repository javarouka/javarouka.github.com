//레스토랑.js와 같은 원리이므로 주석은 생략합니다.

var BrandView;

BrandView = {};

BrandView.data = [
    '레드윙',
    '호킨스',
    '닥터마틴',
    '클락스',
    '버팔로',
    '팀버랜드'
];

BrandView.render =  {};
(function(){
	
BrandView.render = function ($parent) {
		var $brandList = $("<ul></ul>")
		$.each(BrandView.data, function(index, item) {
        $brandList.append("<li>" + item + "</li>")
    	});
    $parent.append($brandList);
};
})();
