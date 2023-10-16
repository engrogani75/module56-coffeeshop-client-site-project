import React from 'react';
import Header from '../Pages/Home/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;