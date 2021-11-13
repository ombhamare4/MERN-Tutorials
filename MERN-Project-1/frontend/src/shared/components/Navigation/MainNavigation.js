import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import '../../../index.css';



const MainNavigation = (props) => {
    return (
        <MainHeader>
            <div className="flex">
                <div className="flex">
                    <i className="bi bi-text-right mr-5 hover:text-black p-2 transtion duration-500 lg:hidden"></i>
                    <h1 className="transtion duration-500 mx-5 p-2 font-bold hover:text-black">
                        <Link to='/' >Your Places</Link>
                    </h1>
                </div>
                <div className=" ">
                    <NavLinks />
                </div>
            </div>


        </MainHeader>
    )
};

export default MainNavigation;