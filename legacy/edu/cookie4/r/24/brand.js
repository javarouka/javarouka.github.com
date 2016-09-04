// named nction expression으로 BrandView를 선언하여 variable에 function을 대입하여 객체
var BrandView = new function(){

    //function의 객체화를 통해 this레퍼런스가 생성되었으므로 this를 이용하여 명시적으로 
    // data와 render가 BrandView의 member임을 알린다.(~Windows에 넘어가 namespace가 중복될 수도 있으므로)
    this.data = [
        '레드윙',
        '호킨스',
        '닥터마틴',
        '클락스',
        '버팔로',
        '팀버랜드'
    ];

    this.render = function($parent){
        var $brandList = $("<ul></ul>");
        
        $.each(this.data, function(index, item) {
            $brandList.append("<li>" + item + "</li>")
        });
        
        $parent.append($brandList);
    }
}