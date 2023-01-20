import React from 'react'

import InfoCard from './Card'
import Tables from './Table'
// import {ChatIcon} from '@mui/icons-material'
import  AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded'

export default function Profile() {
  return (
    <>
      <main className='profile-page mx- '>
        {/* pages */}
        <div className='md:flex justify-between -mt-5 md:-mt-24 xl:w-5/6 my-  '>
          <div className=' ml-20 md:ml-0'>
            <h1 className='text-[#8BC940] font-bold text-5xl '>My Page</h1>
          </div>
        </div>
        <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 xl:w-5/6 '>
          <InfoCard title='Total clients' value='6389'>
            
            <AccountCircleRoundedIcon className='mr-4' />
          </InfoCard>

          <InfoCard title='Account balance' value='$ 46,760.89'>
            
            <AttachMoneyRoundedIcon className='mr-4' />
          </InfoCard>

          <InfoCard title='New sales' value='376'>
            
            <AccountCircleRoundedIcon className='mr-4' />
          </InfoCard>

          <InfoCard title='Pending contacts' value='35'>
            
            <AccountCircleRoundedIcon className='mr-4' />
          </InfoCard>
        </div>

        <div className='md:w-5/6'>
          <Tables />
        </div>
      </main>
    </>
  )
}
