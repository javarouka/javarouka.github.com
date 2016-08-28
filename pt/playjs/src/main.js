import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/simple.css'
import 'highlight.js/styles/default.css'
import 'highlight.js/styles/monokai-sublime.css'
import './index.css'
import hijs from 'highlight.js/lib/index'
import Reveal from 'reveal.js'
import duck from './img/duck.gif'

const imageMap = {
	'duck.gif': duck
};

Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,
	theme: 'simple',//Reveal.getQueryHash().theme, // available themes are in /css/theme
	transition: 'zoom' //Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none
});

hijs.initHighlighting();

var codeExecutor = document.querySelectorAll("a[data-executor]");
Array.prototype.forEach.call(codeExecutor, v => {
	v.onclick = function(e) {
		var parent = e.target.parentNode;
		(0, eval)(parent.querySelector("pre.code code").innerText);
	}
});

var imgRequired = document.querySelectorAll("img[data-img-required]");
Array.prototype.forEach.call(imgRequired, img => {
	img.src = imageMap[img.dataset.imgRequired];
});