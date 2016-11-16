import React from 'react'

export const Footer = ({ children }) => (
    <footer className="first-position">
        <h2>Blog</h2>
        <ul className="blog">
            <li><a href="http://javarouka.github.io/blog" target="_blank">JavaRouka Blog (ACtive)</a></li>
            <li><a href="http://blog.javarouka.me/" target="_blank" style={{textDecoration: "line-through", "color": "gray"}}>Nonblock (Off)</a></li>
        </ul>
        <h2>SNS</h2>
        <ul className="sns">
            <li><a href="http://www.facebook.com/hanghui.i" target="_blank">
                <span className="icon facebook" />
                <span className="tooltip">Facebook</span>
            </a></li>
            <li><a href="https://plus.google.com/100780709864528473953" target="_blank">
                <span className="icon google-plus" />
                <span className="tooltip">Google+</span>
            </a></li>
        </ul>
        <p>
            This document was written by <a href="http://blog.javarouka.me/" target="_blank">javarouka</a>
        </p>
    </footer>
);

export default Footer;
