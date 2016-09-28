import React from 'react'
import Header from '../component/layout/Header'
import Pots from '../component/layout/Pots'
import Footer from '../component/layout/Footer'

function setInitializeClass(nodeList) {
	for(var i = 0, len = nodeList.length; i < len; i++) {
		nodeList[i].classList.remove("first-position");
	}
}

export default class Index extends React.Component {

	componentDidMount() {

		setTimeout(() => {
			setInitializeClass(document.querySelectorAll("section, header, footer"));
		}, 500);

		setTimeout(() => {
			setInitializeClass(document.querySelectorAll("a.github-link"));
		}, 1300);
	}

	render() {
		return (
			<div>
				<Header />
				<Pots />
				<Footer />
			</div>
		);
	}
}