function wait(time) {
    var def = $.Deferred();
    setTimeout(def.resolve, time);
    return def.promise();
}

function random(_default) {
    return ~~(Math.random() * (_default || 10) * 1000);
}

function Tester(name, rejectLimit) {
    var def = $.Deferred(), r = random(), name = name || "anonymouse-" + (+new Date);
    def.notify("["+name+"] progressing... 0%");
    setTimeout(function() {
        def.resolve("["+name+"] resolve. ## " + r + " millis.");
    }, r);
    setTimeout(function() {
        def.notify("["+name+"] progressing... 50%");
    }, r/2);
    setTimeout(function() {
        def.reject("["+name+"] reject! ## " + r + " millis.");
    }, rejectLimit || 5000);
    return def.promise();
}


Tester("First").progress(function(r){ console.log(r) })
    .done(function(r){ console.log(r) })
    .fail(function(r){ console.log(r) });

Tester("Second").progress(function(r){ console.log(r) })
    .done(function(r){ console.log(r) })
    .fail(function(r){ console.log(r) });