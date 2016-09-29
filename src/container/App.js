import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Navigation from '../component/layout/Navigation'

export const App = ({ children }) => (
    <div>
        <div>{children}</div>
    </div>
);

export default connect(s=>s)(App);