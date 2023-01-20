import React from 'react'
import Layout from '../../components/Layout'

export default function ForgetPassword() {
  return (
    <Layout>
      <div>
        <section>
          <form className='Avenir  lg:w-2/5 m-3 md:w-3/5 md:m-auto lg:m-auto py-28 '>
            <h2 className='text-center font-bold text-3xl md:text-5xl py-5 '>
              Forgot Password
            </h2>
            <p className='text-center  text  py-5 '>
              Enter your email below and we ll send you a password reset link.
            </p>

            <div className='relative w-full mb-3'>
              <input
                type='email'
                className='border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring w-full focus:ring-[#8BC940]'
                placeholder='Email'
                style={{ transition: 'all .15s ease' }}
              />
            </div>

            <div className='text-center mt-6'>
              <button
                className='bg-[#8BC940] hover:bg-[#5AB025] text-white active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                type='button'
                style={{ transition: 'all .15s ease' }}
              >
                Send link
              </button>
            </div>
            <div className='text-center mt-6'>
              <button
                className=' text-gray-300 hover:text-gray-500 active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                type='button'
                style={{ transition: 'all .15s ease' }}
              >
                or Go Back
              </button>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}
