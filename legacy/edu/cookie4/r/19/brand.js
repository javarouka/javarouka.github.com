// BrandView 객체의 render 속성으로 함수를 정의함
// 해당 함수의 지역 변수로 data 선언
var BrandView = { 'render' : function($parent) {
        // var data로 선언하지 않는 경우, 전역 변수로 선언되므로
        // var data로 배열을 함수 내에 선언함
        var data = [
            '레드윙',
            '호킨스',
            '닥터마틴',
            '클락스',
            '버팔로',
            '팀버랜드'
        ];
        
        var $brandList = $("<ul></ul>");
        $.each(data, function(index, item) {
            $brandList.append("<li>" + item + "</li>")
        });
        $parent.append($brandList);
    }
}