define(function() {
	
	var w = window;

	var readyStateMap = [
		{ 
			name: "uninitialized", 
			fn: function(xhr) {} 
		},
		{ 
			name: "loading", 
			fn: function(xhr) {} 
		},
		{ 
			name: "loaded", 
			fn: function(xhr) {} 
		},
		{ 
			name: "interactive", 
			fn: function(xhr) {} 
		},
		{ 
			name: "complete", 
			fn: function(xhr) {
				if(xhr.status === 200) {
					xhr.$s(xhr);
				}
				else {
					xhr.$f({
						error: "",
						xhr: (xhr) ? xhr : undefined,
						code: 1500
					});
				}
			} 
		}
	];
	
	var getXhr = function() {
		var httpRequest;
		if (w.XMLHttpRequest) {
		    httpRequest = new XMLHttpRequest();
		} 
		else if (w.ActiveXObject) {
		    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}
		else {
			throw new Error("ajax not supported");
		}
		return httpRequest;
	};
	
	var setHeader = function(xhr, headers) {
		var k;
		for(k in headers) {
			if(headers.hasOwnProperty(k)) {
				xhr.setRequestHeader(k, headers[k]);
			}
		}
	};
	
	var send = function() {
		
	};
	
	var get = function(option) {
		var xhr = undefined;
		try {
			xhr = getXhr();
			xhr.$s = option.success || function() {};
			xhr.$f = option.failure || function() {};
			xhr.onreadystatechange = function() {
				var m = readyStateMap[xhr.readyState];
				m.fn(xhr);
			};
			if(option.header) {
				setHeader(xhr, option.header);
			}
			xhr.open('GET', option.url, ((option.async === false) ? false : true));
			xhr.send(null);
		}
		catch(err) {
			xhr.$f({
				error: "",
				code: 1500
			});
		}
		finally {
			xhr = null;
		}
	};
	
	var jsonp = function(option) {
		throw new Error("not implements");
	};
	
	var post = function(option) {
		throw new Error("not implements");
	};
		
	return {
		get: get,
		post: post,
		jsonp: jsonp
	};
});