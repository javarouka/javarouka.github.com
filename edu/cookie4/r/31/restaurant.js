var RESTAURANT={}; //RESTAURANT라는 네임스페이스 선


//data와 render라는 변수와 함수를 RESTAURANT라는 네임스페이스로 활용

RESTAURANT. data = [
    '매드 포 갈릭',
    '부처스 컷',
    '빕스',
    '바피아노',
    '아웃벡 스테이크'
];

RESTAURANT.render=function($parent) {
    var $restaurantList = $("<ul></ul>");
    $.each(RESTAURANT.data, function(index, item) { //data가 아닌  RESTAURANT의 data를 활
        $restaurantList.append("<li>" + item + "</li>")
    });
    $parent.append($restaurantList);
};