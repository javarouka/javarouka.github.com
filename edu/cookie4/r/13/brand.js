/* 
배열명 data, 함수명 render가 전역변수로 겹치기 때문에
각자 오브젝트 안에 변수로 넣어주고
각 오브젝트를 선언하여 리스트를 그리는 것으로 수정.
*/ 
var BrandView = {
    'data' : [
    '레드윙',
    '호킨스',
    '닥터마틴',
    '클락스',
    '버팔로',
    '팀버랜드'
    ],

    'render' : function ($parent) {
        var $brandList = $("<ul></ul>");
        $.each(this.data, function(index, item) { // each 함수는 잘 모르겠으나 현재 오브젝트의 data를 가져오기 위하여 data를 this.data로 바꿈.
            $brandList.append("<li>" + item + "</li>")
        });
        $parent.append($brandList);
    }
}