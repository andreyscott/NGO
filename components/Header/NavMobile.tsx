import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import  {useRouter} from 'next/router'

// import data
import { nav } from '../../data';

// ({ title, score }: { title: string, score: number })
 const NavMobile = ({ navMobile }) => {
  
  const router = useRouter()
  const [showLinks, setShowLinks] = useState(false)

  const handleNavClick = async (link: string) => {
    await router.push(`/${link}`)
    setShowLinks(false)
    const el = document.getElementById(link)
    el?.scrollIntoView({ behavior: 'smooth' })
  }
  // add an onClick dropdown menu

 const [active, setActive] = React.useState(false);
 // controlling navbar hover elements to show popup
 const [hovered, setHovered] = useState<string | null>(null)

 const [isActive, setIsActive] = useState(false);

 useEffect(() => {
   // scroll event
   window.addEventListener('scroll', () => {
     window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
   });
 });

  return (
    <nav
      className={`${
        navMobile ? 'min-h-screen bg-black' : 'min-h-0'
      } w-full fixed top-0 left-0 right-0 bg-primary-400 -bottom-12 -z-10 lg:hidden overflow-hidden transition-all h-0`}
    >
      <ul className='w-full top-0 left-0 h-full flex flex-col justify-center items-center gap-y-8'>
        {nav.map((item, idx) => {
          return (
            <li
            className='flex  flex-col w-44 group justify-center text-center items-center'
             key={idx}
              onClick={() => setActive(!active)}
              onMouseEnter={() => setHovered(item.title)}
              onMouseLeave={() => setHovered(null)}
             >


              <a
              className={`
              ${item.link ? 'text-primary-200' : 'text-white'}
              text-body-md group-hover:text-[#a50000] transition flex flex-col items-center justify-center`
              }
               href={item.link}>
                {item.title}
              </a>

{hovered == item.title && item.additionalLinks && (
                        <div className=" flex flex-col mt-5 items-center justify-center bg-white rounded-md ">
                          <div className="flex flex-col items-center justify-center text-black truncate ">
                            {item.additionalLinks.map((adLink) => {
                              return (
                                <button
                                  onClick={() => router.push(adLink.link)}
                                  className="w-full pt-2 pb-2 pl-4 pr-4 text-sm opacity-100 semibold md:text-md hover:bg-black hover:text-white "
                                  key={adLink.title}
                                >
                                  <div className="mr-8">{adLink.title}</div>
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )}


            </li>
          );
        })}
      </ul>     
    </nav>
  );
};

export default NavMobile;
