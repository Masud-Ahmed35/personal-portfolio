import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-[225px]' src={project.image[0]} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{project.name}</h2>
                    <p>
                        {project.description}
                    </p>
                    <div className="flex justify-between mt-5">
                        <Link to={`/project-details/${project._id}`} className='w-1/2'><button className="btn btn-info border-0 w-[90%] mx-auto bg-gradient-to-r from-stone-500 to-amber-300">View Details</button></Link>
                        <a href={project.live} className='w-1/2' rel='noreferrer' target='_blank'><button className="btn w-[90%] mx-auto btn-info border-0 bg-gradient-to-r from-stone-500 to-amber-300">Live Link</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;