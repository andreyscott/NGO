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
      title: 'About',
      link: '/about',
      additionalLinks: [
        {
          title: 'Our Team',
          link: '/teams',
        },
        {
          title: 'Contact',
          link: '/contact', 
        },
        {
          title: 'Trigan Citizenship',
          link: '/about/trigan-citizenship', 
        },
        {
        title: 'Social Empowerment',
        link: '/about/social-empowerment-and-community-impact', 
      },
      ]
    },  
   {
      title: 'Blog',
      link: '/blog',
    },
    {
      title: 'Project',
      link:"/project",
      additionalLinks: [
        {
            title: "Project Overview",
            link:"/project",
          },
         {
          title: 'Governments and Local Authorities',
          link: '/project/government-and-local-authority-partnerships',
        },
        {
          title: 'Charities and Third Sector Organisations',
          link: '/project/charities-and-third-sector-opportunities',
        },
        {
          title: 'Social Enterprises',
          link: '/project/social-enterprises',
        },
    
      ]
    },

];



