/*
객체의 속성으로 포함된 함수는 this를 사용해 부모 객체를 참조할 수 있으므로,
이를 이용하여 내부에 함수를 생성 후 자신의 함수를 리턴하는 형태로 객체를 생성하였습니다.
이에 자신의 데이터를 이용하여 render 함수를 사용할 수 있도록 구현하였습니다.
*/
var BrandView = (function(){

    var data = [
        '레드윙',
        '호킨스',
        '닥터마틴',
        '클락스',
        '버팔로',
        '팀버랜드'
    ];

    var render = function($parent){
        var $brandList = $("<ul></ul>");
        $.each(data, function(index, item) {
            $brandList.append("<li>" + item + "</li>")
        });
        $parent.append($brandList);
    };

    return {
        render : render
    };
}());
