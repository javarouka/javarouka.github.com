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