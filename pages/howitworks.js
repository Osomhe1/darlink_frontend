import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'


export default function Howitworks() {
  return (
    <Layout>
      <div>
        <section>
          <div className='max-w-screen-2xl w-4/5 mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div className=' md:w-1/  pt-6 m-auto items-center text-center'>
              <h1 className='mb-5 md:text-4xl text-5xl text-center   items-center  font-bold  w-2/2 text-gray-900'>
                How It Works
              </h1>
              <p className='w-full md:w-3/5 text-center  m-auto text-black text-lg'>
                Make it easy for your followers to find your important links,
                social media, and latest content by having it all on one page.
              </p>
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
                  1. Sign Up
                </h1>
                <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
                  Create an account to receive your personal solo.to link, then
                  customize the page to match your style.
                </p>
                <div className='flex justify-center'>
                  <Link
                    className='inline-flex items-center px-5 py-3  mt-2 font-medium text-white 
                    transition duration-500 ease-in-out transform  border rounded-lg
                     bg-[#8BC940] hover:bg-[#5AB025]'
                    href='/auth/SignUp'
                  >
                    <span className='justify-center px-6 py-4'>
                      Creat Account
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* second */}
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
                  2. Add Content
                </h1>
                <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
                  Add links to websites and social media, embed music and videos
                  from your favorite platforms, or include email and phone
                  contact buttons.
                </p>
                <div className='flex justify-center'>
                  <Link
                    className='inline-flex items-center px-5 py-3  mt-2 font-medium text-white 
                    transition duration-500 ease-in-out transform  border rounded-lg 
                    bg-[#8BC940] hover:bg-[#5AB025]'
                    href='/auth/SignUp'
                  >
                    <span className='justify-center px-6 py-4'>
                      Create Account
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* third */}
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
                  3. Share In Bio
                </h1>
                <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
                  Use your custom solo.to link as the bio link for your social
                  media accounts to connect your audience across all the
                  platforms you use.
                </p>
                <div className='flex justify-center'>
                  <Link
                    className='inline-flex items-center px-5 py-3  mt-2 font-medium text-white 
                    transition duration-500 ease-in-out transform  border rounded-lg
                     bg-[#8BC940] hover:bg-[#5AB025]'
                    href='/auth/SignUp'
                  >
                    <span className='justify-center px-6 py-4'>
                      Create Account
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End block --> */}
          {/* start */}
          <section>
            <div className=' text-center text-2xl md:text-4xl lg:text-6xl   lg:pb-8 font-bold lg:pt-28'>
              <h1>The perfect bio link for...</h1>
            </div>

            <div
              className='grid lg:flex md:grid md:grid-cols-2 w-4/5 justify-between gap-4   px-4 pt-10 pb-8 mx-auto lg:gap-2  lg:py-8
           lg:pt-8 m-auto'
            >
              <div class='grid lg:mt-0 lg:col-span-5 p-10 lg:w-1/4 cursor-pointer   bg-white hover:text-blue-600 '>
                <div className='flex   '>
                  <Image
                    className='w-10 h-10 rounded-full md:ml-1 '
                    alt='iPhone-12'
                    src='/images/iPhone-12-Mockup.png'
                    width={30}
                    height={20}
                  />
                  <Image
                    className='w-10 h-10 rounded-full md:ml-1 '
                    alt='iPhone-12'
                    src='/images/iPhone-12-Mockup.png'
                    width={30}
                    height={20}
                  />
                  <Image
                    className='w-10 h-10 rounded-full md:ml-1 '
                    alt='iPhone-12'
                    src='/images/iPhone-12-Mockup.png'
                    width={30}
                    height={20}
                  />
                  <Image
                    className='w-10 h-10 rounded-full md:ml-1 '
                    alt='iPhone-12'
                    src='/images/iPhone-12-Mockup.png'
                    width={30}
                    height={20}
                  />
                </div>

                <div className='py-6'>
                  <h4 className='text-[#8BC940] text-4xl  '>Musicians</h4>
                  <p className='py-2'> Learn why</p>
                </div>
              </div>
              <div class='grid lg:mt-0 lg:col-span-5 p-10 lg:w-1/4  cursor-pointer   bg-white hover:text-blue-600  '>
                <div className='flex '>
                  <Image
                    className='w-10 h-10 rounded-full md:ml-1 '
                    alt='iPhone-12'
                    src='/images/iPhone-12-Mockup.png'
                    width={30}
                    height={20}
                  />
                  <Image
                    className='w-10 h-10 rounded-full md:ml-1 '
                    alt='iPhone-12'
                    src='/images/iPhone-12-Mockup.png'
                    width={30}
                    height={20}
                  />
                  <Image
                    className='w-10 h-10 rounded-full md:ml-1 '
                    alt='iPhone-12'
                    src='/images/iPhone-12-Mockup.png'
                    width={30}
                    height={20}
                  />
                  <Image
                    className='w-10 h-10 rounded-full md:ml-1 '
                    alt='iPhone-12'
                    src='/images/iPhone-12-Mockup.png'
                    width={30}
                    height={20}
                  />
                </div>

                <div className=''>
                  <h4 className='text-[#8BC940] text-4xl  '>Podcasters</h4>
                  <p className='py-2'> Learn why</p>
                </div>
              </div>
              <div class='grid lg:mt-0 lg:col-span-5 p-10 lg:w-1/4 cursor-pointer    bg-white hover:text-blue-600  '>
                <div className='flex'>
                  <Image
                    className='w-10 h-10 rounded-full md:ml-1 '
                    alt='iPhone-12'
                    src='/images/iPhone-12-Mockup.png'
                    width={30}
                    height={20}
                  />
                  <Image
                    className='w-10 h-10 rounded-full md:ml-1 '
                    alt='iPhone-12'
                    src='/images/iPhone-12-Mockup.png'
                    width={30}
                    height={20}
                  />
                  <Image
                    className='w-10 h-10 rounded-full md:ml-1 '
                    alt='iPhone-12'
                    src='/images/iPhone-12-Mockup.png'
                    width={30}
                    height={20}
                  />
                  <Image
                    className='w-10 h-10 rounded-full md:ml-1 '
                    alt='iPhone-12'
                    src='/images/iPhone-12-Mockup.png'
                    width={30}
                    height={20}
                  />
                </div>

                <div className=''>
                  <h4 className='text-[#8BC940] text-4xl  '>Streamers</h4>
                  <p className='py-2'> Learn why</p>
                </div>
              </div>
              <div class='grid lg:mt-0 lg:w-1/4 p-10 text-white cursor-pointer   bg-[#8BC940] hover:bg-[#5AB025]   '>
                <div className=''>
                  <h4 className=' text-4xl  '>
                    Artists, Creators, Businesses, & many others
                  </h4>
                  <p className='py-2'> Learn why</p>
                </div>
              </div>
            </div>
          </section>
          {/* End */}

          <div
            className='flex w-4/5 justify-between   px-4 pt-10 pb-8 mx-auto lg:gap-2  lg:py-8
           lg:pt-8 m-auto'
          >
            <div class='grid lg:mt-0 lg:col-span-5 p-10 w-full cursor-pointer text-center rounded-lg  bg-white hover:text-blue-600 '>
              <div className='py-6'>
                <h4 className='text-black text-4xl py-4 font-bold  '>
                  Get your link
                </h4>
                <div className='flex justify-center'>
                  <Link
                    className='inline-flex items-center px-5 py-3  mt-2 font-medium text-white 
                    transition duration-500 ease-in-out transform  border rounded-lg
                     bg-[#8BC940] hover:bg-[#5AB025]'
                    href='/auth/SignUp'
                  >
                    <span className='justify-center px-6 py-4'>
                      Creat Account
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
