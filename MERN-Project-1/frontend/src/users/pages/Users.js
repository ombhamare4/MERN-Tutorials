import React from 'react';
import UserList from '../components/UserList';


const Users = (props) => {

    const DUMMY_Users = [
        {
            id: '1',
            name: 'Tim Hook',
            image: 'https://cdn.dribbble.com/users/1355613/screenshots/15252730/media/28f348daf9654c440f5dcf398d8e097a.jpg?compress=1&resize=800x600',
            placeCount: '5'
        },
        {
            id: '2',
            name: 'Max William',
            image: 'https://cdn.dribbble.com/users/1355613/screenshots/15594500/media/aea41a7cf22d09be0bb41afa85be2f5e.jpg?compress=1&resize=800x600',
            placeCount: '10'
        },
        {
            id: '3',
            name: 'Tim Hook',
            image: 'https://cdn.dribbble.com/users/1355613/screenshots/15252730/media/28f348daf9654c440f5dcf398d8e097a.jpg?compress=1&resize=800x600',
            placeCount: '5'
        },
        {
            id: '4',
            name: 'Max William',
            image: 'https://cdn.dribbble.com/users/35810/screenshots/12863854/media/a47d93251876a69537c3ae3ac0122a6c.jpg?compress=1&resize=1600x1200',
            placeCount: '10'
        },
        {
            id: '5',
            name: 'Tim Hook',
            image: 'https://cdn.dribbble.com/users/1355613/screenshots/15252730/media/28f348daf9654c440f5dcf398d8e097a.jpg?compress=1&resize=800x600',
            placeCount: '5'
        },
        {
            id: '6',
            name: 'Max William',
            image: 'https://cdn.dribbble.com/users/1355613/screenshots/15594500/media/aea41a7cf22d09be0bb41afa85be2f5e.jpg?compress=1&resize=800x600',
            placeCount: '10'
        },
        {
            id: '7',
            name: 'Tim Hook',
            image: 'https://cdn.dribbble.com/users/1355613/screenshots/15252730/media/28f348daf9654c440f5dcf398d8e097a.jpg?compress=1&resize=800x600',
            placeCount: '5'
        },
        {
            id: '8',
            name: 'Max William',
            image: 'https://cdn.dribbble.com/users/1355613/screenshots/15594500/media/aea41a7cf22d09be0bb41afa85be2f5e.jpg?compress=1&resize=800x600',
            placeCount: '10'
        },
        {
            id: '9',
            name: 'Tim Hook',
            image: 'https://cdn.dribbble.com/users/1355613/screenshots/15252730/media/28f348daf9654c440f5dcf398d8e097a.jpg?compress=1&resize=800x600',
            placeCount: '5'
        },
        {
            id: '10',
            name: 'Max William',
            image: 'https://cdn.dribbble.com/users/1355613/screenshots/15594500/media/aea41a7cf22d09be0bb41afa85be2f5e.jpg?compress=1&resize=800x600',
            placeCount: '10'
        }
    ];

    return (
            <UserList items={DUMMY_Users} />  
    )
};

export default Users;