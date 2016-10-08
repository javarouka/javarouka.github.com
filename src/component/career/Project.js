import React from 'react'
const deprecated = {
    textDecoration: 'line-through',
    color: 'gray'
};
export const Project = ({ children }) => (
    <div>
        <h2>Project</h2>
        <nav>
            <ul>
                <li><a href="//github.com/javarouka/class-method-hook" target="_blank">decorator class method hook</a></li>
                <li><a href="//github.com/javarouka/decorator-advice" target="_blank">decorator advice</a></li>
                <li><a href="//github.com/tipjs/tipjs-JavaScript-MVC-Framework" target="_blank">tipJS (Client-Side MVC Framework)</a></li>
                <li><a  style={deprecated} href="//javarouka.github.com/crosscutting.js" target="_blank"><span>crosscutting.js (JavaScript AOP Library)</span></a></li>
            </ul>
        </nav>
    </div>
);

export default Project

