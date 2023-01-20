import React from 'react'
import Link from 'next/link'

export default function Checkout() {
  return (
    <div>
      <section className='mt-10 mb-10'>
        <div className='bg-white md:w-2/3 xl:w-[40%] md:m-auto  '>
          <div className='border border-b text-xl p-4 px-8 '>
            <h1 className='p-2 text-3xl font-normal '>Subscription Details</h1>
          </div>
          <div className='border border-b text-xl p-4 px-8 text-gray-400 '>
            <div className='py-4'>
              <div className='flex gap-2 flex-wrap justify-around '>
                <p>Personal Plan</p>
                <p>..............................................................................</p>
                <p>$1/month</p>
              </div>
              {/* <div className=''></div> */}
            </div>
            {/* <h1 className='p-5 text-3xl font-normal '>Payment Method</h1> */}
            <p className='text-center font-semibold text-2xl p-2  '>
              Total $12
            </p>
          </div>
          <div className='border border-b-2 text-xl p-4 px-8 '>
            <h1 className='p-2 text-3xl font-normal '>Payment Method</h1>
          </div>
          <div className=''>
            <form className='   m w-[90%] m-auto   py-8 '>
              <div className='  mb-3 w-full '>
                <div className='my-2'>
                  <label
                    className='uppercase text-gray-300  text-sm font-semibold'
                    htmlFor='name'
                  >
                    Name on Card
                  </label>
                </div>
                {/* <input
                  type='name'
                  className='border-0 px-3   py-5 placeholder-gray-400 
                   text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring  w-full'
                  placeholder='Full Name'
                  style={{ transition: 'all .15s ease' }}
                /> */}
                <input
                  type='name'
                  placeholder='Full Name'
                  style={{ transition: 'all .15s ease' }}
                  className='py-5 placeholder-gray-400 border-0 rounded-sm text-sm   w-full m-auto
                   px-3 focus:outline-none  text-gray-700 bg-gray-200 '
                />
              </div>

              <div className=' w-full mb-3'>
                <div className='my-2'>
                  <label
                    htmlFor='cards'
                    className='uppercase text-gray-300  text-sm font-semibold'
                  >
                    Cards details
                  </label>
                </div>
                <div className='flex'>
                  <input
                    type='number'
                    className='border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-gray-200 rounded-sm
                   text-md font-semibold  focus:outline-none focus: w-[70%]  '
                    placeholder='Card Number'
                    style={{ transition: 'all .15s ease' }}
                  />
                  <input
                    type='number'
                    className='border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-gray-200 rounded-sm
                   text-sm  focus:outline-none focus: w-[30%]  '
                    placeholder='MM / YY CVC'
                    style={{ transition: 'all .15s ease' }}
                  />
                </div>
              </div>
              <div className='relative w-full mb-3 md:flex justify-between md:space-x-4 '></div>

              <div className='text-center mt-6   '>
                <button
                  className='bg-green-400 text-white active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                  type='button'
                  style={{ transition: 'all .15s ease' }}
                >
                  <Link href='/dashboard'>Pay $12</Link>
                </button>
              </div>

              <div className='py-3 text-gray-400'>
                <small>
                  By clicking, you allow solo.to to request payment from your
                  card on a recurring basis subject to the Terms of Service.
                </small>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
