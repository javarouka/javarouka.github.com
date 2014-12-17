/**
 * @author Coupang
 */
/* @file main.js */
$(document).ready(function() {

    var $brand = $("#brand"); // 브랜드 리스트를 그릴 영역
    var $restaurant = $("#restaurant"); // 레스토랑 리스트를 그릴 영역

    // 브랜드 리스트를 그린다
    // ?
    BrandView($brand); //각자 그릴 영역에 대한 오브젝트를 넘김
    RestaurantView($restaurant);   
    // ?
});
