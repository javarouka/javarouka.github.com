import React from 'react'
import { Link } from 'react-router'

const ArticleTitle = ({ article = {}, viewPost, createdAt }) => {
    const { href, title } = article;
    return <a href={href} target="_blank">{title}</a>
};

export default ArticleTitle;