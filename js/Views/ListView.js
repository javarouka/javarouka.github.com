define(function(){
	
	function render(parameters) {
		var appDiv = document.getElementById('app');
		var users = parameters.users;
		
		var html = '<ul>',
			len = users.length;
		for(var i = 0; i < len; i++) {
            html += '<li>' + users[i].name + '</li>';
        }
		appDiv.innerHTML = html;
	}
	
	return {
		render: render
	};
	
});