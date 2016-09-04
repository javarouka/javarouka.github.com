/**
 * RestaurantView
 *  render method를 구분하기 위한 namespace를 구현
 *  data String 배열과 이를 리스트화하는 render 함수가 있음
 *  외부에서 data의 접근을 막음
 * @type {{data: string[], render: render}}
 */

var RestaurantView = function(){
    var data = [
        '매드 포 갈릭',
        '부처스 컷',
        '빕스',
        '바피아노',
        '아웃벡 스테이크'
    ];
    return {
        render: function ($parent) {
            var $restaurantList = $("<ul></ul>");
            $.each(data, function (index, item) {
                $restaurantList.append("<li>" + item + "</li>")
            });
            $parent.append($restaurantList);
        }
    }
}();