import React from 'react'
import { Link } from 'react-router'

const ArticleTitle = ({ article = {}, viewPost, createdAt }) => {
    const { file = '', title } = article;
    return <Link to={`/post/${file}`}>{title}</Link>
};

export default ArticleTitle;