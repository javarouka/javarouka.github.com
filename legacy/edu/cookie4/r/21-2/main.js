$(document).ready(function() {

    var $brand = $("#brand"); // 브랜드 리스트를 그릴 영역
    var $restaurant = $("#restaurant"); // 레스토랑 리스트를 그릴 영역

	var BrandView = new Brand();	//객체화 시켰기때문에 객체 생성
	var RestaurantView = new Restaurant();		//객체화 시켰기때문에 객체 생성

    // 브랜드 리스트를 그린다
    BrandView.render($brand);

    // 레스토랑 리스트를 그린다
    RestaurantView.render($restaurant);
});
