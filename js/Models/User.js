define(function(){
 
    function User(params){
        this.name = (params && params.name) || '무명';
        this.gender = (params && params.gender) || '성별정보가 없습니다';
        this.position = (params && params.position) || '그룹원';
        this.comment = (params && params.comment) || '설명이 없습니다';
    }
 
    return User;
});