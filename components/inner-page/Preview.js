import React from 'react'

import Image from 'next/image'
import pic from '../../public/images/team-2-800x800.jpg'
import Appreance from '../Appreance'
import Link from '../Link'
import Buttons from '../Buttons'
import Integrations from '../Integrations'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
// import Details from '../Details'
// import Image from 'next/image'
// import Post from '../Post'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded'


export default function Profile() {
  return (
    <>
      {/* <Navbar transparent /> */}
      {/* <Details> */}
      {/* <Post> */}
      <main className='profile-page mx- '>
        {/* pages */}
        <div className='md:flex justify-between -mt-5 md:-mt-24 xl:w-5/6 my-  '>
          <div className=' ml-20 md:ml-0'>
            <h1 className='text-[#8BC940] font-bold text-5xl '>My Page</h1>
          </div>
          <div className=''>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label='text alignment'
            >
              <ToggleButton value='left' aria-label='left aligned'>
                <ModeEditOutlineRoundedIcon />
                <h1>Editor</h1>
              </ToggleButton>
              <ToggleButton value='center' aria-label='centered'>
                <SearchRoundedIcon />
                <h1>Preview</h1>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
        {/* links */}
        <div className='flex justify-between xl:w-5/6 my-4'>
          <div className='flex gap-3'>
            <div className=''>
              <button
                className='bg-[#8BC940]  text-white active:bg-gray-700 text-sm font-bold uppercase
                       px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[100px]
                       bottom-0 '
                type='button'
                style={{ transition: 'all .15s ease' }}
              >
                unsave
              </button>
            </div>
            <div className=''>
              <button
                className='bg-[#8BC940]  text-white active:bg-gray-700 text-sm font-bold uppercase
                       px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[100px]
                       bottom-0 '
                type='button'
                style={{ transition: 'all .15s ease' }}
              >
                unsave
              </button>
            </div>
          </div>
          <div className=''>
            <button
              className='bg-[#8BC940]  text-white active:bg-gray-700 text-sm font-bold uppercase
                       px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[100px]
                       bottom-0 '
              type='button'
              style={{ transition: 'all .15s ease' }}
            >
              unsave
            </button>
          </div>
        </div>
        <div className='bg-whit md:w-5/6'>
          <section
            className='relative bg-white block'
            style={{ height: '200px', backgroundColor: 'white' }}
          >
            <div
              className='absolute top-0 w-full h-full bg-center bg-cover bg-[#8BC940] '
              // style={{
              //   backgroundImage:
              //     "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
              // }}
            >
              <span
                id='blackOverlay'
                className='w-full h-full absolute opacity-50 bg-black'
              ></span>
            </div>
            <div
              className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
              style={{ height: '70px' }}
            ></div>
          </section>
          <section className='relative py-16 bg-w'>
            <div className='container mx-auto px-4 bg-white'>
              <div
                className='relative flex flex-col min-w-0 break-words  w-full mb-6 
              rounded-lg -mt-20 '
              >
                <div className='px-6 relative'>
                  <div className='grid md:flex flex-wrap justify-center'>
                    <div className='w-full  px-4  flex justify-'>
                      <div className='relative pt-8 md:pt-0 '>
                        <Image
                          alt='...'
                          // src={require('assets/img/team-2-800x800.jpg').default}
                          // src='/public/images/team-2-800x800.jpg'
                          src={pic}
                          className='shadow-md rounded-full h-auto align-middle  border-none absolute -m-12 -ml-20 lg:-ml-1'
                          style={{ maxWidth: '200px' }}
                          height={100}
                          width={120}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* </Post> */}
      {/* </Details> */}
    </>
  )
}
