import React from 'react'
import { Link } from 'react-router'
import Navigation from '../component/layout/Navigation'

export const App = ({ children }) => (
    <div>
        {/*
        <Navigation />
        */}
        <div>{children}</div>
    </div>
);

export default App;