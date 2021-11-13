import React from 'react';
import {NavLink} from 'react-router-dom';

import '../../../index.css';



const NavLinks = (props) => {
    return (
       <ul className="flex">
           <li className="transition duration-500 p-2 hover:bg-white hover:text-blue-500 mx-3">
               <NavLink to='/' exact>All Users</NavLink>
           </li>
           <li className="transition duration-500 p-2 hover:bg-white hover:text-blue-500 mx-3" >
               <NavLink to='/u1/places'>My Places</NavLink>
           </li>
           <li className="transition duration-500 p-2 hover:bg-white hover:text-blue-500 mx-3">
               <NavLink to='/places/new'>Add Place</NavLink>
           </li>
           <li className="transition duration-500 p-2 hover:bg-white hover:text-blue-500 mx-3">
               <NavLink to='/auth'>Authenticate</NavLink>
           </li>
       </ul>
    )
};

export default NavLinks;