import React from 'react';
import '../../index.css'
import {Link} from 'react-router-dom';
const UserItem = (props) => {
    return (
        <Link to={`/${props.id}/places`}>
        <div className="m-5  border-solid border-4 border-blue-500  w-80 mr-5 p-4 text-center items-center rounded-full backdrop-filter backdrop-hue-rotate-15 ">
            <div className="p-5 ">
                <img className="w-56  rounded-full" src={props.image} alt="..." />
            </div>
            <div className="bg-red-500 m-auto rounded-full">
                <h1 className="">{props.name}</h1>
                <h1 className="">{props.placeCount}</h1>
            </div>
        </div>
        </Link>
    )
};

export default UserItem;