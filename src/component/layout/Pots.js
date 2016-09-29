import React from 'react'
import Project from '../career/Project'
import Presentation from '../career/Presentation'
import Blog from '../blog/Blog'

export const Pots = ({ children }) => (
    <section className="first-position">
        <Blog />
        <Presentation />
        <Project />
    </section>
);

export default Pots