import React from 'react'
import Project from '../career/Project'
import Presentation from '../career/Presentation'

export const Pots = ({ children }) => (
    <section className="first-position">
        <Project />
        <Presentation />
    </section>
);

export default Pots