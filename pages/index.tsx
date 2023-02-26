import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/Header/Header'
import CardB from '@/components/card/card'
// import Dropdown from '@/components/Dropdown'
const inter = Inter({ subsets: ['latin'] })

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

      <main>
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

      <CardB />
      
      </main>
    </>
  )
}