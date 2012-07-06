define(function() {
	
	var c = window.console;
	var level = {
		DEBUG: "INFO",
		INFO: "INFO",
		WARN: "WARN",
		ERROR: "ERROR"
	};
	
	var getTimeString = function(level) {
		var d = new Date();
		return (
			'['+level+'] '+d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate() + 
			' ' + d.toLocaleTimeString() + ' ### '
		);
	}
	
	var info = function(obj) {
		if(c && c.log) {
			if(typeof obj === 'object') {
				c.dir(getTimeString(level.INFO), obj);
			}
			else {
				c.log(getTimeString(level.INFO), obj);
			}
		}
	};
	
	return {
		info: info
	};
	
});