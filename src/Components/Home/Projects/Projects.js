import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import p1 from '../../../Assets/p1.png';
import p2 from '../../../Assets/p2.png';
import p3 from '../../../Assets/p3.png';
import p4 from '../../../Assets/p4.png';
import p5 from '../../../Assets/p5.png';
import { ProjectsContext } from '../../../Layouts/Root';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = useContext(ProjectsContext);
    console.log(projects);

    return (
        <div className='mt-14'>
            <h1 className='font-bold text-4xl mb-9'>My Recent Projects</h1>
            <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    projects.map(project => <ProjectCard
                        key={project._id}
                        project={project}
                    ></ProjectCard>)
                }
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