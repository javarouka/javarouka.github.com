var BrandView = {}; 

BrandView.data = [
    '레드윙',
    '호킨스',
    '닥터마틴',
    '클락스',
    '버팔로',
    '팀버랜드'
];
//BrandView에 data를 할당해 중복을 피한다. 

BrandView.render = function($parent) {
    var $brandList = $("<ul></ul>");
    $.each(BrandView.data, function(index, item) {
        $brandList.append("<li>" + item + "</li>")
    });
    $parent.append($brandList);
}