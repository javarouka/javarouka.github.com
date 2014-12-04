function BrandView($parent){
	//data라는 변수 명이 같이 쓰였기 때문에 다른 네임스페이스 영역으로 지정하기 위하여 BrandView라는 함수를 만들어 모듈화하여 
	//data 변수의 영역을 제한하였습니다. 
	//render함수 또한 이름이 겹치기 때문에 BrandView 함수로 감싸 다른 곳의 같은 이름의 함수와 사용영역을 구분 하였습니다.
	var data = [
	    '레드윙',
	    '호킨스',
	    '닥터마틴',
	    '클락스',
	    '버팔로',
	    '팀버랜드'
	];	
	
	function render($parent){
		var $brandList = $("<ul></ul>");
		
		$.each(data, function(index, item){
			$brandList.append("<li>" + item + "</li>");
		});
		$parent.append($brandList);
	}
	
	render($parent);//BrandView함수 안에서 render 함수를 사용 하여야 이름이 겹치지 않으므로 BrandView 함수안에서 
	//render함수를 호출하였습니다.
};