// 클래스 선언(함수를이용)
function RestaurantView(){
var data = [
    '매드 포 갈릭',
    '부처스 컷',
    '빕스',
    '바피아노',
    '아웃벡 스테이크'
];
// render method 
this.render = function($parent) {
    var $restaurantList = $("<ul></ul>");
    $.each(data, function(index, item) {
        $restaurantList.append("<li>" + item + "</li>")
    });
    $parent.append($restaurantList);
};
}