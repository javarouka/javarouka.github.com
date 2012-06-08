define(function(){
	
	var head = [ 
	    { key: "name", label: "이름" }, 
	    { key: "gender", label: "성별" }, 
	    { key: "position", label: "포지션" }, 
	    { key: "comment", label: "코멘트" } 
	];
	
	function render(parameters) {
		var appDiv = document.getElementById('app');
		var users = parameters && parameters.users;
		
		var title = document.getElementById('title');
		title.innerHTML = "목록";
		
		/* 
		 * TODO:
		 * 지저분한 HTML 문자열 결합보다, 
		 * DOM API 중 Document DocumentFragment를 사용하여 최적화가 필요한것 같다. 
		 */
		var html = 
			"<table><caption>운영진 정보</caption>" +
			"<thead>" +
			"	<tr>";
		
		for(var i = 0, len = head.length; i < len; i++) {
			html += "<th>" + head[i].label + "</th>";
		}
			"	</tr>" +
			"</thead>" +			
			"<tbody>";	
			
		if(users && users.length) {
			var len = users.length;
			var clsName = '';
			for(var i = 0; i < len; i++) {
				clsName = (i%2 == 0) ? "even" : "odd";
				html += '<tr class=' + clsName + '>';
				for(var o = 0, olen = head.length; o < olen; o++) {
					html += '<td>' + users[i][head[o].key] + '</td>';
				}
				html += '</tr>';
	        }
		}
		html += '</tbody></table>';
		
		appDiv.innerHTML = html;
	}
	
	return {
		render: render
	};
	
});