$(document).ready(function() {
	// 애니메이션 사용 위해 HTML 파일의 head 부분에 css 를 링크
	$('head').append('<link rel=\"stylesheet\" href="\./animate.css"\>');
	
    var $brand = $("#brand"); // 브랜드 리스트를 그릴 영역
    var $restaurant = $("#restaurant"); // 레스토랑 리스트를 그릴 영역

    // 브랜드 리스트를 그린다
    BrandView.render($brand);

    // 레스토랑 리스트를 그린다
    RestaurantView.render($restaurant);
    
    // 애니메이션 효과 사용을 위해 body 요소에 class 이름 추가
    $('body').addClass("animated lightSpeedIn");
});
