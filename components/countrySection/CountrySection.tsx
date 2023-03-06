import Image from "next/image";
import Faq from "../Faq/Faq";


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
            <div className="container mx-auto px-4">
                <div
                id="angola"
                 className="flex flex-col items-start justify-start">
                    <h1  className="text-5xl font-normal font-Regular font-serif mb-5  text-[#262633]">Our Impact</h1>

                    </div>
                    {/* discription */}
                    <div className="flex mr-16 border-l border-black px-5 flex-col items-center justify-center">
                        <p className="text-2xl font-normal font-serif text-[#262633]">
                            We are working in 4 countries across Africa to improve the lives of the most vulnerable people.</p>
                            </div>

                            {/* Image Right FAQ Component on left Section  */}
                            <div className="flex flex-col lg:flex-row  items-center justify-center">

                                {/* FAQ Component on left Section  */}
                                <div className="flex flex-col lg:w-2/5 items-center justify-center">
                                    <Faq />
                                    </div>

                                    {/* Image Right FAQ Component on left Section  */}
                                    <div className="flex flex-col lg:w-3/5 items-center justify-center">
                                        {/* <ImageRight /> */}

                                        <Image
                                            src="https://www.forafrika.org/wp-content/uploads/2022/04/Water-For-Afrika.jpg"
                                            alt="Picture of the author"
                                            width={500}
                                            height={500}
                                        />
                                        </div>

                                        </div>
                                        {/* stats  */}
                                        <div className="flex flex-col items-center justify-center">
                                            <h1 className="text-3xl font-normal font-serif mb-5 text-[#262633]">
                                                angola at a glance in 2022
                                                </h1>

                                                {/* grid 2 large 4   */}
                                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                  <div className="flex flex-col items-center border-t-2 border-black justify-center">

<h6 className="text-2xl font-normal font-serif text-[#262633]">1,000,000</h6>
<p className="text-lg font-normal font-serif text-[#262633]">People in need</p>
</div>
<div className="flex flex-col items-center border-t-2 border-black justify-center">

<h6 className="text-2xl font-normal font-serif text-[#262633]">1,000,000</h6>
<p className="text-lg font-normal font-serif text-[#262633]">People in need</p>
</div>
<div className="flex flex-col items-center border-t-2 border-black justify-center">

<h6 className="text-2xl font-normal font-serif text-[#262633]">1,000,000</h6>
<p className="text-lg font-normal font-serif text-[#262633]">People in need</p>
</div>
</div>
</div>




                                        </div>





                      
        </div>
    );
}

export default CountrySection;