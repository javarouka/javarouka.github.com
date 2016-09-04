// RetauratnView 객체의 render 속성으로 함수를 정의함
// 해당 함수의 지역 변수로 data 선언
var RestaurantView = { 'render' : function($parent) {
        // var data로 선언하지 않는 경우, 전역 변수로 선언되므로
        // var data로 배열을 함수 내에 선언함
        var data = [
            '매드 포 갈릭',
            '부처스 컷',
            '빕스',
            '바피아노',
            '아웃벡 스테이크'
        ];

        var $restaurantList = $("<ul></ul>");
        $.each(data, function(index, item) {
            $restaurantList.append("<li>" + item + "</li>")
        });
        $parent.append($restaurantList);
    }
}