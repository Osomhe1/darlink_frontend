import React from 'react'
import MobileSidebar from '../components/profile/MobileSidebar'
import DesktopSidebar from '../components/sidebar/DesktopSidebar'
import Analytics from './analytics'

export default function Analyticses({}) {
  return (
    <div>
      <section className='w-1/1 relative flex justify-between'>
        <div className=' flex flex-col items-center justify-center min-h-screen py-2 lg:hidden '>
          <MobileSidebar />
        </div>
        <div className='hidden w-[30%] lg:grid  flex-col items-center justify-center min-h-screen py-2 '>
          <DesktopSidebar />
        </div>
        <div className='relative w-[90%] md:w-[70%] m-auto  md:pt-32 pb-32 pt-12  '>
          <Analytics className='absolute   md:pt-32 pb-32 pt-12  ' />
        </div>
      </section>
    </div>
  )
}
