import React from 'react'
import { connect } from 'react-redux'
import { postSelector } from './blogService'
import { dispatcher } from './dispatcher'
import ArticleTitle from './ArticleTitle'

const createMarkup = html => ({__html: html});

@connect(postSelector, dispatcher)
export default class Post extends React.Component {

    componentDidMount() {

        const {
            params,
            loadPost
        } = this.props;

        loadPost(params);
    }

    render() {
        const {
            articles
        } = this.props;
        return (
            <div dangerouslySetInnerHTML={createMarkup(articles.displayHtml)} />
        );
    }
};