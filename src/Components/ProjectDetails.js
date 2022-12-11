import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectsContext } from '../Layouts/Root';

const ProjectDetails = () => {
    const { id } = useParams();
    const projects = useContext(ProjectsContext);
    console.log(id);
    console.log(projects);

    const project = projects.find(p => p._id === parseInt(id));
    console.log(project);

    return (
        <div className='my-14 lg:flex'>
            <div className='lg:w-[40%]'>
                <img className='mb-5' src={project.image[0]} alt="" />
                <img className='mb-5' src={project.image[1]} alt="" />
                <img className='mb-5' src={project.image[2]} alt="" />
            </div>
            <div className='ml-5 lg:ml-16 lg:w-1/2'>
                <p className='text-3xl font-bold italic font-mono'>{project.name}</p>
                <p className='my-5 text-justify'>{project.description}</p>
                <p className='text-xl font-bold mb-2'>Features</p>
                <div>
                    {
                        project.feature.map((f, i) => <li
                            key={f.i}
                        >
                            {f}
                        </li>)
                    }
                </div>
                <p className='text-xl font-bold mt-7 mb-2'>Technologies</p>
                <div>
                    {
                        project.technologies.map((t, i) => <li
                            key={t.i}
                        >
                            {t}
                        </li>)
                    }
                </div>
                <div className='flex justify-evenly mt-10'>
                    <a href={project?.client} className='w-1/2' rel='noreferrer' target='_blank'><button className="btn w-[90%] mx-auto btn-info border-0 bg-gradient-to-r from-stone-500 to-amber-300">Client-Side</button></a>
                    <a href={project?.server} className='w-1/2' rel='noreferrer' target='_blank'><button className="btn w-[90%] mx-auto btn-info border-0 bg-gradient-to-r from-stone-500 to-amber-300">Server-Side</button></a>
                    <a href={project?.live} className='w-1/2' rel='noreferrer' target='_blank'><button className="btn w-[90%] mx-auto btn-info border-0 bg-gradient-to-r from-stone-500 to-amber-300">Live Link</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;