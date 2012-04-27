define(["Persist/Storage", "Models/User", "Views/AddView"], function(Storage, User, AddView) {
	
	function start() {
		AddView.render();
		bindEvents();
	}

    function bindEvents() {
    	var eleAdd = document.getElementById('add');
    	eleAdd.addEventListener('click', function(){
        	var users = Storage.get('users') || [];
        	
            var params = {
            	name: document.getElementById('user-name').value,
            	gender: document.getElementById('user-gender').value,
            	position: document.getElementById('user-position').value,
            	comment: document.getElementById('user-comment').value
            }
            
            users.push(new User(params));
            Storage.add('users', users)
        	
            require(['Controllers/ListController'], function(ListController){
                ListController.start();
            });  
            window.location.hash = "#list";
            
        }, false);
    }
    
	return {
		start: start
	};
	
});