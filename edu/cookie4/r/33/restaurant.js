//모듈화를 위해 새로 var 선언
var RestaurantView = {
    data : [
        '매드 포 갈릭',
        '부처스 컷',
        '빕스',
        '바피아노',
        '아웃벡 스테이크'
    ],

    render : function($parent) {
        var $restaurantList = $("<ul></ul>");
        $.each(this.data, function(index, item) {
            $restaurantList.append("<li>" + item + "</li>")
        });
        $parent.append($restaurantList);
    }
}