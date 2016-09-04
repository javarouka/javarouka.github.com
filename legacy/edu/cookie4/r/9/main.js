/**
 * @author Coupang

 */
/* @file main.js */
$(document).ready(function() {

	var $brand = $("#brand");
	// 브랜드 리스트를 그릴 영역
	var $restaurant = $("#restaurant");
	// 레스토랑 리스트를 그릴 영역

	// 브랜드 리스트를 그린다
	BrandData.render($brand); 
	// brands.js에서 BrandData 객체의 메쏘드를 호출해 리스트를 그림.

	// 레스토랑 리스트를 그린다
	RestaurantData.render($restaurant);
	// restaurant.js에서 RestaurantData 객체의 메쏘드를 호출해 리스트를 그림.
	$brand.show().fadeIn("slow");
	$("#restaurant").toggleClass('x-hide animated lightSpeedIn');
	

});
