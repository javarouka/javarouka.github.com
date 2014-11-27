function random(_default) {
    return ~~(Math.random() * (_default || 10) * 1000);
}

function A(name) {
    var def = $.Deferred(), r = random(), name = name || "anonymouse-" + (+new Date);
    def.notify("["+name+"] 준비");
    setTimeout(function() {
        def.resolve("["+name+"] " + r);
    }, r);
    setTimeout(function() {
        def.notify("["+name+"] 반절 지남");
    }, r/2)
    return def.promise();
}