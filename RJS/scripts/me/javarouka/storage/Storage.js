define([
    "jquery",
	"me/javarouka/conf/Context",
	"me/javarouka/utils/Logger"
], 
function($, Context, Logger) {
	
	var st = Context.storage;
	var local = window[st.local];
	var session = window[st.session];
	
	var add = function(key, val) {
		if(key) {
			val = (val) ? JSON.stringify(val) : undefined; 
		}
		local.setItem(key, val);
	}
	
	var get = function(key) {
		var item = local.getItem(key);
		console.log(item);
		if(item) {	
			return $.parseJSON(item);
		}
		return [];
	}
	
	var remove = function(key) {
		if(key) {
			local.removeItem(key);
		}
	}
	
	return {
		add: add,
		get: get,
		remove: remove
	}
});