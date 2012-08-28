define(function() {

	var version = "1.0.0";

	var pstring = Object.prototype.toString;

 	var isArray = function(obj) {
		return pstring.apply(obj) === "[object Array]";
 	};

 	var isFunction = function(obj) {
		return (
			pstring.apply(obj) === "[object Function]" && obj.prototype
		);
 	};

 	var isString = function(obj) {
		return pstring.apply(obj) === "[object String]";
 	};

 	var isNumber = function(obj) {
		return pstring.apply(obj) === "[object Number]";
 	};

 	var isDate = function(obj) {
		return pstring.apply(obj) === "[object Date]";
 	}; 

 	var isObject = function(obj) {
		return pstring.apply(obj) === "[object Object]";
 	}; 	

 	var random = function(max, min) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	var falseValueToEmpty = function(v, replace) {
 		if(!v) {
 			return "";
 		}
 		else {	
 			return v;
 		}
 	}

 	var addedProtoypeFunction = function() {
 		if (!isFunction(String.prototype.startsWith)) {
			String.prototype.startsWith = function (str) {
				return this.slice(0, str.length) === str;
			};
		}

		if (!isFunction(String.prototype.endsWith)) {
			String.prototype.endsWith = function (str) {
	 			return this.slice(-str.length) === str;
			};
		}
 	}

 	function init() {
 		addedProtoypeFunction();
 	}

 	init(); 	

	return {
		
		version: version, 

		isObject: isObject,
		isArray: isArray,
		isNumber: isNumber,
		isString: isString,
		isDate: isDate,
		isFunction: isFunction,
		random: random,
		falseValueToEmpty: falseValueToEmpty 
	};

});