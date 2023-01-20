import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import pic from '../../public/images/team-2-800x800.jpg'
import { FaPager } from 'react-icons/fa'
import { MdOutlineLogout } from 'react-icons/md'
import { IoMdContacts } from 'react-icons/io'
import { SiSimpleanalytics } from 'react-icons/si'
import { RiAccountBoxFill } from 'react-icons/ri'
import { USER_ENDPOINTS } from '../../api/ACTIONS.JS'
import { useRouter } from 'next/router'
import api from '../../api/darlink'


const NewSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

   const router = useRouter()

   const handleLogout = async (e) => {
     try {
       const { data } = await api.post(USER_ENDPOINTS.LOGOUT(), {})
       if (data.success) {
         router.push('/auth/Login')
       }
     } catch (error) {
       console.log(error)
       console.log(error.msg)
     }
   }
  return (
    <>
      <aside>
        {showSidebar ? (
          <button
            // className='flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50'
            className="flex text-2xl text-gray-400 items-center cursor-pointer fixed left-40 top-2 z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            x
          </button>
        ) : (
          <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className="absolute  z-20 flex items-center cursor-pointer left-10 top-10"
            // className='fixed  z-20 flex items-center cursor-pointer left-10 top-6'
            // fill='#2563EB'
            fill="#000"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="80" height="10"></rect>
            <rect y="20" width="80" height="10"></rect>
            <rect y="40" width="60" height="10"></rect>
          </svg>
        )}

        <div
          className={`top-0 left-0 w-2/5 bg-white  p-10 pl-0 text- fixed h-[96%] z-40 
            
         ease-in-out duration-300 ${showSidebar ? 'translate-x-0 ' : 'hidden'}`}
        >
          {/* justify-between relative  z-10  px-6 py-6 ' */}

          <nav className="md:left-0  md:fixed  w-full m-auto  items-center relative  z-10  px-6 py-4 ">
            <div
              className="md:grid md:items-stretch md:max-h-full    px-2  
           items-center justify- w-full mx-auto"
            >
              {/* Brand */}

              <div className="mt-5">
                <Image
                  alt="..."
                  src={pic}
                  className=" h-auto  rounded-full align-middle  border-none shadow-xl   "
                  style={{ maxWidth: '150px' }}
                  height={100}
                  width={100}
                />
              </div>

              <div>
                {/* Navigation */}
                <div className="py-10">
                  <ul
                  // className='md:flex-col md:min-w-full flex flex-col list-none  '
                  >
                    <li className="items-center hover:bg-gray-200 ">
                      <Link
                        className="text-[#8BC940]  hover:text-pink-600 flex  gap-2 items-center text-xs uppercase py-3 font-bold "
                        href="/dashboard"
                      >
                        <FaPager className="text-2xl" />
                        My Page
                      </Link>
                    </li>

                    <li className="items-center hover:bg-gray-200">
                      <Link
                        className="text-blueGray-700 hover:text-blueGray-500 text-xs flex  gap-2 items-center uppercase py-3 font-bold "
                        // href='/analytics'
                        href="/analyticses"
                      >
                        <SiSimpleanalytics className="text-2xl" />
                        Analytics
                      </Link>
                    </li>

                    <li className="items-center hover:bg-gray-200">
                      <Link
                        className="text-blueGray-700 flex  gap-2 items-center hover:text-blueGray-500 text-xs uppercase py-3 font-bold "
                        // href='/referrals'
                        href="/wallet"
                      >
                        <IoMdContacts className="text-2xl" />
                        Wallet
                      </Link>
                    </li>

                    <li className="items-center hover:bg-gray-200">
                      <Link
                        className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold flex  gap-2 items-center"
                        // href='/account'
                        href="/accounts"
                      >
                        <RiAccountBoxFill className="text-2xl" />
                        Account
                      </Link>
                    </li>

                    <li className="items-center hover:bg-gray-200">
                      
                      <button
                      type='submit'
                        onClick={handleLogout}
                        className="text-blueGray-300 text-xs uppercase py-3 font-bold flex  gap-2 items-center"
                      >
                        <MdOutlineLogout className="text-2xl" />
                        Log Out
                      </button>
                    </li>

                    <li className="items-center hover:bg-gray-200">
                      <button
                        className="text-blueGray-300 text-xs uppercase py-3 font-bold block"
                        href="/upgrade"
                      >
                        <i className="fas fa-tools text-blueGray-300 mr-2 text-sm"></i>{' '}
                        Upgrade
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default NewSidebar
