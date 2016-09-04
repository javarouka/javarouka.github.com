/**
 * LocalStorage를 사용한 스토리지 모듈
 * 
 * @dependency jQuery
 */
define([
    "jquery"
], 
function($) {
	
	var local = window.localStorage;
	
	var add = function(key, val) {
		if(key) {
			val = (val) ? JSON.stringify(val) : undefined; 
		}
		local.setItem(key, val);
	}
	
	var get = function(key) {
		var item = local.getItem(key);
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