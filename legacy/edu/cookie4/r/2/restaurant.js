var RestaurantView = {};
// 모듈화를 위해 네임스페이스를 위한 빈 객체 하나를 만들어준다.

// 객체에 데이터 추가.
RestaurantView.data = [
    '매드 포 갈릭',
    '부처스 컷',
    '빕스',
    '바피아노',
    '아웃벡 스테이크'
];

// 객체에 render 함수 추가.
RestaurantView.render = function($parent) {
    var $restaurantList = $("<ul></ul>");
    $.each(RestaurantView.data, function(index, item) {
        $restaurantList.append("<li>" + item + "</li>")
    });
    $parent.append($restaurantList);
}