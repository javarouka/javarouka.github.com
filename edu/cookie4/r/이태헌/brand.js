var BrandView = {};
// 모듈화를 위해 네임스페이스를 위한 빈 객체 하나를 만들어준다.

// 객체에 데이터 추가.
BrandView.data = [
    '레드윙',
    '호킨스',
    '닥터마틴',
    '클락스',
    '버팔로',
    '팀버랜드'
];

// 객체에 render 함수 추가.
BrandView.render = function($parent) {
    var $brandList = $("<ul></ul>");
    $.each(BrandView.data, function(index, item) {
        $brandList.append("<li>" + item + "</li>")
    });
    $parent.append($brandList);
}