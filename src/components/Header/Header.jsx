// import React from 'react';
import logo from '../../assets/logo_boikoi.png'
import Link from '../Link/Link';
const Header = () => {
    const routes = [
        {
          id: 1,
          name: "Home",
          path: "/home",
        },
        {
          id: 2,
          name: "Books",
          path: "/books",
        },
        {
          id: 3,
          name: "Authors",
          path: "/authors",
        },
        {
          id: 4,
          name: "Categories",
          path: "/categories",
        }
      ];
      
    return (
        <nav className='w-full h-24 shadow-lg flex justify-between'>
            <img className='h-24 w-50 p-2 ml-10' src={logo} alt="logo"/>
           <ul className='md:flex  items-center mr-24'>
            {
            routes.map(route=><Link
            key={route.id}
            route={route}
            ></Link>)
            }
            </ul>
        </nav>
    );
};

export default Header;