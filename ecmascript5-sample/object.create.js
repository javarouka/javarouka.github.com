(function() {

//  // ES 3
//  var es3 = {};
//  console.log(typeof es3.toString === "function");
//
//  // ES5 Pure Object
//  var es5 = Object.create(null);
//  console.log(typeof es5.toString === "function");
//  console.log(es5 instanceof Object);
//
//  return;



  // ES5 object를 프로토타입으로 하여 생성
  es5 = Object.create(Object.prototype);
  console.log(typeof es5.toString === "function");
  console.log(es5 instanceof Object);

  // 차이점?
  Object.create({});
  Object.create(Object.prototype);

})();