import React from 'react'
import Image from 'next/image'
// import logo from '../public/images/PayPal-Logo.png'
import logo from '../../../public/images/PayPal-Logo.png'
// import airlink from '../public/images/solo_logo.jpeg'
// import InfoCard from '../components/admin_components/Card'
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
        {/* <div class=' w-full max-w-screen-md p-6 pb-6 mt-10 bg-white rounded-lg shadow-xl sm:p-8'>
          <h1 className='text-3xl text-black py-3 font-semibold pb-8 mb-4 '>
            Affiliate Program
          </h1>
          <div className='flex flex-co justify-between items-center'>
            <div className='border p-4 w-[150px] '>
              <h4 className='text-lg'>Referrals </h4>
              <p className='text-blue-500 text-2xl font-semibold '>0</p>
            </div>
            <div className='border p-4 w-[150px] '>
              <h4 className='text-lg flex items-center gap-2'>
                Pending{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-4'
                  viewBox='0 0 20 20'
                  //   fill='currentColor'
                  fill='blue'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                    clipRule='evenodd'
                  />
                </svg>
              </h4>
              <p className='text-blue-500 text-2xl font-semibold '>$0.00</p>
            </div>
            <div className='border p-4 w-[150px] '>
              <h4 className='text-lg flex items-center gap-2'>
                Upcoming{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-4'
                  viewBox='0 0 20 20'
                  //   fill='currentColor'
                  fill='blue'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                    clipRule='evenodd'
                  />
                </svg>
              </h4>
              <p className='text-blue-500 text-2xl font-semibold '>$0.00</p>
            </div>
            <div className='border p-4 w-[150px] '>
              <h4 className='text-lg'>Total Paid</h4>
              <p className='text-blue-500 text-2xl font-semibold '>$0.00</p>
            </div>
          </div>
          <div className='bg-gray-200 grid grid-cols-2 my-8 '>
            <div className=' border-r-2 border-gray-300 p-4'>
              <h3 className='text-black font-semibold text-xl p-3 '>
                Get Started
              </h3>
              <p className='p-3 text-md '>
                Earn{' '}
                <span className='text-black font-semibold '>
                  {' '}
                  20% recurring commission{' '}
                </span>{' '}
                on your referrals with subscriptions. Activate payments by
                adding your PayPal email address.
              </p>

              <p className='p-3 text-blue-500 cursor-pointer pt-4 '>
                More Information
              </p>
            </div>
            <div className='p-5 m-4 '>
              <div className=' w-40 '>
                <Image src={logo} alt='paypal' w={50} h={40} />
              </div>
              <div className=''>
                <input
                  className='w-full text-gray-100 p-5 '
                  type='email'
                  require
                  placeholder='Enter your paypal email address '
                />
              </div>
              <div className='py-3'>
                <button
                  type='button'
                  className='bg-gray-300 w-full text-gray-100 p-5 '
                >
                  Activate
                </button>
              </div>
              <div className=''></div>
            </div>
          </div>
          <div className='py-2'>
            <h1 className='text-2xl py-2 '>Referral List</h1>
          </div>
          <hr />
          <div className='text-center my-4 pt-6 '>
            <p className='py-8 text-gray-400 '>
              (sign ups from your invite link will appear here)
            </p>
          </div>
        </div> */}
        <div className='w-full max-w-screen-md'>
          <Tables />
        </div>
      </section>
    </div>
  )
}
