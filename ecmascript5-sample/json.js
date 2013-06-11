(function() {

  // 문자열.
  var jsonString = "{ \"key\":\"value\" }";

  // eval 사용
  var case1 = eval("("+jsonString+")");
  console.log("case1", case1);

  // 동적 함수 사용
  var converter = new Function(" return " + jsonString + "; ");
  var case2 = converter();
  console.log("case2", case2);

  // ecmascript 5
  var case3 = JSON.parse(jsonString);
  console.log("case3", case3);

  // 문자열화 - 속성을 열거하면서 직접 구현해야만 했다!
  var serialize = function(obj) {
    //https://github.com/douglascrockford/JSON-js/blob/master/json2.js
    // implements...
  };

  // 초간단.
  jsonString = JSON.stringify(case3);

  console.log("json string", jsonString);

})();