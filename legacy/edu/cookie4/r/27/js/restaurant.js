var RestaurantView = {//클래스 생성

    data: [
        '매드 포 갈릭',
        '부처스 컷',
        '빕스',
        '바피아노',
        '아웃벡 스테이크'
    ],

    render: function ($parent) {
        var $restaurantList = $("<ul></ul>");
        $.each(this.data, function (index, item) {
            $restaurantList.append("<li>" + item + "</li>")
        });
        $parent.append($restaurantList);
    }
}