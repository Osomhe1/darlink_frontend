import React from 'react'
import MobileSidebar from '../components/profile/MobileSidebar'
import Profile from '../components/profile/Profile'
import DesktopSidebar from '../components/sidebar/DesktopSidebar'
import Post from '../components/Post'
import Referrals from './referrals'

export default function Referrales({}) {
  return (
    // <Post>
    <div>
      <section className='w-1/1 relative flex justify-between'>
        <div className=' flex flex-col items-center justify-center min-h-screen py-2 md:hidden '>
          <MobileSidebar />
        </div>
        <div className='hidden w-[30%] md:grid  flex-col items-center justify-center min-h-screen py-2 '>
          <DesktopSidebar />
        </div>
        <div className='relative w-[90%] md:w-[70%] m-auto  md:pt-32 pb-32 pt-12  '>
          {/* <Profile className='absolute   md:pt-32 pb-32 pt-12  ' /> */}
          <Referrals className='absolute   md:pt-32 pb-32 pt-12  ' />
        </div>
      </section>
    </div>
    //  {/* </Post> */}
  )
}
