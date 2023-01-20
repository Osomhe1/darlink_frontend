import React, { useState } from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import { FaPager } from 'react-icons/fa'
import { MdOutlineLogout } from 'react-icons/md'
import { IoMdContacts } from 'react-icons/io'
import { SiSimpleanalytics } from 'react-icons/si'
import { RiAccountBoxFill } from 'react-icons/ri'
// import { Modal } from '../Modal'

export default function Sidebar() {


  return (
    <>
      <aside>
        <nav
          className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row 
        md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between 
        relative md:w-64 z-10  px-6 py-4 '
        >
          <div
            className='md:grid md:items-stretch md:max-h-full    px-2  
           items-center justify- w-full mx-auto'
          >
            {/* Brand nnnn */}

            <div>
              {/* Navigation */}
              <div className='py-10'>
                <ul
                // className='md:flex-col md:min-w-full flex flex-col list-none  '
                >
                  <li className='items-center hover:bg-gray-200 '>
                    <Link
                      className='text-[#8BC940]  hover:text-[#8BC940] flex  gap-2 items-center text-xs uppercase py-3 font-bold '
                      href='/admin/dashboard'
                    >
                      <FaPager className='text-2xl' />
                      My Page
                    </Link>
                  </li>

                  <li className='items-center hover:bg-gray-200'>
                    <Link
                      className='text-blueGray-700 hover:text-blueGray-500 text-xs flex  gap-2 items-center uppercase py-3 font-bold '
                      // href='/analytics'
                      href='/admin/analytics'
                    >
                      <SiSimpleanalytics className='text-2xl' />
                      Analytics
                    </Link>
                  </li>

                  <li className='items-center hover:bg-gray-200'>
                    <Link
                      className='text-blueGray-700 flex  gap-2 items-center hover:text-blueGray-500 text-xs uppercase py-3 font-bold '
                      // href='/referrals'
                      href='/admin/wallet'
                    >
                      <IoMdContacts className='text-2xl' />
                      Wallet
                    </Link>
                  </li>

                  <li className='items-center hover:bg-gray-200'>
                    <Link
                      className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold flex  gap-2 items-center'
                      // href='/account'
                      href='/accounts'
                    >
                      <RiAccountBoxFill className='text-2xl' />
                      Account
                    </Link>
                  </li>

                  <li className='items-center hover:bg-gray-200'>
                    <Link
                      className='text-blueGray-300 text-xs uppercase py-3 font-bold flex  gap-2 items-center'
                      href='/auth/Login'
                      // onClick={(e) => e.preventDefault()}
                    >
                      <MdOutlineLogout className='text-2xl' />
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}
