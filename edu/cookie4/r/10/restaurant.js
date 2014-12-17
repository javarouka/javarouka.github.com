var RestaurantView = {};

RestaurantView.data = [
    '매드 포 갈릭',
    '부처스 컷',
    '빕스',
    '바피아노',
    '아웃벡 스테이크'
];
//RestaurantView에 data를 할당해 중복을 피한다.

RestaurantView.render = function($parent) {
    var $restaurantList = $("<ul></ul>");
    $.each(RestaurantView.data, function(index, item) {
        $restaurantList.append("<li>" + item + "</li>")
    });
    $parent.append($restaurantList);
}