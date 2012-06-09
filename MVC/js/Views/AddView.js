define(function(HTMLLoader) {
	
	/* 
	 * TODO:
	 * 지저분한 HTML 문자열 결합보다, 
	 * DOM API 중 Document DocumentFragment를 사용하여 최적화가 필요한것 같다. 
	 */
	var content = 
		"<fieldset>" +
		"	<ul>" +
		"		<li>" +
		"			<label for='user-name'>이름</label><br/>" +
		"			<input type='text' id='user-name' />" +
		"		</li>" +
		"		<li>" +
		"			<label for='user-gender'>성별</label><br/>" +
		"			<input type='text' id='user-gender' />" +
		"		</li>" +
		"		<li>" +
		"			<label for='user-position'>포지션</label><br/>" +
		"			<input type='text' id='user-position' />" +
		"		</li>" +
		"		<li>" +
		"			<label for='user-comment'>코멘트</label><br/>" +
		"			<textarea id='user-comment'></textarea>" +
		"		</li>" +
		"	</ul>" +
		"	<button id='add'>운영진 추가하기!</button>" + 
		"</fieldset>"; 
	
	function render(parameters) {
		
		var title = document.getElementById('title');
		var appDiv = document.getElementById('app');
		
		title.innerHTML = "추가하기";
		appDiv.innerHTML = content;
			
	}
	
	return {
		render: render
	};
	
});