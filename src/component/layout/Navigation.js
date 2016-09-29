import React from 'react'
import { Link } from 'react-router'

const ActiveStyle = { color: 'red' };
export const Navigation = ({ children }) => (
    <nav className="navigation">
        <ul>
            <li><Link to="/home" activeStyle={ActiveStyle}>Home</Link></li>
            <li><Link to="/pt" activeStyle={ActiveStyle}>Presentation 자료</Link></li>
            <li><Link to="/blog" activeStyle={ActiveStyle}>Blog</Link></li>
        </ul>
    </nav>
);

export default Navigation