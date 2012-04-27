/**
 * localStorage 기반 데이터 저장소
 */
define(function() {
	
	var global = window;
	var lStorage = global.localStorage;
	var J = JSON;
	
	var add = function(key, val) {
		if(key) {
			val = (val) ? J.stringify(val) : undefined; 
		}
		lStorage.setItem(key, val);
	}
	
	var get = function(key) {
		var item = lStorage.getItem(key);
		if(item) {			
			return J.parse(item);
		}
		return [];
	}
	
	var remove = function(key) {
		if(key) {
			lStorage.removeItem(key);
		}
	}
	
	return {
		add: add,
		get: get,
		remove: remove
	}
	
});