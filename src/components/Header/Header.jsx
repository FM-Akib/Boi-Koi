// import React from 'react';
import { useState } from 'react';
import logo from '../../assets/logo_boikoi.png'
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [menu,setMenu]=useState(false);
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
      console.log(menu)
    return (
        <nav className='shadow-lg md:h-24 h-16 flex items-center justify-between bg-yellow-300'>
            <img className='md:h-24 md:w-50 w-38 h-16 p-2 md:ml-10' src={logo} alt="logo"/>

           <ul className={`md:flex absolute p-4 md:static md:rounded-lg duration-500 pl-10 bg-yellow-300 ${menu===true?"top-20":"-top-56"}`}>
            {
            routes.map(route=><Link
            key={route.id}
            route={route}
            ></Link>)
            }
            </ul>

            <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                <span>{menu===true? <XMarkIcon className="h-6 w-6 text-black-500 mr-4" />
                    :<Bars3Icon className="h-6 w-6 text-black-500 mr-4" />}
                </span>
           
            
            </div>
        </nav>
    );
};

export default Header;