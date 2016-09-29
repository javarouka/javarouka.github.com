import React from 'react'
import { connect } from 'react-redux'
import { INIT_APP } from '../action/base'
import { delayFor, executeIfNotTimeout } from '../helper/DeferHelper'
import Header from '../component/layout/Header'
import Pots from '../component/layout/Pots'
import Footer from '../component/layout/Footer'

const removeFirstPositionClass = nodeList => {
	for(var i = 0, len = nodeList.length; i < len; i++) {
		nodeList[i].classList.remove("first-position");
	}
};
const select = state => state;
const dispatcher = dispatch => ({
	initialize() {
		dispatch({ type: INIT_APP });
	}
});

@connect(select, dispatcher)
export default class Index extends React.Component {

	componentDidMount() {
		this.initialize();
	}

	initialize() {
		executeIfNotTimeout(
			2000,
			delayFor(500).then(() => removeFirstPositionClass(document.querySelectorAll("section, header, footer"))),
			delayFor(1300).then(() => removeFirstPositionClass(document.querySelectorAll("a.github-link")))
		).then(() => this.props.initialize());
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