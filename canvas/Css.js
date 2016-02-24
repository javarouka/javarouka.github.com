'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Css = function () {
	function Css() {
		_classCallCheck(this, Css);
	}

	_createClass(Css, null, [{
		key: 'margin',
		value: function margin(style) {
			var marginL = 0,
			    marginR = 0,
			    marginT = 0,
			    marginB = 0,
			    v = undefined;
			var rect = style._margin || (style._margin = []);
			if (v = style.margin) {
				if (typeof v == 'number') marginT = marginB = marginR = marginL = v;else {
					v = v.split(' ');
					v.forEach(function (val, i) {
						return v[i] = parseFloat(val);
					});
					if (v.length == 2) marginT = marginB = v[0], marginR = marginL = v[1];else if (v.length == 4) marginT = v[0], marginR = v[1], marginB = v[2], marginL = v[3];
				}
			}
			if (v = style.marginLeft) marginL = v;
			if (v = style.marginRight) marginR = v;
			if (v = style.marginTop) marginT = v;
			if (v = style.marginBottom) marginB = v;
			rect[0] = marginT, rect[1] = marginR, rect[2] = marginB, rect[3] = marginL;
			return rect;
		}
	}, {
		key: 'size',
		value: function size(style, parentWidth, parentHeight) {
			if ('width' in style) {}
		}
	}]);

	return Css;
}();
