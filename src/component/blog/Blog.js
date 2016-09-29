import React from 'react'
import { connect } from 'react-redux'
import { dispatcher } from './dispatcher'
import { blogRecentlySelector } from './BlogService'
import ArticleTitle from './ArticleTitle'

@connect(blogRecentlySelector, dispatcher)
export default class Blog extends React.Component {

    render() {

        const {
            post: {
                articles = []
            },
            viewPost
        } = this.props;

        return (
            <div>
                <h3>Recently Post</h3>
                <ul>
                    {articles.map(article => {
                        return <li key={`article${article.id}`}><ArticleTitle article={article} viewPost={viewPost} /></li>
                    })}
                </ul>
            </div>
        )
    }
}