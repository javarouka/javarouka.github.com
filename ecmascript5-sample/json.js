// 문자열.
var jsonString = "{ \"key\":\"value\" }";

// eval 사용
var case1 = eval("("+jsonString+")");

// 동적 함수 사용
var converter = new Function(" return " + jsonString + "; ");
var case2 = converter();

// ecmascript 5
var case3 = JSON.parse(jsonString);

// 문자열화 - 속성을 열거하면서 직접 구현해야만 했다!
var serialize = function(obj) {
  //https://github.com/douglascrockford/JSON-js/blob/master/json2.js
  // implements...
};

// 초간단.
jsonString = JSON.stringify(case3);