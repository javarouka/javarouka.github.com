define([
	"jquery",
	"javarouka/Util/ObjectUtil"
], function($, ObjectUtil) {

	var version = "1.0.0";

	var baseAjaxOption = {
		method: "GET",
		data: {},
		success: function(){},
		dataType: "text",
		async: true
	};

	var baseFormOption = {
		formId: 'http-form',
		target: '',
		action: '',
		method: 'GET',
		enctype: 'application/x-www-form-urlencoded'
	};

	var statusHandler = {
		302: function() {},
		500: function() {},
		404: function() {}
	};

	var extendStatusHandler = function(handler) {
		if(!ObjectUtil.isObject(handler)) {
			return;
		}
		statusHandler = $.extend(statusHandler, handler);
	};
	
	return {
		
		version: version,		
		extendStatusHandler: extendStatusHandler,
		send: function(option) {
			option = $.extend($.extend({}, baseAjaxOption), option);
			$.ajax({
				type: option.method || 'POST',
				url: option.url,
				data: option.data,
				success: option.success,
				dataType: option.dataType,
				async: option.async,
				statusCode: statusHandler
			});			
		}
	};
});