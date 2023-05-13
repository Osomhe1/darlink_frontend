import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'
// import { image } from 'next/image'

export default function Blog() {
  return (
    <Layout>
      <div>
        <section className='bg-gray-200'>
          <div className='w-4/5 m-auto px-5 py-20'>
            <h1 className='text-5xl font-bold py-4'>Blog</h1>
            <div className='py-4'>
              <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                  Use Cases
                </span>
              </button>
              <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'>
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                  Resources
                </span>
              </button>
              <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'>
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                  Features
                </span>
              </button>
              <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800'>
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                  Ideas
                </span>
              </button>
              <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                  News
                </span>
              </button>
            </div>
          </div>
          {/* <!--1/2 col --> */}
          <div className='w-4/5 m-auto md:flex'>
            <div className='w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink'>
              <div className='flex-1 rounded-t rounded-b-none overflow-hidden -lg'>
                <Link
                  href='#'
                  className='flex flex-wrap no-underline hover:no-underline'
                >
                  <Image
                    className='h-full w-full rounded-t pb-6'
                    alt='iPhone-12'
                    src='https://source.unsplash.com/collection/3657445/800x600'
                    w={200}
                    h={200}
                  />

                  <p className='w-full text-gray-600 text-xs md:text-sm px-6'>
                    GETTING STARTED
                  </p>
                  <div className='w-full font-bold text-xl text-gray-900 px-6'>
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className='text-gray-800 font-serif text-base px-6 mb-5'>
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </Link>
              </div>
            </div>

            {/* <!--1/2 col --> */}
            <div className='w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink'>
              <div className='flex-1 flex-row  rounded-t rounded-b-none overflow-hidden '>
                <Link
                  href='#'
                  className='flex flex-wrap no-underline hover:no-underline'
                >
                  <Image
                    className='h-full w-full rounded-t pb-6'
                    alt='iPhone-12'
                    src='https://source.unsplash.com/collection/3657445/800x600'
                    w={200}
                    h={200}
                  />
                  <p className='w-full text-gray-600 text-xs md:text-sm px-6'>
                    GETTING STARTED
                  </p>
                  <div className='w-full font-bold text-xl text-gray-900 px-6'>
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className='text-gray-800 font-serif text-base px-6 mb-5'>
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-4/5 m-auto flex justify-between border-b-2 border-gray-700 py-3 '>
            <div className=' p-6'>
              <h1 className='text-4xl font-bold py-2'>Latest</h1>
            </div>
            <div className=' p-6'>
              <p className='font-bold text-xl py-2'>View All</p>
            </div>
          </div>
          {/* first 3 cols */}
          <div className=' w-4/5 m-auto md:flex '>
            {/* <!--1/2 col --> */}
            <div className='w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink'>
              <div className='flex-1 rounded-t rounded-b-none overflow-hidden -lg'>
                <Link
                  href='#'
                  className='flex flex-wrap no-underline hover:no-underline'
                >
                  <Image
                    className='h-full w-full rounded-t pb-6'
                    alt='iPhone-12'
                    src='https://source.unsplash.com/collection/3657445/800x600'
                    w={200}
                    h={200}
                  />

                  <p className='w-full text-gray-600 text-xs md:text-sm px-6'>
                    GETTING STARTED
                  </p>
                  <div className='w-full font-bold text-xl text-gray-900 px-6'>
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className='text-gray-800 font-serif text-base px-6 mb-5'>
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </Link>
              </div>
            </div>

            {/* <!--1/2 col --> */}
            <div className='w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink'>
              <div className='flex-1 flex-row  rounded-t rounded-b-none overflow-hidden '>
                <Link
                  href='#'
                  className='flex flex-wrap no-underline hover:no-underline'
                >
                  <Image
                    className='h-full w-full rounded-t pb-6'
                    alt='iPhone-12'
                    src='https://source.unsplash.com/collection/3657445/800x600'
                    w={200}
                    h={200}
                  />
                  <p className='w-full text-gray-600 text-xs md:text-sm px-6'>
                    GETTING STARTED
                  </p>
                  <div className='w-full font-bold text-xl text-gray-900 px-6'>
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className='text-gray-800 font-serif text-base px-6 mb-5'>
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </Link>
              </div>
            </div>
            <div className='w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink'>
              <div className='flex-1 flex-row  rounded-t rounded-b-none overflow-hidden '>
                <Link
                  href='#'
                  className='flex flex-wrap no-underline hover:no-underline'
                >
                  <Image
                    className='h-full w-full rounded-t pb-6'
                    alt='iPhone-12'
                    src='https://source.unsplash.com/collection/3657445/800x600'
                    w={200}
                    h={200}
                  />
                  <p className='w-full text-gray-600 text-xs md:text-sm px-6'>
                    GETTING STARTED
                  </p>
                  <div className='w-full font-bold text-xl text-gray-900 px-6'>
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className='text-gray-800 font-serif text-base px-6 mb-5'>
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {/* second 3 cols */}
          <div className='w-4/5 m-auto md:flex'>
            <div className='w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink'>
              <div className='flex-1 rounded-t rounded-b-none overflow-hidden -lg'>
                <Link
                  href='#'
                  className='flex flex-wrap no-underline hover:no-underline'
                >
                  <Image
                    className='h-full w-full rounded-t pb-6'
                    alt='iPhone-12'
                    src='https://source.unsplash.com/collection/3657445/800x600'
                    w={200}
                    h={200}
                  />

                  <p className='w-full text-gray-600 text-xs md:text-sm px-6'>
                    GETTING STARTED
                  </p>
                  <div className='w-full font-bold text-xl text-gray-900 px-6'>
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className='text-gray-800 font-serif text-base px-6 mb-5'>
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </Link>
              </div>
            </div>

            {/* <!--1/2 col --> */}
            <div className='w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink'>
              <div className='flex-1 flex-row  rounded-t rounded-b-none overflow-hidden '>
                <Link
                  href='#'
                  className='flex flex-wrap no-underline hover:no-underline'
                >
                  <Image
                    className='h-full w-full rounded-t pb-6'
                    alt='iPhone-12'
                    src='https://source.unsplash.com/collection/3657445/800x600'
                    w={200}
                    h={200}
                  />
                  <p className='w-full text-gray-600 text-xs md:text-sm px-6'>
                    GETTING STARTED
                  </p>
                  <div className='w-full font-bold text-xl text-gray-900 px-6'>
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className='text-gray-800 font-serif text-base px-6 mb-5'>
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </Link>
              </div>
            </div>
            {/* <!--1/2 col --> */}
            <div className='w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink'>
              <div className='flex-1 flex-row  rounded-t rounded-b-none overflow-hidden '>
                <Link
                  href='#'
                  className='flex flex-wrap no-underline hover:no-underline'
                >
                  <Image
                    className='h-full w-full rounded-t pb-6'
                    alt='iPhone-12'
                    src='https://source.unsplash.com/collection/3657445/800x600'
                    w={200}
                    h={200}
                  />
                  <p className='w-full text-gray-600 text-xs md:text-sm px-6'>
                    GETTING STARTED
                  </p>
                  <div className='w-full font-bold text-xl text-gray-900 px-6'>
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className='text-gray-800 font-serif text-base px-6 mb-5'>
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* <!--1/2 col --> */}
          <div className='w-4/5 m-auto flex justify-between border-b-2 border-gray-700 py-5 '>
            <div className=' p-6'>
              <h1 className='text-4xl font-bold py-2'>Expert Tips</h1>
            </div>
            <div className=' p-6'>
              <p className='font-bold text-xl py-2'>View All</p>
            </div>
          </div>
          <div className='w-4/5 m-auto md:flex py-5'>
            <div className='w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink'>
              <div className='flex-1 rounded-t rounded-b-none overflow-hidden -lg'>
                <Link
                  href='#'
                  className='flex flex-wrap no-underline hover:no-underline'
                >
                  <Image
                    className='h-full w-full rounded-t pb-6'
                    alt='iPhone-12'
                    src='https://source.unsplash.com/collection/3657445/800x600'
                    w={200}
                    h={200}
                  />

                  <p className='w-full text-gray-600 text-xs md:text-sm px-6'>
                    GETTING STARTED
                  </p>
                  <div className='w-full font-bold text-xl text-gray-900 px-6'>
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className='text-gray-800 font-serif text-base px-6 mb-5'>
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </Link>
              </div>
            </div>

            {/* <!--1/2 col --> */}
            <div className='w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink'>
              <div className='flex-1 flex-row  rounded-t rounded-b-none overflow-hidden '>
                <Link
                  href='#'
                  className='flex flex-wrap no-underline hover:no-underline'
                >
                  <Image
                    className='h-full w-full rounded-t pb-6'
                    alt='iPhone-12'
                    src='https://source.unsplash.com/collection/3657445/800x600'
                    w={200}
                    h={200}
                  />
                  <p className='w-full text-gray-600 text-xs md:text-sm px-6'>
                    GETTING STARTED
                  </p>
                  <div className='w-full font-bold text-xl text-gray-900 px-6'>
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p className='text-gray-800 font-serif text-base px-6 mb-5'>
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
