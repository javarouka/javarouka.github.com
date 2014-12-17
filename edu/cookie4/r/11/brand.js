/**
 * Created by coupang on 14. 12. 2..
 */
/*
 brand.js와 restaurant.js의 data변수, render 함수의 이름이 겹치기 때문에
 각 변수와 함수를 모듈화 하여 한 변수에 저장
 대규모 형태의 웹에서 글로벌 변수로 데이터를 선언하게되면, 이름 충돌 가능성이 높기 때문에 모듈화가 중요
 모듈화를하게 되면 변수와 함수의 접근제어(PUBLIC,PRIVATE)도 가능
 */

//BrandView 변수에 즉시실행함수를 정의하여 그 안에 data와 render함수 넣음
//이렇게 함으로써 main.js에서 BrandView 가지고 함수 호출 가능

var BrandView = (function() {

    //data와 render는 외부에서 접근 할 수 없는 private
    var data = [
        '레드윙',
        '호킨스',
        '닥터마틴',
        '클락스',
        '버팔로',
        '팀버랜드'
    ];

    var render = function ($parent) {
        var $brandList = $("<ul></ul>");
        $.each(data, function (index, item) {
            $brandList.append("<li>" + item + "</li>")
        });
        $parent.append($brandList);
    };

    //return을 통해서 외부에서 render 접근 가능 (public)
    return{
        render:render
    };
}()
);