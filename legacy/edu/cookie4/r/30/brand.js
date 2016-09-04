//data변수가 전역변수로 선언되어 같은 스코프에 똑같은 변수명 두개가 중복되어 생기는 문제이기 때문에, 모듈화 시켜서 스코프를 갈라줍니다.
function brand(){
    var data = [
        '레드윙',
        '호킨스',
        '닥터마틴',
        '클락스',
        '버팔로',
        '팀버랜드'
    ];

    this.render = function($parent) {
        var $brandList = $("<ul></ul>");
        $.each(data, function(index, item) {
            $brandList.append("<li>" + item + "</li>")
        });
        $parent.append($brandList);
    }
}