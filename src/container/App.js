import React from 'react'
import { Link } from 'react-router'

const ACTIVE = { color: 'red' };
export const App = ({ children }) => (
    <div>
        <nav>
            <ul>
                <li><Link to="/home" activeStyle={ACTIVE}>Home</Link></li>
                <li><Link to="/pt" activeStyle={ACTIVE}>Presentation 자료</Link></li>
                <li><Link to="/blog" activeStyle={ACTIVE}>Blog</Link></li>
            </ul>
        </nav>
        <div>{children}</div>
    </div>
);

export default App;