import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

export default function index() {
  return (
    <Layout>
      <div>
        {' '}
        <section className='text-gray-600 body-font bg-[#F4F4F7]'>
          <div className='max-w-screen-2xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div className='lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center'>
              <h1 className='mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900'>
                Portals
              </h1>
              <p className='mb-4 xl:w-3/4 text-gray-600 text-lg'>
                Share your bio link in the physical world with just one tap, no
                app needed.
              </p>
              <div className='flex justify-center'>
                <Link
                  className=' bg-[#8BC940] inline-flex items-center px-5 py-3 mt-2 font-medium
                   text-white transition duration-500 ease-in-out transform  
                   border rounded-lg bg-[#8BC940  '
                  href='/#'
                >
                  <span className='justify-center'>Find out more</span>
                </Link>
              </div>
            </div>
            <div className='xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10'>
              <Image
                className='w-80 md:ml-1 ml-24'
                alt='iPhone-12'
                src='/images/iPhone-12-Mockup.png'
                width={300}
                height={200}
              />
            </div>
          </div>

          {/* <!-- Start block --> */}
          <section className='bg-white m-auto w-4/5 my-4 dark:bg-gray-900'>
            <div
              className='grid max-w-screen  bg-white  px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12
           lg:pt-28 m-auto'
            >
              <div class='hidden lg:mt-0 lg:col-span-5 lg:flex'>
                <Image
                  className='w-80 md:ml-1 ml-24'
                  alt='iPhone-12'
                  src='/images/iPhone-12-Mockup.png'
                  width={300}
                  height={200}
                />
              </div>
              <div className='mr-auto place-self-center lg:col-span-7'>
                <h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
                  How It Works
                </h1>
                <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
                  Click below to order your NFC Portal with free shipping and
                  start sharing your page in a new way.
                </p>
                <div className='flex justify-center'>
                  <Link
                    className='inline-flex items-center px-5 py-3  mt-2 font-medium text-white 
                    transition duration-500 ease-in-out transform  border rounded-lg
                     bg-[#8BC940] '
                    href='/#'
                  >
                    <span className='justify-center px-6 py-4'>Order</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End block --> */}
          {/* <!-- Start block --> */}
          <section className='bg-white m-auto w-4/5 my-4 dark:bg-gray-900'>
            <div
              className='grid max-w-screen  bg-white  px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12
           lg:pt-28 m-auto'
            >
              <div class='hidden lg:mt-0 lg:col-span-5 lg:flex'>
                <Image
                  className='w-80 md:ml-1 ml-24'
                  alt='iPhone-12'
                  src='/images/iPhone-12-Mockup.png'
                  width={300}
                  height={200}
                />
              </div>
              <div className='mr-auto place-self-center lg:col-span-7'>
                <h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
                  Get your Portal
                </h1>
                <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
                  Click below to order your NFC Portal with free shipping and
                  start sharing your page in a new way.
                </p>
                <div className='flex justify-center'>
                  <Link
                    className='inline-flex items-center px-5 py-3  mt-2 font-medium text-white 
                    transition duration-500 ease-in-out transform  border rounded-lg
                     bg-[#8BC940] '
                    href='/#'
                  >
                    <span className='justify-center px-6 py-4'>Order</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End block --> */}
        </section>
      </div>
    </Layout>
  )
}
