import React from 'react';
import p1 from '../../../Assets/p1.png';
import p2 from '../../../Assets/p2.png';
import p3 from '../../../Assets/p3.png';
import p4 from '../../../Assets/p4.png';
import p5 from '../../../Assets/p5.png';

const Projects = () => {
    return (
        <div className='mt-14'>
            <h1 className='font-bold text-4xl mb-9'>My Recent Projects</h1>
            <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className='h-[225px]' src={p1} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Recycled-Bikes</h2>
                        <p>
                            It is an used product selling ab application. Here, buyer can purchase a product also modify his products. And seller can add products, also manipulate his products. And admin role is that, he can add category manipulate buyer or seller.
                        </p>
                        <div className="flex justify-evenly mt-5">
                            <a href="https://github.com/Masud-Ahmed35/recycled-bikes-client-side" rel='noreferrer' target='_blank'><button className="btn btn-info border-0 bg-gradient-to-r from-lime-500 to-amber-500">Client-Side</button></a>
                            <a href="https://github.com/Masud-Ahmed35/recycled-bikes-server-side" rel='noreferrer' target='_blank'><button className="btn btn-secondary border-0 bg-gradient-to-r from-success to-warning">Server-Side</button></a>
                            <a href="https://recycled-bikes.web.app/" rel='noreferrer' target='_blank'><button className="btn btn-warning">Live Link</button></a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className='h-[225px]' src={p2} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Professor 360</h2>
                        <p>
                            This is online based review-given web application. Here, you can choose a service and you may give your review. In this website, you can purchase a service which we will provide. On the basis of the quality of our survice, you can give your review.
                        </p>
                        <div className="flex justify-evenly mt-5">
                            <a href="https://github.com/Masud-Ahmed35/professor-360-client-side" rel='noreferrer' target='_blank'><button className="btn btn-info border-0 bg-gradient-to-r from-lime-500 to-amber-500">Client-Side</button></a>
                            <a href="https://github.com/Masud-Ahmed35/professor-360-server-side" rel='noreferrer' target='_blank'><button className="btn btn-secondary border-0 bg-gradient-to-r from-success to-warning">Server-Side</button></a>
                            <a href="https://professor360-13eac.web.app/" rel='noreferrer' target='_blank'><button className="btn btn-warning">Live Link</button></a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className='h-[225px]' src={p3} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Secret Lab</h2>
                        <p>
                            This is online based quality learning web application. Here, you can choose a course what you want, there are several courses about web programming. You can select a course to explore this and also it will be helpful for your future career.
                        </p>
                        <div className="flex justify-evenly mt-5">
                            <a href="https://github.com/Masud-Ahmed35/secret-lab-client-side" rel='noreferrer' target='_blank'><button className="btn btn-info border-0 bg-gradient-to-r from-lime-500 to-amber-500">Client-Side</button></a>
                            <a href="https://github.com/Masud-Ahmed35/secret-lab-server-side" rel='noreferrer' target='_blank'><button className="btn btn-secondary border-0 bg-gradient-to-r from-success to-warning">Server-Side</button></a>
                            <a href="https://secret-web-1e169.web.app/" rel='noreferrer' target='_blank'><button className="btn btn-warning">Live Link</button></a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className='h-[225px]' src={p4} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Quizzes Lab</h2>
                        <p>
                            This is an online based educational project, Where anyone can take an participation for quiz test on several topics on web development.
                        </p>
                        <div className="flex justify-evenly mt-5">
                            <a href="https://github.com/Masud-Ahmed35/quizzes-lab" rel='noreferrer' target='_blank'><button className="btn btn-info border-0 bg-gradient-to-r from-lime-500 to-amber-500">Client-Side</button></a>
                            <a href="https://quizzes-lab.netlify.app/" rel='noreferrer' target='_blank'><button className="btn btn-warning">Live Link</button></a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className='h-[225px]' src={p5} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Absolute Fitness</h2>
                        <p>
                            This web application is for absolute fitness. There are several task for gym with time. You may select on option for gym, also you get some information like rest time, total gym time etc.
                        </p>
                        <div className="flex justify-evenly mt-5">
                            <a href="https://github.com/Masud-Ahmed35/absolute-fitness-club" rel='noreferrer' target='_blank'><button className="btn btn-info border-0 bg-gradient-to-r from-lime-500 to-amber-500">Client-Side</button></a>
                            <a href="https://absolute-fitness-club.netlify.app/" rel='noreferrer' target='_blank'><button className="btn btn-warning">Live Link</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-14'>
                <a href="https://github.com/Masud-Ahmed35" rel='noreferrer' target='_blank'>
                    <button className='btn btn-info px-11 bg-gradient-to-r from-error to-info border-0'>See All</button>
                </a>
            </div>
        </div>
    );
};

export default Projects;