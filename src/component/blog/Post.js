import React from 'react'
import { connect } from 'react-redux'
import { postSelector } from './blogSelector'
import { dispatcher } from './blogService'
import ArticleTitle from './ArticleTitle'

const createMarkup = __html => ({ __html });

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
            articles: {
                title = '',
                summary = ''
            }
        } = this.props;
        return (
            <div>
                <h4>{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup(summary)} />
            </div>
        );
    }
};