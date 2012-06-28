define([
    "jquery",
    "javarouka/model/User",
    "javarouka/model/Article",
    "javarouka/view/ListView",
    "javarouka/utils/Logger"
], function($, User, Article, View, Logger) {

	Logger.info("ListController loaded.");

	var CONTEXT;
	
	var userInfo = {};
	
	var $loadingIndicator = $("#loading-indicator");
	var $UL = $("#article-list ul");
	
	var renderArticleList = function() {
		Logger.info("rendering article grid...");
		var parameters = {};  // 파라미터가 필요하면 입력
		Article.list(
			parameters,
			function(list) {
				
				Logger.info("## article datalist ##");
				Logger.info(list);
				
				// 그리드에 사용할 데이터스토어를 만든다
				var articleStore = new Ext.data.JsonStore({
					idProperty: 'id',
					root: "data",
			        	fields: [
			            		{ name: 'id', type: 'string' },
			            		{ name: 'title', type: 'string' },
			            		{ name: 'desc', type: 'string' }
			        	],
			        	data: list
			    	});
				
				// 그리드를 생성하고 반환받은 그리드를 변수에 할당
				// 인자로 그리드 제목과 데이터스토어를 준다
				var articleGrid = View.renderList(articleStore);
				
				// 행 클릭 이벤트를 할당한다
				articleGrid.on("rowclick", function(g, i, e) {					
					var record = g.getStore().getAt(i);
					Logger.info("## click record ##");
					Logger.info(record);
					if(record) {
						View.detailView(record.data);
					}
				});
			},
			function(error) {
				alert(error.msg); // 리스트 데이터를 불러오는 도중 발생한 에러 핸들러
			}
		)
	}
	
	var eventBind = function() {
		Logger.info("event binding...");
		$UL.live("dblclick", function(e) {
			$(this).stop(true).hide(600);
		});		
	}
	
	var init = function() {
		renderArticleList();
		eventBind();
		$loadingIndicator.hide();
		Logger.info("controller init complete.");
	}
	
	var execute = function(Context) {
		Logger.info("ListController execute...");
		CONTEXT = Context;
		User.getUserInfo(function(user) {
			Logger.info("## User info ## ");
			Logger.info(user);
			userInfo = user;
			init();
		});
	}
	
	return {
		execute: execute
	}
});