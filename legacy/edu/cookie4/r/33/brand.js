//모듈화를 위해 새로 var 선언
var BrandView = {
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
        $.each(this.data, function(index, item) {
            $brandList.append("<li>" + item + "</li>")
        });
        $parent.append($brandList);
    }
}