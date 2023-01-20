import Head from "next/head";
import Main from "../components/Main";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className='text-black'>
      <NextSeo
        title='Home: airlink'
        description='Welcome to airlink homepage.'
        canonical='https://nine4-2.vercel.app/'
        openGraph={{
          url: 'https://nine4-2.vercel.app/',
        }}
      />
      <Head>
        <title>Darklink</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel="manifest" href="/site.webmanifest" /> 
        
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.3.1/css/all.css'
        />
      </Head>
      <Main />
    </div>
  )
}
