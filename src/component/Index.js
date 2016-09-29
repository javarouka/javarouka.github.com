import React from 'react'
import { connect } from 'react-redux'
import { getNode, removeClassOnNode } from '../helper/ElementHelper'
import { delayFor, executeIfNotTimeout } from '../helper/DeferHelper'
import Header from '../component/layout/Header'
import Pots from '../component/layout/Pots'
import Footer from '../component/layout/Footer'
import indexService from './indexService'

const select = state => state;

@connect(select, indexService)
export default class Index extends React.Component {

	componentDidMount() {
		this.initialize();
	}

	initialize() {
		executeIfNotTimeout(
			2000,
			delayFor(500).then(() => removeClassOnNode(getNode("section, header, footer"), "first-position")),
			delayFor(1300).then(() => removeClassOnNode(getNode("a.github-link"), "first-position"))
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