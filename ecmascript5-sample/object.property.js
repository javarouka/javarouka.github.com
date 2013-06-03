// pure 객체 생성
var nullObject = Object.create(null);

// 속성 정의
Object.defineProperty(nullObject, "toString", {
  value: function(){
    return "Empty Object {}";
  },
  writable: false,
  configurable: false,
  enumerable: false
});


// 값은 함수.
nullObject.toString(); // "Empty Object {}"

// 덮어 쓰기 불가능
nullObject.toString = "null!";
nullObject.toString(); // "Empty Object {}"

// 아무것도 열거되지 않음
for(var k in nullObject) {
  console.log(k);
}

// 불가능
Object.defineProperty(nullObject, "toString", {
  configurable: true
});

// 속성 디스크립터 얻어오기
Object.getOwnPropertyDescriptor(nullObject);

// 키 네임을 배열로 얻기
var obj = Object.create(null, {
  a: {
    value: "A",
    enumerable: true
  },
  b: {
    value: "B"
  }
});
obj.c = "C"; // enumerable: true, writable: true, value: "C"
Object.keys(obj); // 열거 금지된 것 제외하고 모든 속성명
Object.getOwnPropertyNames(obj);  // 모든 속성명

Object.keys([1,2,3]); // ?
Object.getOwnPropertyNames([1,2,3]); // ?


// 같은 동작
var OctoberSky = {};

OctoberSky.study = "NodeJS";
Object.defineProperty(OctoberSky, "study", {
  value: "NodeJS",
  writable: true,
  configurable: true,
  enumerable: true
});

Object.defineProperty(OctoberSky, "work", {
  get: function() {
    return this.study + " study";
  },
  set: function(value) {
    this.study = value;
  }
});

console.log(OctoberSky.work); // "NodeJS study"
OctoberSky.work = "Java";
console.log(OctoberSky.work); // "Java study"
