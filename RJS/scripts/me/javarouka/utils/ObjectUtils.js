define(function() {
	
	var apply = function(orig, ext, notOverride) {
		var k, v;
		for(k in ext) {
			v = ext[k];
			if(v !== undefined) {
				if(!notOverride && (k in orig)) {
					continue;
				}
				orig[k] = ext[k];
			}
		}
		return orig;
	};
	
	var isUndefined = function(val) {
		return typeof val === 'undefined';
	};
	
	var isObject = function(val) {
		return typeof val === 'object';
	};
	
	var isFunction = function(val) {
		return typeof val === 'function';
	};
	
	return {
		apply: apply,
		isUndefined: isUndefined,
		isObject: isObject,
		isFunction: isFunction
	};
	
});