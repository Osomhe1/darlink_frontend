import React from 'react'
// import NewSidebar from '../profile/NewSidebar'
import NewSidebar from './profile/MobileSidebar'
import Profile from './profile/Profile'
import Sidebar from './sidebar/DesktopSidebar'


export default function Details({ children }) {
  return (
    <div>
      <div>
        <section className='w-1/1 relative flex justify-between'>
          <div
            className='w-[] flex flex-col items-center justify-center min-h-screen py-2 md:hidden '
            // className='md:hidden'
          >
            <NewSidebar />
          </div>
          <div className='hidden w-[20%] md:grid  flex-col items-center justify-center min-h-screen py-2 '>
            <Sidebar />
          </div>
          <div className='relative w-[90%] md:w-[70%] m-auto  md:pt-32 pb-32 pt-12'>
            {/* <Profile className='absolute   md:pt-32 pb-32 pt-12 ' /> */}
            {children}
          </div>
        </section>
      </div>
    </div>
  )
}
