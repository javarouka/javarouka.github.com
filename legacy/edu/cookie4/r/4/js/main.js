$(document).ready(function() {

    var $brand = $("#brand"); // 브랜드 리스트를 그릴 영역
    var $restaurant = $("#restaurant"); // 레스토랑 리스트를 그릴 영역

	// 브랜드 리스트를 그린다
    var bv = new BrandView(); // 객체를 생성함.
    bv.render($brand); // BrandView의 render call
	
    // 레스토랑 리스트를 그린다
    var bv = new RestaurantView();
    bv.render($restaurant); // RestaurantView의 render call
    
});