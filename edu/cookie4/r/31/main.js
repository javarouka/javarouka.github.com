$(document).ready(function() {

    var $brand = $("#brand"); // 브랜드 리스트를 그릴 영역
    var $restaurant = $("#restaurant"); // 레스토랑 리스트를 그릴 영역

    // 브랜드 리스트를 그린다
    BRAND.render($brand); //BRAND라는 네임스페이스의 함수를 불러온다.
 
    // 레스토랑 리스트를 그린다
    RESTAURANT.render($restaurant); //RESTAURANT라는 네임스페이스의 함수를 불러온다.
});
