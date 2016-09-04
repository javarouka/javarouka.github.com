var RestaurantView;                             //전체 네임스페이스 선언
RestaurantView = {}; 
RestaurantView.data = [                         //네임스페이스 할당
    '매드 포 갈릭',
    '부처스 컷',
    '빕스',
    '바피아노',
    '아웃벡 스테이크'
];
RestaurantView.render = {};                     //네임스페이스 할당

(function (){                                   //캡슐화  
	RestaurantView.render = function($parent) { //외부에서 호출이 가능하게 할당된 변수와 연결
    var $restaurantList = $("<ul></ul>");
    $.each(RestaurantView.data, function(index, item) {
        $restaurantList.append("<li>" + item + "</li>")
    });
    $parent.append($restaurantList);
};
})();