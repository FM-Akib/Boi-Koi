//  import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 font-bold hover:bg-yellow-400 p-3 rounded-lg duration-500'>
            <a href={route.path} >{route.name}</a>
        </li>
    );
};

export default Link;