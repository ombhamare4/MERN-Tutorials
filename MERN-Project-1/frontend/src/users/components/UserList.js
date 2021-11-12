import React from 'react';
import '../../index.css'
import UserItem from './UserItem';
const UserList = (props) => {

    if (props.items.length === 0) {
        return (
            <div className="flex bg-blue-700 text-center m-auto text-3xl justify-items-center w-3/12 mt-96 p-5 text-white">
                <h1>No User Found</h1>
            </div>
        )
    };
    return (
        <ul>
            {props.items.map(user => {
                return (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        price={user.price}
                    />);

            })}
        </ul>
    )
};

export default UserList;