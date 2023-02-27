import Image from "next/image";



const BottomSection = () => {
    return (
        <div className="bg-slate-200">
        <div className="py-20 ">
           <div className=" w-full max-w-2xl  text-center mx-auto">

          
<h1 className="md:text-3xl text-2xl pb-2 font-bold text-center text-black">Our Work</h1>
<p className=" text-xl md:text-2xl font-normal text-center text-black font-serif"> We listen to the priorities of our people and together design programmes that give all African people the ability to thrive.</p>

</div>

            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* create a background Image  with a button on the top right and a text in the center  */}
                <div className="relative w-full md:w-1/2 h-96">
                    <Image
                    src='https://www.forafrika.org/wp-content/uploads/2022/08/Afrika-Thrive.jpg'
                    height={200}
                    width={600}
                    alt="A village"
                    />
                    <div className="absolute top-0 right-0">
                        <button className="bg-white text-black px-4 py-2 rounded-full">Learn More</button>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <h1 className="text-white text-2xl font-bold">Afrika Thrive</h1>
                            <p className="text-white">We listen to the priorities of our people and together design programmes that give all African people the ability to thrive.</p>
                            </div>

                            </div>

                            {/* create a grid of  4 images with a button on the top right with 2 rows and 2 columns */}

                            <div className=" w-full md:w-1/2 h-fit">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative">
                                        <Image
                                        src='https://www.forafrika.org/wp-content/uploads/2022/12/ForAfrika-Feeding.jpg'
                                        height={180}
                                        width={500}
                                        alt="A child eating"
                                        />
                                        <div className="absolute top-0 right-0">
                                            <button className="bg-white text-black px-4 py-2 rounded-full">Learn More</button>
                                            </div>

                                            </div>
                                            <div className="relative">
                                        <Image
                                        src='https://www.forafrika.org/wp-content/uploads/2022/12/ForAfrika-Feeding.jpg'
                                        height={180}
                                        width={500}
                                        alt="A child eating"
                                        />
                                        <div className="absolute top-0 right-0">
                                            <button className="bg-white text-black px-4 py-2 rounded-full">Learn More</button>
                                            </div>

                                            </div>
                                            <div className="relative">
                                        <Image
                                        src='https://www.forafrika.org/wp-content/uploads/2022/12/ForAfrika-Feeding.jpg'
                                        height={180}
                                        width={500}
                                        alt="A child eating"
                                        />
                                        <div className="absolute top-0 right-0">
                                            <button className="bg-white text-black px-4 py-2 rounded-full">Learn More</button>
                                            </div>

                                            </div>
                                            <div className="relative">
                                        <Image
                                        src='https://www.forafrika.org/wp-content/uploads/2022/12/ForAfrika-Feeding.jpg'
                                        height={180}
                                        width={500}
                                        alt="A child eating"
                                        />
                                        <div className="absolute top-0 right-0">
                                            <button className="bg-white text-black px-4 py-2 rounded-full">Learn More</button>
                                            </div>

                                            </div>
                                            </div>
                                            </div>
                                            </div>
        </div>
        </div>
    );
}

export default BottomSection;