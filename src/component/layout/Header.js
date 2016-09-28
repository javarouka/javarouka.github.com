import React from 'react'
import githubIcon from '../../images/github-icon.png'

export const Header = ({ children }) => (
    <header>
        <h1>JAVAROUKA</h1>
        <p>Happy Full-Stack(?) Programer</p>
        <ul>
            <li>Coupang Developer</li>
            <li>Male</li>
            <li>Seoul, Korea</li>
        </ul>
        <a className="github-link first-position" href="https://github.com/javarouka" target="_blank">
            <img src={githubIcon} title="Go to javarouka's github page" alt="javarouka's github page link" />
        </a>
    </header>
);

export default Header;