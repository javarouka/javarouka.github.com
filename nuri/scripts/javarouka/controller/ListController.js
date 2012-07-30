define([
    "jquery",    
    "javarouka/view/ListView",
    "javarouka/utils/Logger"
], function($, View, Logger) {

	Logger.info("ListController loaded.");

	var CONTEXT;
	
	var userInfo = {};
	
	var $loadingIndicator = $("#loading-indicator");
	var $UL = $("#article-list ul");
	
	var renderArticleList = function() {
		Logger.info("rendering article grid...");	
		require(["javarouka/model/Article"], function(Article) {
			var articleStore = Article.getArticleDataStore({});
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
		});
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

		require(["javarouka/model/User"], function(User) {
			User.getUserInfo(function(user) {
				Logger.info("## User info ## ");
				Logger.info(user);
				userInfo = user;
				init();
			});
		});
	}
	
	return {
		execute: execute
	}
});