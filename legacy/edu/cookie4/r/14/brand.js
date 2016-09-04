// 클래스 선언(함수를이용)
function BrandView(){
var data = [
    '레드윙',
    '호킨스',
    '닥터마틴',
    '클락스',
    '버팔로',
    '팀버랜드'
];
// render method 
this.render = function($parent) {
    var $brandList = $("<ul></ul>");
    $.each(data, function(index, item) {
        $brandList.append("<li>" + item + "</li>")
    });
    $parent.append($brandList);
};
}