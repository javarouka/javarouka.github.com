import React from 'react'
import { Link } from 'react-router'

const ACTIVE = { color: 'red' };
export const App = ({ children }) => (
  <div>
    <ul>
      <li><Link to="/" activeStyle={ACTIVE}>Home</Link></li>
      <li><Link to="/pt" activeStyle={ACTIVE}>Presentation 자료</Link></li>
    </ul>
    <div>{children}</div>
  </div>
);

export default App;