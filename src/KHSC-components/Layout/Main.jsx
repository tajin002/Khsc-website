import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Header/Banner';
import Navbar from '../Header/Navbar';
import Footer from '../Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Banner/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;