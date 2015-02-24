// 익명 함수를 전역 변수 RestaurantView 할당
// 함수는 first-class object이므로 변수에 할당할 수 있다.
// 이름을 가지는 즉시 실행 함수!
// 이렇게 하면 data 변수와 render 함수의 scope가 괄호 안이 되므로
// 변수명을 변경하지 않아도 사용할 때 충돌되지 않음
var RestaurantView = (function() {
    var data = [
        '매드 포 갈릭',
        '부처스 컷',
        '빕스',
        '바피아노',
        '아웃벡 스테이크'
    ];

    function render($parent) {
        var $restaurantList = $("<ul></ul>");
        $.each(data, function(index, item) {
            $restaurantList.append("<li>" + item + "</li>")
        });
        $parent.append($restaurantList);
    }

    return {
        render : render //'render'함수는 'render'라는 이름으로 호출
    }
    
})(RestaurantView);