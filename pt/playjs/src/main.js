import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/sky.css'
import Reveal from 'reveal.js'

Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,
	theme: 'simple',//Reveal.getQueryHash().theme, // available themes are in /css/theme
	transition: 'zoom' //Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none
});

var codeExecutor = document.querySelectorAll("a[data-executor]");
Array.prototype.forEach.call(codeExecutor, function(v) {
	v.onclick = function(e) {
		var parent = e.target.parentNode;
		(0, eval)(parent.querySelector("pre.code code").innerText);
	}
});