"use strict"

// 전부 오류
eval = 17;
arguments++;
++eval;
var obj = { set p(arguments) { } };
var eval;
try { } catch (arguments) { }
function x(eval) { }
function arguments() { }
var y = function eval() { };
var f = new Function("arguments", "'use strict'; return 17;");

// 특정 스코프에 한정적
function hello() {
  "use strict";
}

// this
function TestFunc() {
  return this;
}
TestFunc(); // 기본은 global, strict 에서는 undefined
