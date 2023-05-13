import React from 'react'
import MobileSidebar from './profile/MobileSidebar'
import DesktopSidebar from './sidebar/DesktopSidebar'

export default function SidebarContent() {
  return (
    <div>
      <section>
        <div
          className='w-[] flex flex-col items-center justify-center min-h-screen py-2 md:hidden  '
          // className='md:hidden'
        >
          <MobileSidebar />
        </div>
        <div className='hidden w-[20%] md:grid  flex-col items-center justify-center min-h-screen py-2 '>
          <DesktopSidebar />
        </div>
      </section>
    </div>
  )
}
