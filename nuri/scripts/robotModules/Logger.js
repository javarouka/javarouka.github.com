define(function() {

	var console = console || function(msg){};

	return {
		log: function(msg) {
			console.log(msg);
		}
	};
	
})