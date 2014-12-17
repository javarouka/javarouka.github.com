$(document).ready(function() {

    var $brand = $("#brand"); // 브랜드 리스트를 그릴 영역
    var $restaurant = $("#restaurant"); // 레스토랑 리스트를 그릴 영역

    // 브랜드 리스트를 그린다
    //BrandView.render($brand);
    /*
     * BrandView라는 함수객체를 가진 bv객체를 만들고 render라는 이름을 가진 속성을 불러온다.
     */
	var bv = new BrandView();
	bv.render($brand);
    // 레스토랑 리스트를 그린다
    RestaurantView.render($restaurant);
});
