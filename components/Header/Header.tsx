/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';

import motion from 'framer-motion'
import Africa from '@/public/ForAfrika.svg'

// import header data
import { header } from '../../data';

// import components
import Nav from './Nav';
import NavMobile from './NavMobile';


// import icons
import Link from 'next/link';
import { MotionConfig } from 'framer-motion';
import Image from 'next/image';



const Header = ( ) => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    // scroll event
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  // destructure header data
  const { logo, logow  } = header;
  return (
    <header
      className={`${
        isActive ? ' py-[16px]' : 'bg-white bg-cover bg-no-repeat py-[20px]'
      } fixed bg-banner left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[60px] z-30 transition-all duration-300`}
    >
      {/* logo */}
      <Link href='/'>
          <Image 
        className='h-[50px]' 
        src={Africa}
        width={300}
        height={200}
        
        alt='TEST' />

        
      </Link>

      {/* nav - initially hidden - show in desktop mode */}
      <Nav />

      {/* nav menu button - hide on desktop */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className='lg:hidden absolute right-4 duration-1000 ease-in-out '
      >
        {navMobile ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className='text-3xl w-10 h-10 text-white hover:text-[#a50000] duration-300 ease-in-out cursor-pointer' >
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> 

        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="w-6 h-6 text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg> 
          
         
        )}
      </div>

      {/* nav mobile - hide on desktop */}
      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;