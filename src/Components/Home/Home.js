import React from 'react';
import About from './About/About';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
        </div>
    );
};

export default Home;