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

window.addEventListener("load", () => {
	Reveal.initialize({
		controls: true,
		progress: true,
		history: true,
		center: true,
		transition: 'concave' //Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none
	});

	hijs.initHighlighting();

	var imgRequired = document.querySelectorAll("img[data-img-required]");
	Array.prototype.forEach.call(imgRequired, img => {
		img.src = imageMap[img.dataset.imgRequired];
	});
});