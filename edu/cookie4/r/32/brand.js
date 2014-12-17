/**
 * BrandView
 *  render method를 구분하기 위한 namespace를 구현
 *  data String 배열과 이를 리스트화하는 render 함수가 있음
 *  외부에서 data의 접근을 막음
 * @type {{data: string[], render: render}}
 */

var BrandView = function(){
    var data = [
        '레드윙',
        '호킨스',
        '닥터마틴',
        '클락스',
        '버팔로',
        '팀버랜드'
    ];
    return {
        render: function($parent) {
            var $brandList = $("<ul></ul>");
            $.each(data, function (index, item) {
                $brandList.append("<li>" + item + "</li>");
            });
            $parent.append($brandList);
        }
    }
}();