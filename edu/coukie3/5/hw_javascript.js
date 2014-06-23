function makeTagWithClassName(tag, className, value) {
	var tagClassName = 'class="' + className + '"';
	var openTag = '<' +  tag + ' ' + tagClassName + '>';
	var endTag = '</' + tag + '>';
	return openTag + value + endTag;
}

function addTagTo(parentId, tag) {
	$(parentId).append(tag);	
}


$(document).ready(function() {
	//Add elements that added before refresh
	addExistingTodoElement();

	//Add button click action 
	$('#addTodo').click(function() {
		todo = getTodoTextboxContent();
		addTodoElement(todo);
		clearTodoTextbox();
	});

	//Delete button click action
	$('#deleteAllTodo').click(function() {
		deleteAllTodoElement();
	});


	//List element double click action 
	$('#todoList').on('dblclick', '.todoElement', function() {
		addStrikeToTodoElement($(this));
	});




	function addExistingTodoElement() {
		var cookies = getAllCookie();
		for(var i = 0; i < cookies.length; i++) {
			var todo = getCookieNameAndValue(cookies[i]);
			if (isCookieMemberOfTodoList(todo[0])) {
				addTagTo('#todoList', unescape(todo[1]));
			}
		}
	}

	function isCookieMemberOfTodoList(cookieName) {
		return cookieName.indexOf('todo') != -1;
	}

	function makeTodoElement(todo) {
		return makeTagWithClassName('li', 'todoElement', todo);
	}

	function addTodoElement(todo) {
		newTodoElement = makeTodoElement(todo);
		addTagTo('#todoList', newTodoElement);
		setTodoCookie();
	}
	
	function setTodoCookie() {
		todo = $('#todoList').html();
		setCookieWithExpireTwoDay('todo', todo);
	}

	function getTodoTextboxContent() {
		return $('#todoText').val();
	}

	function clearTodoTextbox() {
		$('#todoText').val("");
	}

	function deleteAllTodoElement() {
		$('.todoElement').each(function() {
			$(this).remove();
		});
		deleteAllCookie();
	}

	function addStrikeToTodoElement(target) {
		addClass(target, 'strike');
		setTodoCookie();
	}

	function addClass(target, className) {
		target.addClass(className);
	}
});
