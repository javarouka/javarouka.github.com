import React from 'react'
import githubIcon from '../images/github-icon.png'

function setInitializClass(nodeList) {
	for(var i = 0, len = nodeList.length; i < len; i++) {
		nodeList[i].classList.remove("first-position");
	}
}

export default class Index extends React.Component {

	componentDidMount() {
		setTimeout(function(){
			setInitializClass(document.querySelectorAll("section, header, footer"));
		}, 500);
		setTimeout(function(){
			setInitializClass(document.querySelectorAll("a.github-link"));
		}, 1300);
	}

	render() {
		return (
			<div>
				<header>
					<h1>JAVAROUKA</h1>
					<p>Happy Full-Stack(?) Programer</p>
					<ul>
						<li>Coupang Developer</li>
						<li>Male</li>
						<li>Seoul, Korea</li>
					</ul>
					<a className="github-link first-position" href="https://github.com/javarouka" target="_blank">
						<img src={githubIcon} title="Go to javarouka's github page" alt="javarouka's github page link" />
					</a>
				</header>
				<section className="first-position">

					<h2>Project</h2>
					<nav>
						<ul>
							<li><a href="https://github.com/tipjs/tipjs-JavaScript-MVC-Framework" target="_blank">tipJS (Client-Side MVC Framework)</a></li>
							<li><a href="https://javarouka.github.com/crosscutting.js" target="_blank"><span>crosscutting.js (JavaScript AOP Library)</span></a></li>
						</ul>
					</nav>

					<h2>Test Codes and Example</h2>
					<nav>
						<ul>
							<li><a href="legacy/css-sample/" target="_blank">CSS Selector Example</a></li>
							<li><a href="javascript/js_basic_quiz.html" target="_blank"><span>JavaScript Basic Quiz</span></a></li>
						</ul>
					</nav>

					<h2>Presentations</h2>
					<nav>
						<h3>Back-End</h3>
						<ul>
							<li><a href="pt/sql-1" target="_blank">MySQL SQL - SELECT</a></li>
						</ul>
						<h3>Front-End</h3>
						<ul>
							<li><a href="//javarouka.github.io/pt/playjs/build" target="_blank">ES6 Object and Symbol</a></li>
							<li><a href="//javarouka.github.io/pt/yeoman" target="_blank">Introduce Yeoman</a></li>
							<li><a href="//javarouka.github.io/pt/closure" target="_blank">Play JavaScript - Variable Scoping</a></li>
							<li><a href="//javarouka.github.io/pt/ecmascript5-new/" target="_blank">ECMAScript 5th Features - JavaCafe Summer Mini Seminar</a></li>
							<li><a href="//javarouka.github.io/pt/template/" target="_blank">Handlebar Template - CommonBS</a></li>
							<li><a href="//javarouka.github.io/pt/js-scope/" target="_blank">JavaScript Scope</a></li>
							<li><a href="//www.slideshare.net/javarouka/deferred-object" target="_blank">Deferred Object</a></li>
							<li><a href="//www.slideshare.net/javarouka/jade-template-for-okjsp" target="_blank">Jade Template</a></li>
							<li><a href="//www.slideshare.net/javarouka/javascript-23946590" target="_blank">JavaScript Frameworks - Korea Comunity Day 3nd</a></li>
						</ul>
					</nav>

				</section>

				<footer className="first-position">
					<h2>Blog</h2>
					<ul className="blog">
						<li><a href="http://blog.javarouka.me/" target="_blank">Nonblock</a></li>
					</ul>
					<h2>SNS</h2>
					<ul className="sns">
						<li><a href="http://www.facebook.com/hanghui.i" target="_blank">
							<span className="icon facebook"></span>
							<span className="tooltip">Facebook</span>
						</a></li>
						<li><a href="https://plus.google.com/100780709864528473953" target="_blank">
							<span className="icon google-plus"></span>
							<span className="tooltip">Google+</span>
						</a></li>
					</ul>
					<p>
						This document was written by <a href="http://blog.javarouka.me/" target="_blank">javarouka</a>
					</p>
				</footer>
			</div>
		);
	}
}