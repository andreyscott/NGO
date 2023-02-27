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
    // { id: 7, image: 'https://www.forafrika.org/wp-content/uploads/2022/08/For-Afrika-Environment.jpg', text: 'Environment' },
    // { id: 8, image: 'https://www.forafrika.org/wp-content/uploads/2022/08/For-Afrika-Disaster-Management.jpg', text: 'Disaster Management' },
//   { id: 7, image: 'image7.jpg', text: 'Text 7' },
//   { id: 8, image: 'image8.jpg', text: 'Text 8' },
];

const ImageSlider = () => {
  return (
    <div className="flex flex-wrap">
        <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='w-full'
    >

      {data.map((item, index) => (
        
        <div key={item.id} >
        
            <SwiperSlide>
       <div className={`w-full px-2 ${index % 2 !== 0 ? 'pt-4 md:pt-0' : 'pt-4'}`}>

          <Image
          src={item.image} alt={item.text}
          width={80}
            height={200}
           className="w-full h-auto rounded-xl object-cover" />
          <p className="mt-2 text-black italic">{item.text}</p>
          </div>
            </SwiperSlide>
        </div>
      ))}

      </Swiper>
    </div>
  );
};

export default ImageSlider;