define([
	"me/javarouka/conf/Context"
], 
function(Context) {
	
	var c = window.console;
	var getTimeString = function() {
		return '[' + new Date().valueOf() + '] ';
	}
	
	var info = function(obj) {
		c.log(getTimeString() + obj);
	};
	
	return {
		debug: debug,
		info: info,
		warning: warning,
		error: error,
		fatal: fatal
	};
	
});