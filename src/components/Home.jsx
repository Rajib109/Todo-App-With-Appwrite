import React from 'react';
import { Outlet } from 'react-router-dom';
import {Header,Footer} from './index'

const Home = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Home;
