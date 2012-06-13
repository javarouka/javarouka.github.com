define([
    "jquery"
], function($) {
	
	return {
		
		render: function(params, callback) {
			callback = callback || function(){ }
			$(params.loadArea)
				.empty()
				.load(params.viewName, callback);
		}
		
	}
});