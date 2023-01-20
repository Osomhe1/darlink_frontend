import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

export default function Tips() {
  return (
    <Layout>
      <div>
        <section className='py-20'>
          <div className=' w-4/5 m-auto  p-6'>
            <div className='py-5'>
              <h1 className='text-xl md:text-5xl font-bold p-2'>Expert Tips</h1>
              <p className='text-lg md:text-2xl p-2'>
                Learn more about the powerful features your bio link has to
                offer.
              </p>
            </div>
          </div>
          {/* <!--1/2 col --> */}
          <div className=' w-4/5 m-auto md:flex '>
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
                <a
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
                </a>
              </div>
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
        </section>
      </div>
    </Layout>
  )
}
