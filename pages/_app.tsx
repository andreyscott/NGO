
import React, {useEffect} from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);
  return <Component {...pageProps} />
}
