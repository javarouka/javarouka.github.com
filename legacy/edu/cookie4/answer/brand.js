/**
 * Created by Coupang on 2014-11-26.
 */
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
        console.log($parent, data);
        var $brandList = $("<ul></ul>");
        $.each(data, function(index, item) {
            $brandList.append("<li>" + item + "</li>")
        });
        $parent.append($brandList);
    }

    return {
        render: render
    }

})();
