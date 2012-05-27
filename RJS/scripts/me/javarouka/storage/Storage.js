define([
	"me/javarouka/conf/Context",
	"me/javarouka/utils/Logger"
], 
function(Context, Logger) {
	
	var st = Context.storage;
	var storage = window[st.type];
	
	var set = function(key, value) {
		
	};
	
	return {
		set: set
	};
	
});