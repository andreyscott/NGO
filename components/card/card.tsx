import React from 'react';

import Red from '@/public/Pattern-background-red.svg'
import Afr from '@/public/Pattern-background-red.svg'
import { motion } from 'framer-motion';
import Image from 'next/image';


const CardB = () => {
    return (
        <div className="h-full w-full">
        <div className="relative overflow-hidden rounded-lg mx-auto shadow-lg w-[40rem]  h-96 md:h-[26rem] cursor-pointer">
          <Image className="object-cover w-full h-full" 
          src={Afr}
            width={600}
            height={500}
          alt="Flower and sky"
          />
      
          <div className="absolute top-0 text-left font-serif left-0 px-6 py-8">
            <h4 className="mb-6 md:mb-7 text-3xl font-normal tracking-tight text-white"
            // font-family: "Untitled Regular", Helvetica, Arial, sans-serif;
            >The challenges of our continent are diverse and complex but together we can overcome them</h4>
            <p 
            // font-family: "Söhne Leicht", Helvetica, Arial, sans-serif;
            className="leading-normal text-xl text-gray-100">
                Your support means access to education, food, water, health, income, and dignity for those who need it most. Our locally led interventions and your generosity will save lives, build resilience, and bring hope as we work together for an Africa that thrives.
                </p>

                {/* Donate now link underline  */}
                <div className="flex text-left justify-start mt-6 border-b-2 w-fit transition-all duration-1000 ease-out border-white hover:border-transparent">
                <a href="#" className="text-white text-xl font-semibold pb-2">Donate now</a>
</div>                
          </div>
        </div>
      
        </div>
    );
}

export default CardB;