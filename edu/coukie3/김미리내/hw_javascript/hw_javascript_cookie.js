function setCookieWithExpireTwoDay(cookieName, cookieValue) {
	setCookie(cookieName, cookieValue, 2);
}

function setCookie(cookieName, cookieValue, expireDays) {
	var data = new Date();
	data.setTime(data.getTime() + (expireDays * 24 * 60 * 60 * 1000));
	var expires = 'expires=' + data.toGMTString();
	document.cookie = cookieName + '=' + escape(cookieValue) + ';' + expires;
}

function getAllCookie() {
	return document.cookie.split(';');
}

function getCookieNameAndValue(cookie) {
	var cookie = $.trim(cookie);
	return cookie.split('=');
}

function deleteAllCookie() {
	var cookies = getAllCookie();

	for(var i = 0; i < cookies.length; i++) {
		var cookie = getCookieNameAndValue(cookies[i]);
		setCookie(cookie[0], cookie[1], -1);
	}
}
