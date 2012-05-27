define([
	"me/javarouka/conf/Context"
], 
function(Context) {
	
	var c = window.console;
	
	var getTimeString = function() {
		return '[' + new Date().toString() + '] ';
	}
	
	var debug = function(obj) {
		c.log(getTimeString() + obj);
	};
	
	var info = function(obj) {
		c.log(getTimeString() + obj);
	};
	
	var warning = function(obj) {
		c.log(getTimeString() + obj);
	};
	
	var error = function(obj) {
		c.log(getTimeString() + obj);
	};
	
	var fatal = function(obj) {
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