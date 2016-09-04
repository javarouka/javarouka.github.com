/* 
배열명 data, 함수명 render가 전역변수로 겹치기 때문에
각자 오브젝트 안에 변수로 넣어주고
각 오브젝트를 선언하여 리스트를 그리는 것으로 수정.
*/ 
var RestaurantView = {
    'data' : [
    '매드 포 갈릭',
    '부처스 컷',
    '빕스',
    '바피아노',
    '아웃벡 스테이크'
    ],

    'render' : function ($parent) {
        var $restaurantList = $("<ul></ul>");
        $.each(this.data, function(index, item) { // each 함수는 잘 모르겠으나 현재 오브젝트의 data를 가져오기 위하여 data를 this.data로 바꿈.
            $restaurantList.append("<li>" + item + "</li>")
        });
        $parent.append($restaurantList);
    }
}