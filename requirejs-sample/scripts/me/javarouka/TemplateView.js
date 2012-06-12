define([
    "jquery"
], function($) {
	
	return {
		
		render: function(params, callback) {
			callback = callback || function(){ }
			$(params.loadArea).load(params.viewName, callback);
		}
		
	}
});