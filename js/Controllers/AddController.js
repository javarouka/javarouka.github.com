define(["Models/User", "Views/AddView"], function(User, AddView) {
		
	function start() {
		AddView.render();
		bindEvents();
	}

    function bindEvents() {
        document.getElementById('add').addEventListener('click', function(){
            var users = JSON.parse(localStorage.users);
            var userName = document.getElementById('user-name').value;
            users.push(new User(userName));
            localStorage.users = JSON.stringify(users);
            require(['Controllers/ListController'], function(ListController){
                ListController.start();
            });
        }, false);
    }
    
	return {
		start: start
	};
	
});