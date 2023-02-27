/* eslint-disable react/jsx-no-undef */

import Image from 'next/image';


import child from 'https://www.forafrika.org/wp-content/uploads/2022/08/Feed-a-child.jpg'


const FactSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col items-center md:w-3/5 justify-center">
                <Image 
                 src={'https://www.forafrika.org/wp-content/uploads/2022/08/Feed-a-child.jpg'}
                 width={300}
                  height={300} 
                  className="w-full h-auto rounded-xl object-cover"

                 alt="feed a child" />

                </div>

                <div className="flex flex-col text-left md:w-2/5 px-6 justify-center">
                    <h2 className="text-4xl font-normal font-serif text-[#262633] text-center md:text-left helvetica-neue-regular">
                    Did you know that by giving $96, you will feed a child in Africa for an entire year? That’s only $8 per month!
                    </h2>

                    <h5 className="text-2xl font-normal font-serif text-[#262633] text-center md:text-left ">
                    This is a whole lot more than food. Find out what it means to children living in low-income countries in Africa.
                    </h5>

                        {/* Donate now link underline  */}
                        <div className="flex text-left justify-start my-4 border-b-2 w-fit transition-all duration-1000 ease-out border-white hover:border-transparent">
                <a href="#" className="text-[#262633] text-base md:text-lg font-semibold pb-2">Donate now</a>
</div>                

                        </div>
                        </div>
    );
}

export default FactSection