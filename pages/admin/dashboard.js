import React from 'react'
import MobileSidebar from '../../components/admin_components/admin_sidebar/MobileSidebar'
import DesktopSidebar from '../../components/admin_components/admin_sidebar/DesktopSidebar'
import Admin from '../../components/admin_components/MainAdmin'



export default function Dashboard({}) {
  return (
    <div>
      <section className='w-1/1 relative flex justify-between'>
        <div className=' flex flex-col items-center justify-center min-h-screen py-2 md:hidden '>
          <MobileSidebar />
        </div>
        <div className='hidden w-[30%] md:grid  flex-col items-center justify-center min-h-screen py-2 '>
          <DesktopSidebar />
        </div>
        <div className='relative w-[90%] md:w-[70%] m-auto  md:pt-32 pb-32 pt-12  '>
          <Admin className='absolute   md:pt-32 pb-32 pt-12  ' />
        </div>
      </section>
    </div>
  )
}
