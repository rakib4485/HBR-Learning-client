import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Navbar from '../pages/shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='w-[90%] md:w-[80%] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;