import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import myPhoto from '../../../Assets/myPhoto.jpg'

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Full-Stack Developer', 'MERN Stack Developer', 'React Developer'],
        loop: {},
        typeSpeed: 120,
    })

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${myPhoto})` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-4xl font-bold">Hello Dears</h1>
                    <p className="mb-5 text-5xl font-extrabold text-amber-500 font-serif italic">I am Md. Masud Ahmed</p>
                    <p className="mb-5 text-4xl font-extrabold italic">&</p>
                    <p className="mb-5 text-3xl font-bold font-mono">I am a {' '}
                        <span className='text-amber-500'>{text}</span>
                        <span className='text-red-600'><Cursor cursorStyle='|' /></span>
                    </p>
                    <div className='flex gap-5 justify-center mt-10'>
                        <a href="https://drive.google.com/file/d/1KqI7myCcUcQupUfBfAGWa0e1QsQoosbe/view?usp=sharing"
                            rel='noreferrer'
                            target="_blank">
                            <button className="btn btn-warning btn-outline">View Resume</button>
                        </a>
                        <button className="btn btn-success btn-outline">Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;