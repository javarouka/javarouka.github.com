$(document).ready(function() {

    var $brand = $("#brand"); // 브랜드 리스트를 그릴 영역 
    							//ID brand 선택
    var $restaurant = $("#restaurant"); // 레스토랑 리스트를 그릴 영역
    							//ID restaurant 선택


    // 브랜드 리스트를 그린다
    BrandView.render($brand);

    // 레스토랑 리스트를 그린다
    RestaurantView.render($restaurant);
});
