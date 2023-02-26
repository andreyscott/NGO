import React from 'react';

// import data
import { nav } from '../../data';

const NavMobile = ({ navMobile }) => {
  return (
    <nav
      className={`${
        navMobile ? 'min-h-screen' : 'min-h-0'
      } w-full fixed top-0 left-0 right-0 bg-primary-400 -bottom-12 -z-10 lg:hidden overflow-hidden transition-all h-0`}
    >
      <ul className='w-full top-0 left-0 h-full flex flex-col justify-center items-center gap-y-8'>
        {nav.map((item, idx) => {
          return (
            <li
            className='flex w-44 group justify-center text-center items-center'
             key={idx}>
              <a
              //  className='text-white text-body-md'
              className={`
              ${item.active ? 'text-primary-200' : 'text-white'}
              text-body-md group-hover:text-black transition`
              }
               href={item.link}>
                {item.title}
              </a>

              {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2"
    className="w-5 text-white h-5 group-hover:text-black hover:translate-x-2 duration-200 ease-in-out transition fill-current group-hover:scale-125" viewBox="0 0 24 24">
     <path d="M5 12h14M12 5l7 7-7 7"></path>
   </svg> */}

            </li>
          );
        })}
      </ul>
      {/* buttons */}
     
    </nav>
  );
};

export default NavMobile;
