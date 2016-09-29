import React from 'react'
import { connect } from 'react-redux'
import { postSelector } from './BlogService'
import { dispatcher } from './dispatcher'
import ArticleTitle from './ArticleTitle'

@connect(postSelector, dispatcher)
export default class Post extends React.Component {

    componentDidMount() {

        const {
            params: { id },
            loadPost
        } = this.props;


        loadPost(id);
    }

    render() {
        const { params } = this.props;
        return (
            <div>
                <ArticleTitle {...this.props} />
                <div>{JSON.stringify(params)}</div>
            </div>
        );
    }
};