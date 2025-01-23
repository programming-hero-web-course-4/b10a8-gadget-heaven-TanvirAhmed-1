import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='bg-white max-w-[1600px] mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;