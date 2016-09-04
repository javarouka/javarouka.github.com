/* @file main.js */
$(document).ready(function() {

    var $brand = $("#brand"); // 브랜드 리스트를 그릴 영역
    var $restaurant = $("#restaurant"); // 레스토랑 리스트를 그릴 영역
    
    var bv = new BrandView();

    // 브랜드 리스트를 그린다
//    BrandView.render($brand);
    bv.render($brand);

    // 레스토랑 리스트를 그린다
    render($restaurant);
});