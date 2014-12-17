
$(document).ready(function() {

    var $brand = $("#brand"); // 브랜드 리스트를 그릴 영역
    var $restaurant = $("#restaurant"); // 레스토랑 리스트를 그릴 영역

    // 브랜드 리스트를 그린다
    BrandView.render($brand);
    // 레스토랑 리스트를 그린다
    RestaurantView.render($restaurant);
    // 렌더링이 끝난 후 animate.css를 이용하여 애니메이션을 적용한다
    $(".toggle").toggleClass('animated lightSpeedIn');
});



