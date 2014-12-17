// BrandView에 id가 brand인 태그에 태그와 데이터를 append하는 render함수를 실행시킨다.
// Restaurant에 id가 restaurant인 태그에 태그와 데이터를 append하는 render함수를 실행시킨다.
$(document).ready(function() {
    // 브랜드 리스트를 그린다
    BrandView.render($("#brand"));

    // 레스토랑 리스트를 그린다
    Restaurant.render($("#restaurant"));
});