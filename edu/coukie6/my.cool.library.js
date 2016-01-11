(function(exports) {

    'use strict';

    var truthly = function(val) {
        return !!val
    };

    var doWhen = function(condition, action) {
    return truthly(condition) ? action() : false;
    };

    var isEmpty = function(val) {
        return !truthly(val) || val === "" || val.length;
    };

    var isFunction = function(val) {

    };

    var isNumber = function(val) {

    };

    var isString = function(val) {

    };

    var isArray = function(val) {

    };

    var isBoolean = function(val) {

    };

    exports.doWhen = doWhen;
    exports.truthly = truthly;

})(
    (typeof module !== 'undefined' && module.exports) ? module.exports : window.coolLibrary
);