$(document).ready(function() {

    var $brand = $("#brand"); // 브랜드 리스트를 그릴 영역
    var $restaurant = $("#restaurant"); // 레스토랑 리스트를 그릴 영역

    // 브랜드 리스트를 그린다
    BrandView($brand);

    // 레스토랑 리스트를 그린다
    var rv = new RestaurantView();//class 로 작성하였기 때문에 new를 통해 생성하여 메소드를 호출하였습니다.
    rv.render($restaurant);
});
