//  import React from 'react';

const Link = ({route}) => {
    return (
        <li className='md:ml-24 font-bold text-green-500'>
            <a href={route.path} >{route.name}</a>
        </li>
    );
};

export default Link;