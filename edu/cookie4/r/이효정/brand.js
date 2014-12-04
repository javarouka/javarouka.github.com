var BrandView = (function(){
    //BrandView 를 통해서만 접근 가능한 data
    var data = [
        '레드윙',
        '호킨스',
        '닥터마틴',
        '클락스',
        '버팔로',
        '팀버랜드'
    ];

    //BrandView 에 리턴된 객체를 통해, data 를 rendering 하는 메소드 실행 가능
    return {
        render : function render($parent) {
                    var $brandList = $("<ul></ul>");
                    $.each(data, function(index, item) {
                        $brandList.append("<li>" + item + "</li>")
                    });
                    $parent.append($brandList);
                }
    };
})();
