import React from 'react';
import ImageSlider from '../ImageSlider';

const ImageSwipper = () => {
    return (
        <div className="px-2 py-20">
            {/* Title of the Section  */}
            <div className=" w-full max-w-2xl md:max-w-3xl pb-12 md:mb-2 text-center mx-auto">

          
            <h1 className="md:text-3xl text-2xl font-bold pb-4 text-center text-tblack">Our Work</h1>
            <p className=" text-xl md:text-2xl font-normal text-center text-tblack font-serif"> We listen to the priorities of our people and together design programmes that give all African people the ability to thrive.</p>

            </div>

            <ImageSlider />
        </div>
    );
}

export default ImageSwipper;