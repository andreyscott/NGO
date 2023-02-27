import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/Header/Header'
import CardB from '@/components/card/card'
import ImageSwipper from '@/components/ImageSlideSection'
import FactSection from '@/components/FactSection'
import CardY from '@/components/card/CardY'
import BottomSection from '@/components/BottomSection/BottomSection'
import Footer from '@/components/Footer'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className='bg-slate-200'>
      <div className="relative">
        <div className="bg-hero-section bg-no-repeat h-screen bg-center bg-cover">
          <video autoPlay loop muted className="absolute inset-0 object-cover h-screen xl:h-auto">
            <source
              src="Home/robovice-banner.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 w-full max-w-3xl ">
            {/* <Navbar /> */}
            <h1 className="sm:text-4xl leading-loose tracking-wider  text-3xl font-bold my-32 mx-16 text-left text-white">
            Empower 20 million Africans
            <br />
            to sustainably provide
            <br />
            for themselves my 2023
            </h1>
          </div>
        </div>
      </div>

<div className='w-full max-w-5xl px-2 py-6 relative mx-auto'>
  <div className='hidden md:flex justify-end items-end'>
    <Image
    src='https://www.forafrika.org/wp-content/uploads/2022/08/Afrika-Thrive.jpg'
    height={200}
    width={600}
    alt='old woman smiling'
    />
  </div>
  <div className='hidden md:flex justify-center items-center'>
    <Image
    src='https://www.forafrika.org/wp-content/uploads/2022/12/ForAfrika-Feeding.jpg'
    height={180}
    width={500}
    alt='a child eating'
    />
  </div>
<div className='md:absolute left-0 top-40'>

      <CardB />
</div>


</div>

<ImageSwipper />
<FactSection />
<CardY />
<BottomSection />

<Footer />

      
      </main>
    </>
  )
}
