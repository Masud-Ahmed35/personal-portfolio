import React from 'react';
import About from './About/About';
import EmailForm from './EmailForm/EmailForm';
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
            <EmailForm />
        </div>
    );
};

export default Home;