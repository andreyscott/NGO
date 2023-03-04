import Image from 'next/image';
import React from 'react';
// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  { id: 1, image: 'https://www.forafrika.org/wp-content/uploads/2022/08/Emergency-Response-ForAfrika.jpg', text: 'Emergency response' },
  { id: 2, image: 'https://www.forafrika.org/wp-content/uploads/2022/08/For-Afrika-Water.jpg', text: 'Water, Sanitation and hygein' },
  { id: 3, image: 'https://www.forafrika.org/wp-content/uploads/2022/07/ForAfrika-Charity.jpg', text: 'Food Security and livelyhood' },
  { id: 4, image: 'https://www.forafrika.org/wp-content/uploads/2022/08/ForAfrika-Health.jpg', text: 'Health and Nutrition' },
  { id: 5, image: 'https://www.forafrika.org/wp-content/uploads/2022/08/Education-For-Afrika.jpg', text: 'Education' },
  { id: 6, image: 'https://www.forafrika.org/wp-content/uploads/2022/08/Economic-Empowerment.jpg', text: 'Economic-Empowerment' },
    { id: 7, image: 'https://www.forafrika.org/wp-content/uploads/2022/07/ForAfrika-Charity.jpg', text: 'Environment' },
    // { id: 8, image: 'https://www.forafrika.org/wp-content/uploads/2022/08/For-Afrika-Disaster-Management.jpg', text: 'Disaster Management' },
//   { id: 7, image: 'image7.jpg', text: 'Text 7' },
//   { id: 8, image: 'image8.jpg', text: 'Text 8' },
];

const ImageSlider = () => {
  return (
    <div className="flex w-full mx-auto lg:mx-auto lg:max-w-7xl flex-wrap">
        <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={7}
      // slidesPerView={4}
      // slidesPerView='auto'

      centeredSlides={true}

      className="mySwiper w-full"
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 5,
        },

        800: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
      navigation
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

      {data.map((item, index) => (
        
        // <div 
        // className='w-80 bg-green-600 z-40 h-96'
        // key={index} >
        
            <SwiperSlide
            key={item.id}
            className="w-full h-full flex flex-col items-center   mx-0 px-0justify-center"
            >
       <div className={`w-48 h-68 overflow-hidden md:w-64 md:h-96 ${index % 2 !== 0 ? 'pt-4 md:pt-0' : 'pt-4'}`}>

          <Image
          src={item.image} alt={item.text}
          width={80}
            height={200}
           className="w-full h-auto rounded-xl object-cover  growImg" />
          </div>
          <p className="mt-4 pt-3 w-full text-black italic">{item.text}</p>

            </SwiperSlide>
        // </div>
      ))}

      </Swiper>
    </div>
  );
};

export default ImageSlider;