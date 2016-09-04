/**
 * Created by coupang on 15. 7. 29..
 */
function Navigation(data) {
    this.el = makeMenu(data, 'root');
}

Navigation.prototype.render = function(area) {
    this.area = area;
    area.append(this.el);
};


function makeMenu(categories, groupName) {
    var ul = $("<ul class=" + groupName + "></ul>");
    categories.forEach(function(category) {
        var option = $("<li></li>")
            .attr("id", category.id)
            .text(category.text)
            .data("children", category.children);
        ul.append(option);
    });

    bindEvent(ul);
    return ul;
}
// 서브메뉴를 보여주는 함수. 클릭된 li 에 자식 데이터 속성이 없다면 건너뛴다.
// 이미 그려져 있다면 만들지 않고 보여주기만 한다.
function showSubMenu(target) {
    var childrenData = target.data("children");
    if(!childrenData) {
        return;
    }

    // 기존에 만들어져 있는 서브메뉴가 있는지 검사한다.
    var childrenBox = target.data("childrenBox");
    if(!childrenBox) {
        childrenBox = makeMenu(childrenData, 'sub');

        // 그려진 서브메뉴도 속성에 할당해둬 다음에 재활용.
        target.data("childrenBox", childrenBox);
        target.append(childrenBox);
    }
    else {
        childrenBox.toggle();
    }
    // 기존에 보여지고 있던 서브메뉴는 감춘다.
    $(".sub").not(childrenBox).hide();
}

function bindEvent(ul) {
    ul.find("li").on("click", function(e) {
        var target = $(this);
        showSubMenu(target);
    });
}
