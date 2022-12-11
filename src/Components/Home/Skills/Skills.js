import React from 'react';

const Skills = () => {
    return (
        <div className='mt-12'>
            <h1 className='mb-7 font-bold text-4xl'>Skills</h1>
            <div className='lg:flex justify-between'>
                <div className='lg:w-[45%]'>
                    <p className='mb-5 font-semibold text-xl text-center'>Front-End</p>
                    <div>
                        <p>HTML: 95%</p>
                        <progress className="progress h-2 progress-secondary" value="95" max="100"></progress>
                    </div>
                    <div className='mt-3'>
                        <p>CSS: 90%</p>
                        <progress className="progress h-2 progress-secondary" value="90" max="100"></progress>
                    </div>
                    <div className='mt-3'>
                        <p>Bootstrap: 85%</p>
                        <progress className="progress h-2 progress-secondary" value="85" max="100"></progress>
                    </div>
                    <div className='mt-3'>
                        <p>Tailwind: 90%</p>
                        <progress className="progress h-2 progress-secondary" value="90" max="100"></progress>
                    </div>
                    <div className='mt-3'>
                        <p>JavaScript: 80%</p>
                        <progress className="progress h-2 progress-secondary" value="80" max="100"></progress>
                    </div>
                    <div className='mt-3'>
                        <p>React.js: 75%</p>
                        <progress className="progress h-2 progress-secondary" value="75" max="100"></progress>
                    </div>
                    <div className='mt-3'>
                        <p>Firebase: 85%</p>
                        <progress className="progress h-2 progress-secondary" value="85" max="100"></progress>
                    </div>
                </div>
                <div className='lg:w-[45%]'>
                    <p className='mb-5 font-semibold text-xl text-center'>Back-End</p>
                    <div className="radial-progress text-pink-800 border-2 ml-5 mt-5" style={{ "--value": "60", "--size": "8rem", "--thickness": "5px" }}>
                        <div className='text-center'>
                            <p>Node.js</p>
                            <p>60%</p>
                        </div>
                    </div>
                    <div className="radial-progress text-pink-800 border-2 ml-5 mt-5" style={{ "--value": "65", "--size": "8rem", "--thickness": "5px" }}>
                        <div className='text-center'>
                            <p>Express.js</p>
                            <p>65%</p>
                        </div>
                    </div>
                    <div className="radial-progress text-pink-800 border-2 ml-5 mt-5" style={{ "--value": "75", "--size": "8rem", "--thickness": "5px" }}>
                        <div className='text-center'>
                            <p>MongoDB</p>
                            <p>75%</p>
                        </div>
                    </div>
                    <div className="radial-progress text-pink-800 border-2 ml-5 mt-5" style={{ "--value": "75", "--size": "8rem", "--thickness": "5px" }}>
                        <div className='text-center'>
                            <p>Rest API</p>
                            <p>75%</p>
                        </div>
                    </div>
                    <div className="radial-progress text-pink-800 border-2 ml-5 mt-5" style={{ "--value": "50", "--size": "8rem", "--thickness": "5px" }}>
                        <div className='text-center'>
                            <p>JWT</p>
                            <p>50%</p>
                        </div>
                    </div>
                    <div className="radial-progress text-pink-800 border-2 ml-5 mt-5" style={{ "--value": "70", "--size": "8rem", "--thickness": "5px" }}>
                        <div className='text-center'>
                            <p>Stripe</p>
                            <p>70%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;