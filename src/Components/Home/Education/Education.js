import React from 'react';

const Education = () => {
    return (
        <div className='mt-14'>
            <h1 className='text-4xl font-bold'>Education</h1>
            <div className='mt-7 grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center text-xl font-bold font-serif shadow-lg pb-2 mb-1">Graduation</h2>
                        <p>B.Sc in Computer Science and Engineering</p>
                        <p>University of Asia Pacific</p>
                        <p>Dhaka, Bangladesh</p>
                        <p className='font-mono font-semibold'>CGPA: 3.77 Out of 4</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center text-xl font-bold font-serif shadow-lg pb-2 mb-1">H.S.C</h2>
                        <p>Group of Science</p>
                        <p>Rajshahi Collegiate School and College</p>
                        <p>Rajshahi, Bangladesh</p>
                        <p className='font-mono font-semibold'>GPA: 5.00 Out of 5</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center text-xl font-bold font-serif shadow-lg pb-2 mb-1">S.S.C</h2>
                        <p>Group of Science</p>
                        <p>Rohanpur A.B Government High School</p>
                        <p>Rajshahi, Bangladesh</p>
                        <p className='font-mono font-semibold'>GPA: 5.00 Out of 5</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;