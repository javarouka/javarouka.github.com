//Reveal.js 와의 연동처리 부분
(function() {
  "use strict";

  var W = window;
      //isEnabled = true;

  W.repoll = (function() {

    var pollServer = "",
        server = "/master",
        currentSlide,
        myChart = {};

    var getSurveyInfo = function (slideEl) {

      var titleEle = slideEl.querySelector(".repoll-title"),
          pollOptions = slideEl.querySelector(".repoll-options"),
          resultArea = slideEl.querySelector(".repoll-result");

      var opts = Array.prototype.slice.call(pollOptions.children);

      return {
        title : titleEle.innerHTML,
        viewType: resultArea.dataset.viewType,
        options : opts.map(function(v, i) {
          return {
            text: v.innerHTML,
            index: i
          }
        })
      };
    };

    var connect = function(initData) {

      head.js(
        '/socket.io/socket.io.js',
        function() {
          var sio = io.connect(pollServer + server);
          sio.on('connect', function() {
            console.log('socket.io connected');
          });
          sio.emit('master_ready', initData);
        }
      );
    };

    var sendToServer = function (surveyInfo) {
      console.log("surveyInfo " + JSON.stringify(surveyInfo));
      // 소켓 구현

      connect(surveyInfo);
    };

    var listenToServer = function() {
      // 소켓 받는다.

      //render()
    };

    var render = function (data) {
      var chartElem = document.getElementById('myChart');

      var createChart = function(data){
        var elemFrag = document.createDocumentFragment();
        for(var key in data){
          var tempElem = createDOMObject('div',nodeId(key));
          tempElem.appendChild(createDOMObject('p',nodeId(key,'R')));
          tempElem.appendChild(createDOMObject('p',nodeId(key,'L')));
          elemFrag.appendChild(tempElem);
        }
        chartElem.appendChild(elemFrag);
        updateChart(data);
      };

      var updateChart = function(data){
        // var dataSum = data.reduce(function(a,b){return a + b},0); //배열로 어떻게 바꾸더라...ㅠㅠ
        var dataSum = 0;
        for(var key in data){dataSum += data[key];}
        for(var key in data){
          var prop = data[key]/dataSum,
              deg = Math.round(prop * 3.6);

        }

      };

      var createDOMObject = function( tagName, id, className, textNode){
        var tempObject = document.createElement(tagName);
        if(id) tempObject.id = id;
        if(className) tempObject.setAttribute('class', className);
        if(textNode) tempObject.innerHTML(textNode);
        return tempObject;
      };

      var nodeId = function(str, direction){
        var returnValue = 'piece-' + str;
        returnValue += !direction ? '' : '-' + direction;
        return returnValue;
      }

      // define method Create or Update
      if(!myChart.length) createChart(data);
      else updateChart(data);

      // 데이터 예시
      // data = [
      //  "options1" : 2,
      //  "options2" : 2,
      //  "options3" : 2,
      //  "options4" : 2,
      //  "options5" : 2,
      //  "options6" : 2,
      //  "options6" : 2
      // ];

      // repoll-result
      // containerEl   = currentSlide.querySelector(".repoll-result");

      // ?????.render(contains,data);
    };

    var init = function(slide) {
      currentSlide = slide;
      sendToServer(getSurveyInfo(currentSlide));
      listenToServer();
    };

    return {
      init : init,
      render : render
    };

  })();

  if (Reveal.getCurrentSlide().classList.contains("repoll")) {
    repoll.init(Reveal.getCurrentSlide());
  }

  Reveal.addEventListener( 'slidechanged', function( event ) {
    if(event.currentSlide.classList.contains("repoll")){
      repoll.init(Reveal.getCurrentSlide());
    }
  });

  Reveal.addEventListener( 'overviewshown', function(event) { } );
  Reveal.addEventListener( 'overviewhidden', function(event) { } );

})();