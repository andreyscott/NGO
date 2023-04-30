import Logow from '@/public/thirteen.svg';
import Logo from '@/public/next.svg';
// import Africa from '@/public/ForAfrika.svg'

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


let timelineElements = [
  {
    id: 1,
    title: "Finding our feet",
    location: "Dragontail, Ascana",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
    buttonText: "View Frontend Projects",
    date: "August 2016 - present",
    icon: "work",
  },
  {
    id: 2,
    title: "Learning the ropes",
    location: "Skystead, Craonia",
    description:
      "Working hand-in-hand with front-end developers by providing the outward facing web application elements server-side logic. Creating the logic to make the web app function properly, and accomplishing this through the use of server-side scripting languages.",
    buttonText: "View Backend Projects",
    date: "June 2013 - August 2016",
    icon: "work",
  },
  {
    id: 3,
    title: "First Yes",
    location: "South Warren, Geshington",
    description:
      "Assessing the quality of specifications and technical design documents in order to ensure timely, relevant and meaningful feedback.",
    buttonText: "Company Website",
    date: "September 2011 - June 2013",
    icon: "work",
  },
  {
    id: 4,
    title: "Oak Ridge College",
    location: "South Warren, Geshington",
    description:
      "Online Course in Magical Beasts and Wonders of the World - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
    buttonText: "Course Certificate",
    date: "September 2011",
    icon: "school",
  },
  {
    id: 5,
    title: "Hawking College",
    location: "Skystead, Craonia",
    description:
      "College - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
    buttonText: "College Projects",
    date: "2007 - 2011",
    icon: "school",
  },
  {
    id: 6,
    title: "Marble Hills Grammar School",
    location: "Dragontail, Ascana",
    description:
      "Highschool - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
    date: "2003 - 2007",
    icon: "school",
  },
]

export default timelineElements




