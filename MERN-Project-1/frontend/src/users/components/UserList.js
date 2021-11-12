import React from 'react';
import '../../index.css'
import UserItem from './UserItem';



const UserList = (props) => {

    console.log(props.items);

    if (props.items.length === 0) {
        return (
            <div className="flex font-mono grid justify-items-center m-auto text-3xl  w-2/3 mt-80">
                <h1 className="text-5xl text-blue-600"><span className="text-red-500">No </span>User Found</h1>
            </div>
        )
    };
    return (
        <ul className="flex flex-wrap justify-center">
            {props.items.map(user => {
                return (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        image={user.image}
                        placeCount={user.placeCount}
                    />);

            })}
        </ul>
    )
};

export default UserList;