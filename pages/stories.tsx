/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ClientLayout from "@/layout/Client";
import Image from 'next/image';
import { Title } from "@/components/Shared/Title/title";
const Stories = () => {
    return (
        <ClientLayout >
        <section className="w-screen bg-white  md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12 ">
                <div className="flex w-full justify-start items-center">
                    <Title title="Voices of Africa"
                    padding="py-20" 
                    paragraph="Hear from those who are working together for Africa to thrive. Every one of them - a story worth sharing."
                    />
                </div>
            </div>

            <div className="w-full max-w-5xl h-[700px] lg:max-w-6xl px-3 lg:px-6 py-16 lg:py-28 relative mx-auto">
                <Image
                    src="https://www.forafrika.org/wp-content/uploads/2022/04/Humanitarian-Logistics.jpg"
                    layout="fill"
                    className="rounded-xl"
                    alt=""
                    />

                    </div>
{/* text center section  */}
<div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-16 lg:py-28 relative mx-auto">
                    <div className="mx-auto text-center lg:mx-0 lg:flex-auto">
            <h5
                // font-family: "Söhne Leicht", Helvetica, Arial, sans-serif;
            className="text-4xl font-extralight  leading-[50px] tracking-wider text-[#262533] sm:text-4xl">
                    Our time in the field gives us a personal view on what it's like to get a meal at school each day. The mothers, children and communities that we’ve met inspire our ideas and, often times, solutions. Every one of them has a story worth sharing.
          
            </h5>
            </div>
            </div>
                    
        </section>
        </ClientLayout>
    );
}

export default Stories;