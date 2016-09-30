import React from 'react'
import { connect } from 'react-redux'
import { dispatcher } from './blogService'
import { blogRecentlySelector } from './blogSelector'
import ArticleTitle from './ArticleTitle'

@connect(blogRecentlySelector, dispatcher)
export default class Blog extends React.Component {

    render() {

        const {
            articles: {
                recently = []
            },
            viewPost
        } = this.props;

        return (
            <div>
                <h2>Recently Post</h2>
                <ul>
                    {recently.map(article => {
                        return (
                            <li key={`article${article.file}`}>
                                <ArticleTitle article={article} viewPost={viewPost} />
                                <p>{article.summary}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}