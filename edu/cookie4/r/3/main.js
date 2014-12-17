$(document).ready(function() {

    var $brand = $("#brand"); // 브랜드 리스트를 그릴 영역
    var $restaurant = $("#restaurant"); // 레스토랑 리스트를 그릴 영역



    // 브랜드 리스트를 그린다
    BrandView.render($brand);


    // 레스토랑 리스트를 그린다
    RestaurantView.render($restaurant);

    $('.answer').toggleClass('x-hide animated lightSpeedIn');
    //브랜드와 레스토랑 리스트는 최초에 x-hide class css를 통해 숨겨져 있고, data가 다 rendering 되면
    //x-hide class를 토글 시켜서 없애고, animated와 lightSpeedIn class를 토글 시켜 추가함으로써 애니메이션 효과를 넣음..
});
