(function() {

  var obj = {
    octo: "cat"
  };
  Object.isExtensible(obj); // true
  var o = Object.preventExtensions(obj);
  Object.isExtensible(obj); // false

  console.log(o === obj);
  obj.name = "고양이";
  console.log(obj.name); // undefined

  Object.isSealed(obj); // false
  Object.seal(obj);
  Object.isSealed(obj); // true

  obj.octo = "bersky"; // 속성 변경만 가능
  console.log(obj.octo); // "bersky"
  delete  obj.octo;
  console.log(obj.octo); // "bersky"

  Object.freeze(obj);
  obj.octo = "world"; // 값도 변경 불가
  console.log(obj.octo); // "bersky"

})();