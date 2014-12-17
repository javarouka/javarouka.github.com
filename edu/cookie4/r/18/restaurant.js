/*  main.js에서 변수로 사용되는 RestaurantView를 생성하고
 data와 render()함수를 내부에 넣어서 범위(scope)를 함수 내부로 한정한다*/
var RestaurantView = new function(){
this.data = [
    '매드 포 갈릭',
    '부처스 컷',
    '빕스',
    '바피아노',
    '아웃벡 스테이크'
];


this.render = function($parent) {
    var $restaurantList = $("<ul></ul>");
    $.each(this.data, function(index, item) {
        $restaurantList.append("<li>" + item + "</li>")
    });
    $parent.append($restaurantList);
};
}