/*  main.js에서 변수로 사용되는 BrandView를 생성하고
 data와 render()함수를 내부에 넣어서 범위(scope)를 함수 내부로 한정한다*/
var BrandView = new function(){
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
