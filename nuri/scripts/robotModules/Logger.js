define(function() {

	return {
		log: function(msg) {
			console.log(msg);
		},
		error: function(msg, errorCode) {
			errorCode = errorCode || "000";
			console.error(errorCode, msg);
			console.trace();
		}
	};
	
})