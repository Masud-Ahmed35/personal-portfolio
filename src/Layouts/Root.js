import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

export const ProjectsContext = createContext({});

const Root = () => {
    const data = useLoaderData();

    return (
        <ProjectsContext.Provider value={data}>
            <NavBar />
            <Outlet />
            <Footer />
        </ProjectsContext.Provider>
    );
};

export default Root;