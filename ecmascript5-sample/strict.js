(function() {

  "use strict";

  // 전부 오류
  var eval = 17;
  var arguments = "hello";
  ++eval;
  arguments++;
  function x(eval) { }
  function arguments() { }
  var obj = { x: 1, x: 2 };
  var y = function eval() { };
  var f = new Function("arguments", "'use strict'; return 17;");
  with({ x: 2 }){}
  implictVar = 10;

  // 특정 스코프에 한정적
  function hello() {
    "use strict";
  }

  // this
  function testFunc() {
    return this;
  }
  testFunc(); // 기본은 global, strict 에서는 undefined

})();
