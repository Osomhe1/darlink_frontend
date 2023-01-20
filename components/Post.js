import React from 'react'
import MobileSidebar from './profile/MobileSidebar'
import DesktopSidebar from './sidebar/DesktopSidebar'
import SidebarContent from './SidebarContent'

export default function Post({children}) {
  return (
    <div>
      <div className='w-1/1 relative flex justify-between'>
          <div className=''>
            <div
              className=' flex flex-col items-center justify-center min-h-screen py-2 md:hidden '
            >
              <MobileSidebar />
            </div>
            <div className='hidden w-[30%] md:grid  flex-col items-center justify-center min-h-screen py-2 '>
              <DesktopSidebar />
            </div>
          </div>
          {/* main bar */}
          <div className='mainbar relative w-[90%] md:w-[100%] m-auto  md:pt-32 pb-32 pt-12 '>
            {children}
          </div>
        </div>
      </div>
  )
}
