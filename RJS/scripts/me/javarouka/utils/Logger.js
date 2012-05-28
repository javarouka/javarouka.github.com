define([
	"me/javarouka/conf/Context"
], 
function(Context) {
	
	var c = window.console;
	var getTimeString = function() {
		return '[' + new Date().valueOf() + '] ';
	}
	
	var info = function(obj) {
		if(c && c.log) {
			c.log(getTimeString() + obj);
		}
	};
	
	return {
		info: info
	};
	
});