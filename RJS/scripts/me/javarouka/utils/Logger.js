define([
	"me/javarouka/conf/Context"
], 
function(Context) {
	
	var c = window.console;
	
	var debug = function(obj) {
		c.log(obj);
	};
	
	var info = function(obj) {
		c.log(obj);
	};
	
	var warning = function(obj) {
		c.log(obj);
	};
	
	var error = function(obj) {
		c.log(obj);
	};
	
	var fatal = function(obj) {
		c.log(obj);
	};
	
	return {
		debug: debug,
		info: info,
		warning: warning,
		error: error,
		fatal: fatal
	};
	
});