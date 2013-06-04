var current = new Date();

// ES3
console.log(current.__proto__ === Date.prototype);
console.log(current.constructor.prototype === Date.prototype);

// ES5
console.log(Object.getPrototypeOf(current) === Date.prototype);


// java의 super로 활용하기
function StudyGroup(){}
StudyGroup.prototype.study = function(something) {
  console.log(something + " study");
};

function Octobersky(){}

Octobersky.prototype = new StudyGroup();

Octobersky.prototype.study = function(){
  Object.getPrototypeOf(this).study("jsvascript");
};
