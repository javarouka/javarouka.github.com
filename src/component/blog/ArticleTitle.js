import React from 'react'
import { Link } from 'react-router'

const ArticleTitle = ({ article = {}, viewPost, createdAt }) => {
    const { id = '', title } = article;
    return <Link to={`/post/${id}`}>{title}</Link>
};

export default ArticleTitle;