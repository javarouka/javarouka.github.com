// 익명 함수를 전역 변수 BrandView에 할당
// 함수는 first-class object이므로 변수에 할당할 수 있다.
// 이름을 가지는 즉시 실행 함수!
// 이렇게 하면 data 변수와 render 함수의 scope가 괄호 안이 되므로
// 변수명을 변경하지 않아도 사용할 때 충돌되지 않음
var BrandView = (function() {
    var data = [
        '레드윙',
        '호킨스',
        '닥터마틴',
        '클락스',
        '버팔로',
        '팀버랜드'
    ];

    function render($parent) {
        var $brandList = $("<ul></ul>");
        $.each(data, function(index, item) {
            $brandList.append("<li>" + item + "</li>")
        });
        $parent.append($brandList);
    }

    return {
        render : render //'render'함수는 'render'라는 이름으로 호출
    }
})(BrandView);
