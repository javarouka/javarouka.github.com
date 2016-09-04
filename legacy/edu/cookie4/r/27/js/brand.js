var BrandView = {//클래스 생성
    data : [
        '레드윙',
        '호킨스',
        '닥터마틴',
        '클락스',
        '버팔로',
        '팀버랜드'
    ],

    render : function($parent) {
    var $brandList = $("<ul></ul>");
    $.each(this.data, function (index, item) {
        $brandList.append("<li>" + item + "</li>")
    });
    $parent.append($brandList);
}
}