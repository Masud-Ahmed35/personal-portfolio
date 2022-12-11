import React from 'react';
import About from './About/About';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Projects />
        </div>
    );
};

export default Home;