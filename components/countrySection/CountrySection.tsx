import Image from "next/image";
import Faq from "../Faq/Faq";
import { FaqSection } from "../FaqSection";


const CountrySectionData = [
    {
        number: '1',
        id: 'angola',
        title: 'Angola',
        description: 'Angola is one of Africa’s most resource-rich countries, yet two thirds of the population live on less than $2 a day and do not see the benefits. Additionally, the country has high infant mortality rates, poor access to clean water and sanitation , high illiteracy rates and is now facing its worst drought in 40 years.',
        image: 'https://www.forafrika.org/wp-content/uploads/2022/04/Water-For-Afrika.jpg',
        imageBottom: 'https://www.forafrika.org/wp-content/uploads/2022/04/Water-For-Afrika.jpg' 
    },

    {
        number: '2',
        id: 'central-african-republic',
        title: 'Central African Republic',
        description: 'The Central African Republic is one of the poorest countries in the world. The country has been in a state of conflict since 2013, with the majority of the population living in poverty and lacking access to basic services. The country is also one of the most vulnerable to climate change, with 80% of the population dependent on agriculture for their livelihoods.',
        image: 'https://dev.to/narottam04/free-tailwind-components-for-your-next-project-2gka',
        imageBottom: 'https://www.forafrika.org/wp-content/uploads/2023/01/CAR-ForAfrika.jpg',

    },
    {
        number: '3',
        id: 'mozambique',
        title:'Mozambique',
        description: 'Although the country is endowed with ample arable land, water, energy, as well as mineral resources, Mozambique is still grappling with a military insurgency in parts of the gas-rich province of Cabo-Delgado. An estimated three million people are projected to face high levels of food insecurity across the country due to the combined effects of the conflict, climate shocks and economic instability.',
        image: 'https://www.forafrika.org/wp-content/uploads/2022/04/Mozambique.jpg',
        imageBottom: 'https://www.forafrika.org/wp-content/uploads/2022/04/Mozambique.jpg'


    },

    {
        number: '4',
        id: 'south-africa',
        title: 'South Africa',
        description: 'South Africa is the most developed country in Africa, yet 40% of the population still live in poverty. The country is also facing significant challenges in the areas of water, sanitation and hygiene, climate change, food security and education.',
        image: 'https://www.forafrika.org/wp-content/uploads/2022/04/ForAfrika-Food-Security.jpg',
        imageBottom: 'https://www.forafrika.org/wp-content/uploads/2023/01/CAR-ForAfrika.jpg',
    },
]
    

const CountrySection = () => {
    return (
        <div className="py-32 bg-[#f3efea] ">
            <div className="w-full mx-auto px-4">
                <div
                id="angola"
                 className="flex flex-col items-start px-2 justify-start">
                    <h1  className="text-5xl font-normal font-Regular font-serif mb-5  text-[#262633]">
                        1. Angola</h1>

                    </div>
                    {/* discription */}
                    <div className="flex border-l ml-9 px-5 py-2 border-black flex-col items-start justify-start">
                        <p className="text-xl font-normal font-serif text-[#262633]">
                            We are working in 4 countries across Africa to improve the lives of the most vulnerable people.</p>
                            </div>

                            {/* Image Right FAQ Component on left Section  */}
                            <div className="flex flex-col lg:flex-row items-end justify-between">

                                {/* FAQ Component on left Section  */}
                                <div className="flex flex-col lg:w-[35%] w-full h-full mt-20 items-start md:items-center justify-start md:justify-center">
                                    {/* <Faq /> */}
                                    <FaqSection />
                                    </div>

                                    {/* Image Right FAQ Component on left Section  */}
                                    <div className="flex flex-col w-full mx-1 h-[500px] px-2 lg:w-[65%]  items-center justify-center">
                                        {/* <ImageRight /> */}

                                        <Image
                                            src="https://www.forafrika.org/wp-content/uploads/2022/04/Water-For-Afrika.jpg"
                                            alt="Picture of the author"
                                            width={500}
                                            height={500}
                                            className="object-cover rounded-xl w-full h-full"
                                        />
                                        </div>

                                        </div>
                                        {/* stats  */}
                                        <div className="flex flex-col py-20  w-full">
                                            <h1 className="text-3xl font-normal text-start font-serif mb-5 text-[#262633]">
                                                angola at a glance in 2022
                                                </h1>

                                                {/* grid 2 large 4   */}
                                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                                  <div className="flex flex-col items-start border-t-[1px] border-black justify-center">

<h6 className="text-2xl font-normal font-serif text-[#262633]">1,000,000</h6>
<p className="text-lg font-normal font-serif text-[#262633]">People in need</p>
</div>
<div className="flex flex-col items-start border-t-[1px] border-black justify-center">

<h6 className="text-2xl font-normal font-serif text-[#262633]">1,000,000</h6>
<p className="text-lg font-normal font-serif text-[#262633]">People in need</p>
</div>
<div className="flex flex-col items-start border-t-[1px] border-black justify-center">

<h6 className="text-2xl font-normal font-serif text-[#262633]">1,000,000</h6>
<p className="text-lg font-normal font-serif text-[#262633]">People in need</p>
</div>
<div className="flex flex-col items-start border-t-[1px] border-black justify-center">

<h6 className="text-2xl font-normal font-serif text-[#262633]">1,000,000</h6>
<p className="text-lg font-normal font-serif text-[#262633]">People in need</p>
</div>
</div>
</div>

{/* Full width Image Section */}
<div className="flex flex-col w-full h-96 items-center justify-center">
    <Image
        src="https://www.forafrika.org/wp-content/uploads/2022/04/Water-For-Afrika.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
        className="object-cover w-full h-full"
        // layout="fill"
    />
</div>




                                        </div>





                      
        </div>
    );
}

export default CountrySection;