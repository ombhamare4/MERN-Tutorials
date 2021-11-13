import React from 'react';

import '../../../index.css';

const MainHeader = (props) => {
    return (
        <header className="bg-blue-500 p-7 text-xl text-white ">
            {props.children}
        </header>
    )
};

export default MainHeader;