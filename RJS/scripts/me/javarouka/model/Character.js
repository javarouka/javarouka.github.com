define([
    "me/javarouka/utils/ObjectUtils"
], function(ObjectUtils) {
	
	var Character = function(name) {
		this.name = name;
	};
	
	Character.getCharacters = function(params) {
		// 가상 데이터
		return [
		    new Character("항희"),
		    new Character("영희"),
		    new Character("태희"),
		    new Character("국희")
		];
	};
	
	return Character;
});