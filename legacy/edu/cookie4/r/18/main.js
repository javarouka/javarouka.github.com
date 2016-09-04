$(document).ready(function() {

    var brand = $("#brand"); // 브랜드 리스트를 그릴 영역
    var restaurant = $("#restaurant"); // 레스토랑 리스트를 그릴 영역

    // 브랜드 리스트를 그린다
    BrandView.render(brand);

   //  레스토랑 리스트를 그린다
    RestaurantView.render(restaurant);

    //애니메이션 효과를 가져와서 실행한다
    hljs.initHighlightingOnLoad();
        $("#hot-list").toggleClass('x-hide animated lightSpeedIn');
});
