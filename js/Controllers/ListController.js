define(["Views/ListView"], function(ListView) {
	
	function start() {
		var users = JSON.parse(localStorage.users);
		
		console.log(users);
		
		ListView.render( { users: users } );
	}
	
	return {
		start: start
	};
	
});