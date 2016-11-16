import React from 'react'
import { connect } from 'react-redux'
import { blogRecentlySelector } from './blogSelector'
import { blogService } from './blogService'
import ArticleTitle from './ArticleTitle'

@connect(blogRecentlySelector, blogService)
export default class Blog extends React.Component {

    render() {
debugger;
        const {
            articles: {
                recently = [],
                totalPost = 0
            },
            viewPost
        } = this.props;



        return (
            <div>
                <h2>Study Posts</h2>
                <ul>
                    {recently.map(article => {
                        return <li key={`article${article.file}`}><ArticleTitle article={article} viewPost={viewPost} /></li>
                    })}
                </ul>
            </div>
        )
    }
}
