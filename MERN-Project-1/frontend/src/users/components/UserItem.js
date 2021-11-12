import React from 'react';

const UserItem= (props) =>{
    return(
    
        <div className="d-flex m-auto justify-content-center text-center">
            <h1>{props.name}</h1>
            <h1>{props.price}</h1>
        </div>
    )
};

export default UserItem;