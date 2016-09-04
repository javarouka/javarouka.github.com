// named nction expression으로 RestaurantView를 선언하여 variable에 function을 대입하여 객체화
var RestaurantView = new function() {
    
    //function의 객체화를 통해 this레퍼런스가 생성되었으므로 this를 이용하여 명시적으로 
    // data와 render가 RestaurantView의 member임을 알린다.(~Windows에 넘어가 namespace가 중복될 수도 있으므로)
    this.data = [
        '매드 포 갈릭',
        '부처스 컷',
        '빕스',
        '바피아노',
        '아웃벡 스테이크'
    ];

    this.render = function($parent){
        var $restaurantList = $("<ul></ul>");
    
        $.each(this.data, function(index, item) {
            $restaurantList.append("<li>" + item + "</li>")
        });
    
        $parent.append($restaurantList);
    }
}