(function(WINDOW, $) {
  "use strict";

  var doc = WINDOW.document,
      sio,
      // localhost
      pollServer = "",
      templateSource = $('#vote-template').html(),
      voteTemplate   = Handlebars.compile(templateSource),
      E = {
        voteButtons: ".marketing",
        submit: ".marketing .vote-item",
        title: "h1"
      };

  var getRandomColorHex = function() {
    var list1 = "0123456789ABCDEF",
        list2 = "FEDCBA9876543210",
        ch;
    var bg = Math.floor(Math.random()*16777215).toString(16),
        text = "";
    for(var i=0;i<bg.length;i++) {
      ch = bg.charAt(i);
      for(var n=0;n<bg.length;n++) {
        if(ch === list1.charAt(n)) {
          text += list2.charAt(n);
        }
      }
    }
    return [ bg, text ];
  };
  var masterNotReady = function() {
    console.log('master not ready');
    E.title.text('No Polls Yet...');
    E.voteButtons.hide();
    E.submit.remove();
  };

  var masterReady = function(chartData) {
    if (E.voteButtons.children().length >= 1) {
      E.submit.remove();
    }
    chartData.options.forEach(function(v) {
      var c = getRandomColorHex();
      v.color = "#" + c[0];
      v.fcolor = "#" + c[1];
    });
    E.voteButtons.append(voteTemplate(chartData));
    E.voteButtons.show();

    E.voteButtons.on('click', ".vote-item", function(e) {
      e.preventDefault();
      sio.emit('client_vote', {selected:$(this).data('index')});
    });
  };

  var connect = function(callback) {
    sio = io.connect(pollServer + '/client');

    sio.on('connect', function() {
      console.log('socket.io connected');
    });

    sio.on('master_ready', function(chartData) {
      if (!chartData.viewType) {
        masterNotReady();
        return;
      }
      console.log('master ready to vote with data!!');
      masterReady(chartData);
    });

    sio.on('master_lost', function(data) {
      console.log('master lost');
      console.dir(data);
      masterNotReady();
    });

    if($.isFunction(callback)) {
      callback();
    }
  };

  var bindEvent = function(callback) {
    $(WINDOW).bind('beforeunload', function() {
      sio.emit('force_disconnect');
    });

    $(doc).on("load",function() {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 1000);
    });

    if($.isFunction(callback)) {
      callback();
    }
  };

  var renderUI = function(callback) {
    var mapped = {};
    $.each(E, function(k, v) {
      mapped[k] =  $(v);
    });
    E = mapped;

    if($.isFunction(callback)) {
      callback();
    }
  };

  var initialize = function() {
    renderUI(bindEvent(connect));
  };

  initialize();

})(window, jQuery);