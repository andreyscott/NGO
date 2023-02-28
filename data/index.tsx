import Logow from '@/public/thirteen.svg';
import Logo from '@/public/next.svg';
import Africa from '@/public/ForAfrika.svg'

export const header = {
    logo: Logo,
    btnSignupText: 'Get Started',
    logow: Logow,
  };

  export const nav = [
    {
      title: 'Our work',
      link: '/our-work',
      additionalLinks: [
        {
          title: 'Emergency Response',
          link: '/our-work/emergency-response',
        }, 
        {
          title: 'Food Scarcity and livelihoods',
          link: '/our-work/food-scarcity-and-livelihoods',
        },
        {
          title: 'Water, Sanitation and Hygiene',
          link: '/our-work/water-sanitation-and-hygiene',
        },
        {
          title: 'Education',
          link: '/our-work/education',
        },
      
        {
          title: 'Our Impact',
          link: '/our-work/our-impact',
        },
        {
          title: 'Our Approach',
          link: '/our-work/our-approach',
        },
      ]
    },
   {
      title: 'Where we work',
      link: '/where-we-work',
    },
    {
      title: 'Stories',
      link:"/stories",
    },

    {
      title: 'About us',
      link: '/about',
      additionalLinks: [
        {
          title: 'Our Story',
          link: '/our-story',
        },
        {
          title: 'Our brand',
          link: '/our-brand',
        },
        {
          title: 'Our Team',
          link: '/teams',
        },
        {
          title: 'Contact',
          link: '/contact', 
        },
        
      ]
    },  

];



