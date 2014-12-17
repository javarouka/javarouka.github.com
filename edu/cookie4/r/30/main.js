$(document).ready(function() {

    var $brand = $("#brand"); // 브랜드 리스트를 그릴 영역
    var $restaurant = $("#restaurant"); // 레스토랑 리스트를 그릴 영역

    //brand와 restaurant를 모듈화하였기 때문에 새로운 변수 brandClass에 초기화하여줍니다.
    var brandClass = new brand();
    //restaurant를 모듈화하였기 때문에 새로운 변수 restaurantClass에 초기화하여줍니다.
    var restaurantClass = new restaurant();

    // 브랜드 리스트를 그린다
    brandClass.render($brand);
    
    // 브랜드 리스트에 애니메이션을 추가
    $brand.animate({
        marginLeft:"500",
    },0,'easeOutElastic', function(){
        $(this).animate({
            marginLeft:"0"},3000,'easeOutElastic')
    });

    // 레스토랑 리스트를 그린다
    restaurantClass.render($restaurant);
    
    // 브랜드 리스트에 애니메이션을 추가
    $restaurant.animate({
        marginLeft:"500",
    },0,'easeOutElastic', function(){
        $(this).animate({
            marginLeft:"0"},3000,'easeOutElastic')
    });
});
