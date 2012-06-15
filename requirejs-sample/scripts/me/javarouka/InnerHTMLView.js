define(function(Storage) {
	
	/**
	 * Template-Callback 패턴 문맥 메소드
	 * html 문자열을 생성하는 콜백을 받아 전체적인 처리를 한다.
	 * 
	 * @model 컨트롤러에서 생성한 모델 객체
	 * @callback 문맥 중 실행할 함수
	 * @complete 작업 완료 뒤 실행할 함수
	 */
	var renderTemplate = function(model, callback, complete) {
		var $content = model.renderArea;
		
		$content.fadeOut(
			300, 
			function() {
				
				$content.empty().html(
					callback(model.data) // 콜백 실행후 반환 결과를 컨텐트 HTML에 할당
				);
			
				$content.fadeIn(600, function() {
					if(complete && typeof complete === 'function') {
						complete();
					}
				});
			}
		);
	}
	
	/**
	 * 노래를 추가할 새로운 폼을 그리는 함수
	 * 
	 * @model 모델 객체
	 * @complete 완료 뒤 호출될 객체
	 */
	var renderNewSongForm = function(model, complete) {
		
		renderTemplate(model, function() {
			return	"<form class='add-form'>" +
				"<div>" +
				"	<div>" +
				"		<label id='title'>제목</label>" +
				"		<input id='song-title' type='text' name='title' placeholder='제목을 입력하세요' />" +
				"	</div>" +
				"	<div>" +
				"		<label id='singer''>가수</label>" +
				"		<input id='song-singer' type='text' name='singer' placeholder='가수를 입력하세요' />" +
				"	</div>" +
				"	<div>" +
				"		<label id='lyrics'>노래가사</label>" +
				"		<textarea id='song-lyrics' name='lyrics' placeholder='가사를 입력하세요'></textarea>" +
				"	</div>" +
				"	<button class='btn-add-song'>입력하기</button>" +
				"</div>" +
				"</form>";
		}, complete);
	};
	
	/**
	 * 노래 목록을 그리는 함수
	 * 
	 * @model 모델 객체
	 * @complete 완료 뒤 호출될 객체
	 */
	var renderSongList = function(model, complete) {
		renderTemplate(model, function(songs) {
			var html = "";
			if(!songs || songs.length === 0) {
				html += "<p>등록된 노래가 없습니다!!</p>";
			}
			else {
				html += "<ul>";
				for(var i=0,len=songs.length; i < len; i++) {
					html += 
						"<li class='song-item'>" +
						"	<h2>" + songs[i].title + "</h2>" +
						"	<h3>" + songs[i].singer + "</h3>" +
						"	<p class='hide'>" + songs[i].lyrics + "</p>" +
						"</li>";
				}
				html += "</ul>";
			}
			return html;
		}, complete);
	};
	
	// 공개될 함수
	return {
		renderSongList: renderSongList,
		renderNewSongForm: renderNewSongForm
	}
	
});