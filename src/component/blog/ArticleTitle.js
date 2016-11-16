import React from 'react'
import { Link } from 'react-router'

const ArticleTitle = ({ article = {}, viewPost, createdAt }) => {
    const { file = '', title } = article;
    return <a href={`${file}`} target="_blank">{title}</a>
};

export default ArticleTitle;
