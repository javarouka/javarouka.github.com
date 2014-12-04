$(document).ready(function() {

	// 토글 스위치 생성
	$("body").prepend('<span id="button" class="label label-info" style="cursor:pointer;" >Click</span>');

	// 토글 스위치를 클릭했을 때 토글 기능 추
	$("#button").click(function() {
			$("div").first().toggle();
		});

    var $brand = $("#brand"); // 브랜드 리스트를 그릴 영역
    var $restaurant = $("#restaurant"); // 레스토랑 리스트를 그릴 영역

    // 브랜드 리스트를 그린다
    BrandView.render($brand);

    // 레스토랑 리스트를 그린다
    RestaurantView.render($restaurant);

    // 애니메이션 추가를 위해 첫 번째 div 요소를 찾고, class 이름을 넣어준다.
    $("div").first().attr('class', 'animated lightSpeedIn');

});
