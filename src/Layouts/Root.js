import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
// import NavBar from '../Components/NavBar';

const Root = () => {
    return (
        <div>
            {/* <NavBar /> */}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;