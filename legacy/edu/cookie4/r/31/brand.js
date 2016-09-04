
var BRAND={}; //BRAND라는 네임스페이스 선

//data와 render라는 변수와 함수를 BRAND라는 네임스페이스로 활용

BRAND. data = [
    '레드윙',
    '호킨스',
    '닥터마틴',
    '클락스',
    '버팔로',
    '팀버랜드'
];

BRAND.render=function($parent) {
    var $brandList = $("<ul></ul>");
    $.each(BRAND.data, function(index, item) { //data가 아닌 BRAND의 data를 활
        $brandList.append("<li>" + item + "</li>")
    });
    $parent.append($brandList);
};