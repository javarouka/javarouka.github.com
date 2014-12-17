var RestaurantView = (function(){
    //RestaurantView에서만 접근 가능한 data
    var data = [
        '매드 포 갈릭',
        '부처스 컷',
        '빕스',
        '바피아노',
        '아웃벡 스테이크'
    ]; 
    
    //RestaurantView 에 리턴된 객체를 통해, data render 메소드를 실행 할 수 있음
    return {
        render : function render($parent) {
                    var $restaurantList = $("<ul></ul>");
                    $.each(data, function(index, item) {
                        $restaurantList.append("<li>" + item + "</li>")
                    });
                    $parent.append($restaurantList);
                }
    };         
})();
