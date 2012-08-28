define([ "jquery" ], function($) {
	
	var local = window.localStorage;
	
	var add = function(key, val, isRaw) {
		if(key && !isRaw) {
			val = (val) ? JSON.stringify(val) : undefined; 
		}
		local.setItem(key, val);
	};
	
	var get = function(key, isRaw) {
		var item = local.getItem(key);
		if(item) {	
			return (isRaw) ? item : $.parseJSON(item);
		}
		return null;
	};
	
	var remove = function(key) {
		if(key) {
			local.removeItem(key);
		}
	};

	var clear = function() {

	};
	
	return {
		add: add,
		get: get,
		remove: remove,
		clear: clear
	};
	
});