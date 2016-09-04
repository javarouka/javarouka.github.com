'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var V = function () {
	var v = undefined;
	//범용 에러정의
	var ERROR = Object.defineProperties({}, {
		isMandatory: { value: function value(_ref) {
				var location = _ref.location;
				var details = _ref.details;
				//필수인자누락시 발생
				throw new Error('Argument is Mandatory:' + location + '(' + details + ')');
			} }
	});
	var STOP_PROPAGATION = Symbol(); //그 이벤트가 도중에 정지되는 경우를 감지하기 위한 속성
	var EVENT = Symbol(),
	    LISTENER = Symbol(),
	    ONMEASURE = Symbol(),
	    ONOFFSET = Symbol(),
	    ONDRAW = Symbol(),
	    _ONDRAW = Symbol();
	var CHILDREN = Symbol(),
	    _CHILDREN = Symbol();
	var BOUNDRECT = Symbol(),
	    STYLE = Symbol();
	//범용 이벤트
	var Event = function () {
		function Event(target) {
			_classCallCheck(this, Event);

			//생성시점에 target을 읽기전용으로 확정함
			Object.defineProperty(this, 'target', { value: this });
		}

		_createClass(Event, [{
			key: 'init',
			value: function init(eventType) {
				this.type = eventType; //디스패치할 이벤트로 타입을 정하고
				this[STOP_PROPAGATION] = false; //전파를 초기함
				return this;
			}
		}, {
			key: 'stopPropagation',
			value: function stopPropagation() {
				//전파중지시 체크
				this[STOP_PROPAGATION] = true;
			}
		}, {
			key: 'isStopPropagation',
			get: function get() {
				return this[STOP_PROPAGATION];
			}
		}]);

		return Event;
	}();
	var Style = function Style() {
		_classCallCheck(this, Style);
	};
	var Paint = function () {
		function Paint(width, height) {
			_classCallCheck(this, Paint);

			this.width = width;
			this.height = height;
		}

		_createClass(Paint, [{
			key: 'setBound',
			value: function setBound(_ref2) {
				var x = _ref2.x;
				var y = _ref2.y;
				var width = _ref2.width;
				var height = _ref2.height;

				this._bound(x, y, width, height);
			}
		}, {
			key: 'startDraw',
			value: function startDraw(display) {
				this._startDraw(display);
			}
		}, {
			key: 'endDraw',
			value: function endDraw(display) {
				this._endDraw(display);
			}
		}, {
			key: 'drawImage',
			value: function drawImage(display) {
				this._drawImage(display);
			}
		}, {
			key: 'drawRect',
			value: function drawRect(display) {
				this._drawRect(display);
			}
		}, {
			key: 'reset',
			value: function reset() {
				this._reset();
			}
		}]);

		return Paint;
	}();
	var CanvasStyle = function () {
		function CanvasStyle() {
			_classCallCheck(this, CanvasStyle);
		}

		_createClass(CanvasStyle, null, [{
			key: 'background',
			value: function background(cx, style, width, height) {
				if (!style || !style.backgroundColor) return;
				cx.fillStyle = style.backgroundColor;
				cx.fillRect(0, 0, width, height);
			}
		}, {
			key: 'stroke',
			value: function stroke(cx, style, width, height) {
				var t0 = undefined;
				if (!style || !style.border || (t0 = style.border.split(/\s+/)).length != 2) return;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = t0[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var t1 = _step.value;

						if (t1.match(/(\d+)/)) cx.lineWidth = parseFloat(t1);else cx.strokeStyle = t1;
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				cx.strokeRect(0, 0, width, height);
			}
		}]);

		return CanvasStyle;
	}();
	var Canvas = function (_Paint) {
		_inherits(Canvas, _Paint);

		function Canvas(canvas) {
			_classCallCheck(this, Canvas);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Canvas).call(this, canvas.width, canvas.height));

			_this.cx = canvas.getContext('2d');
			return _this;
		}

		_createClass(Canvas, [{
			key: '_bound',
			value: function _bound(x, y, width, height) {
				this.cx.save();
				this.cx.translate(x, y);
				this.elWidth = width;
				this.elHeight = height;
			}
		}, {
			key: '_startDraw',
			value: function _startDraw(display) {
				this.setBound(display.getBoundRect());
			}
		}, {
			key: '_endDraw',
			value: function _endDraw(display) {
				this.cx.restore();
			}
		}, {
			key: '_drawImage',
			value: function _drawImage(display) {
				CanvasStyle.background(this.cx, display.style, this.elWidth, this.elHeight);
				this.cx.drawImage(display.img, 0, 0, this.elWidth, this.elHeight);
				CanvasStyle.stroke(this.cx, display.style, this.elWidth, this.elHeight);
			}
		}, {
			key: '_drawRect',
			value: function _drawRect(display) {
				CanvasStyle.background(this.cx, display.style, this.elWidth, this.elHeight);
				CanvasStyle.stroke(this.cx, display.style, this.elWidth, this.elHeight);
			}
		}, {
			key: '_reset',
			value: function _reset() {
				this.cx.clearRect(0, 0, this.width, this.height);
			}
		}]);

		return Canvas;
	}(Paint);
	var paints = { Canvas: Canvas };
	var Stage = function () {
		function Stage(type, param) {
			_classCallCheck(this, Stage);

			this.paint = new paints[type](param);
			this.root = new DisplayContainer();
		}

		_createClass(Stage, [{
			key: 'addChild',
			value: function addChild(display) {
				this.root.addChild(display);
			}
		}, {
			key: 'removeChild',
			value: function removeChild(display) {
				this.root.removeChild(display);
			}
		}, {
			key: 'getChildAt',
			value: function getChildAt(index) {
				this.root.getChildAt(index);
			}
		}, {
			key: 'getChildById',
			value: function getChildById(id) {
				this.root.getChildById(id);
			}
		}, {
			key: 'render',
			value: function render() {
				var _root$Display$onMeasu = this.root[Display.onMeasure](this.paint.width, this.paint.height);

				var width = _root$Display$onMeasu.width;
				var height = _root$Display$onMeasu.height;

				this.root.setSize(width, height);
				this.root.setOffset(0, 0);
				this.paint.reset();
				this.root[_ONDRAW](this.paint);
			}
		}]);

		return Stage;
	}();
	var Display = function () {
		var uuid = 0,
		    bound = {};
		return function () {
			_createClass(_class, null, [{
				key: 'onDraw',
				get: function get() {
					return ONDRAW;
				}
			}, {
				key: 'onMeasure',
				get: function get() {
					return ONMEASURE;
				}
			}, {
				key: 'onOffset',
				get: function get() {
					return ONOFFSET;
				}
			}]);

			function _class(isBlock) {
				var _Object$definePropert;

				_classCallCheck(this, _class);

				Object.defineProperties(this, (_Object$definePropert = {
					id: { value: uuid++ },
					isBlock: { value: isBlock }
				}, _defineProperty(_Object$definePropert, EVENT, { value: new Event(this) }), _defineProperty(_Object$definePropert, LISTENER, { value: {} }), _defineProperty(_Object$definePropert, BOUNDRECT, { value: {} }), _defineProperty(_Object$definePropert, 'style', { value: new Style() }), _Object$definePropert));
			}

			_createClass(_class, [{
				key: 'dispatch',
				value: function dispatch(event) {
					var listeners = undefined; //그 안에서 리스너셋 및 이벤트 객체를 가져옴
					if (listeners = this[LISTENER][event]) {
						var ev = this[EVENT].init(event);
						var _iteratorNormalCompletion2 = true;
						var _didIteratorError2 = false;
						var _iteratorError2 = undefined;

						try {
							for (var _iterator2 = listeners[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
								var listener = _step2.value;

								listener(ev); //리스너를 차례로 콜하다가
								if (ev.isStopPropagation) return; //전파중지되면 중지
							}
						} catch (err) {
							_didIteratorError2 = true;
							_iteratorError2 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion2 && _iterator2.return) {
									_iterator2.return();
								}
							} finally {
								if (_didIteratorError2) {
									throw _iteratorError2;
								}
							}
						}
					}
				}
				//리스너가 지정되지 않으면 기본값발동으로 인해 예외를 발생시키고 죽어버림

			}, {
				key: 'addListener',
				value: function addListener(event, listener) {
					var listeners = this[LISTENER][event] || (this[LISTENER][event] = new Set()); //해당 이벤트 명으로 아직 등록한적이 없으면 set을 생성
					listeners.add(listener); //거기에 추가함. set은 알아서 중복된 객체를 무시하는 기능이 있음
				}
			}, {
				key: 'removeListener',
				value: function removeListener(event) {
					var listener = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
					//리스너를 안주면 해당 이벤트를 다 날림
					var listeners = this[LISTENER][event];
					if (listeners) listener ? listeners.delete(listener) : listeners.clear(); //해당 리스너를 지우거나 다 날림
				}
			}, {
				key: 'setOffset',
				value: function setOffset(x, y) {
					this[BOUNDRECT].x = x, this[BOUNDRECT].y = y;
				}
			}, {
				key: 'setSize',
				value: function setSize(width, height) {
					this[BOUNDRECT].width = width, this[BOUNDRECT].height = height;
				}
			}, {
				key: 'getBoundRect',
				value: function getBoundRect() {
					var rect = this[BOUNDRECT];
					if (!this.style._margin) return rect;
					bound.x = rect.x + this.style._margin[3];
					bound.y = rect.y + this.style._margin[0];
					bound.width = rect.width;
					bound.height = rect.height;
					return bound;
				}
			}, {
				key: _ONDRAW,
				value: function value(paint) {
					paint.startDraw(this);
					this[ONDRAW](paint);
					paint.endDraw(this);
				}
			}, {
				key: ONDRAW,
				value: function value(paint) {}
			}]);

			return _class;
		}();
	}();
	var DisplayContainer = function (_Display) {
		_inherits(DisplayContainer, _Display);

		function DisplayContainer(isBlock) {
			var _Object$definePropert2;

			_classCallCheck(this, DisplayContainer);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayContainer).call(this, isBlock));

			Object.defineProperties(_this2, (_Object$definePropert2 = {}, _defineProperty(_Object$definePropert2, CHILDREN, { value: [] }), _defineProperty(_Object$definePropert2, _CHILDREN, { value: new Map() }), _Object$definePropert2));
			return _this2;
		}

		_createClass(DisplayContainer, [{
			key: 'addChild',
			value: function addChild(display) {
				if (!(display instanceof Display)) return;
				this.removeChild(display);
				this[_CHILDREN][display.id] = display;
				this[CHILDREN].push(display);
			}
		}, {
			key: 'removeChild',
			value: function removeChild(display) {
				if (!(display instanceof Display) || !this[_CHILDREN][display.id]) return;
				this[_CHILDREN].delete(display.id);
				this[CHILDREN].splice(this[CHILDREN].indexOf(display), 1);
			}
		}, {
			key: 'getChildAt',
			value: function getChildAt(index) {
				return this[CHILDREN].length <= index ? null : this[CHILDREN][index];
			}
		}, {
			key: 'getChildById',
			value: function getChildById(id) {
				return this[_CHILDREN][display.id] || null;
			}
		}, {
			key: _ONDRAW,
			value: function value(paint) {
				_get(Object.getPrototypeOf(DisplayContainer.prototype), _ONDRAW, this).call(this, paint);
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = this[CHILDREN][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var child = _step3.value;
						child[_ONDRAW](paint);
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			}
		}, {
			key: ONMEASURE,
			value: function value(parentWidth, parentHeight) {
				//overflow처리를 위해서는 totalW관련 처리를 통해 인지해야함
				var totalH = 0,
				    lineW = 0,
				    lineH = 0;
				Css.size(this.style, parentWidth, parentHeight);
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = this[CHILDREN][Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var child = _step4.value;

						var _child$Display$onMeas = child[Display.onMeasure](parentWidth, 0);

						var width = _child$Display$onMeas.width;
						var height = _child$Display$onMeas.height;

						child.setSize(width, height);

						var _Css$margin = Css.margin(child.style);

						var _Css$margin2 = _slicedToArray(_Css$margin, 4);

						var marginT = _Css$margin2[0];
						var marginR = _Css$margin2[1];
						var marginB = _Css$margin2[2];
						var marginL = _Css$margin2[3];

						width += marginL + marginR;
						height += marginB + marginT;
						if (child.isBlock) {
							if (lineH) {
								totalH += lineH;
								lineH = lineW = 0;
							}
							child.setOffset(0, totalH);
							totalH += height;
						} else {
							var offsetX = lineW;
							if (lineW + width > parentWidth) {
								if (lineH) {
									totalH += lineH;
									lineH = lineW = 0;
								}
								lineW = width;
								lineH = height;
							} else {
								lineW += width;
								if (lineH < height) lineH = height;
							}
							child.setOffset(offsetX, totalH);
						}
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}

				if (lineH) totalH += lineH;
				switch (this.style.textAlign) {
					case 'right':
						var i = this[CHILDREN].length,
						    j = parentWidth;
						while (i--) {
							var c = this[CHILDREN][i],
							    rect = c[BOUNDRECT];
							rect.x = j -= rect.width + c.style._margin[1] + c.style._margin[3];
						}
						break;
					case 'justify': //이후구현
				}
				return { width: parentWidth, height: totalH };
			}
		}]);

		return DisplayContainer;
	}(Display);
	return v = {
		Event: Event, Display: Display, DisplayContainer: DisplayContainer, Stage: Stage,
		spread: function spread() {
			for (var k in v) {
				window[k] = v[k];
			}
		}
	};
}();
