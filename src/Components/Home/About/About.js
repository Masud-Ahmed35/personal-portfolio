import React from 'react';
import myPhoto from '../../../Assets/myPhoto.jpg'
import { AiOutlineMail, AiOutlineHome, AiFillLinkedin } from "react-icons/ai";

const About = () => {
    return (
        <div className='mt-11'>
            <div className="hero">
                <div className="flex flex-col lg:flex-row">
                    <img src={myPhoto} className="lg:max-w-lg h-full rounded-lg shadow-2xl" alt='' />
                    <div className='mt-5 mx-5 lg:w-[50%] lg:mx-auto'>
                        <h1 className="text-4xl font-bold">About Me</h1>
                        <p className="py-6 text-justify">
                            I have been working as a web developer for the past six months. In that time, I have gained experience
                            in both back-end and front-end development. I have also worked on a wide range of projects, from
                            small, simple websites to large, complex ones. My skills include HTML, CSS, JavaScript, React JS, and
                            Node JS. Also, mongoDB for database system.
                            I am a motivated and hard-working individual who is always looking for new challenges.
                        </p>
                        <p>
                            <a href="mailto:masud.cse.uap@gmail.com"
                                className='flex items-center gap-3'
                            >
                                <span><AiOutlineMail className='h-5 w-7 text-rose-400 font-thin' /></span>
                                <span className='text-gray-500 '>masud.cse.uap@gmail.com</span>
                            </a>
                        </p>
                        <p className='mt-3'>
                            <a href="https://www.linkedin.com/in/md-masud-ahmed-7b41a1240/"
                                target='_blank'
                                rel='noreferrer'
                                className='flex items-center gap-3'
                            >
                                <span><AiFillLinkedin className='h-5 w-7 text-rose-400 font-thin' /></span>
                                <span className='text-gray-500 '>LinkedIn Profile</span>
                            </a>
                        </p>
                        <p className='flex items-center gap-3 mt-3'>
                            <span><AiOutlineHome className='h-5 w-7 text-rose-400' /></span>
                            <span className='text-gray-500 '>Dhaka, Bangladesh</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;