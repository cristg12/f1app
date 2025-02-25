import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return(
    <>
    <Head>
      <title>Panel portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* iconos */}
      <link 
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer" />
      <script src="https://cdn.tailwindcss.com"></script>

    </Head>
    <Component {...pageProps} />
    </>
  ) 
}
