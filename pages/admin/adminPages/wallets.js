import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/PayPal-Logo.png'
import InfoCard from '../../../components/admin_components/Card'
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded'
import Tables from '../../../components/admin_components/Table'

export default function Wallets() {
  return (
    <div>
      <div className='-mt-5 md:-mt-24 xl:w-5/6'>
        <h1 className='text-blue-500 font-semibold text-3xl'>Wallet</h1>
      </div>
      <section>
        {/* <div class='flex flex-co items-center w-full max-w-screen-md p-6 pb-6 mt-10 gap-6 bg-white rounded-lg shadow-xl sm:p-8'> */}
        <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 xl:w-5/6'>
          <InfoCard title='Total Balance' value='6389'>
            <AttachMoneyRoundedIcon />
          </InfoCard>
          <InfoCard title='Total Balance' value='6389'>
            <AttachMoneyRoundedIcon />
          </InfoCard>
        </div>

        {/* </div> */}
        {/* second box */}
      
        <div className='w-full max-w-screen-md'>
          <Tables />
        </div>
      </section>
    </div>
  )
}
