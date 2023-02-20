import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaPager } from 'react-icons/fa'
import { MdOutlineLogout } from 'react-icons/md'
import { IoMdContacts } from 'react-icons/io'
import { SiSimpleanalytics } from 'react-icons/si'
import { RiAccountBoxFill } from 'react-icons/ri'
import { USER_ENDPOINTS } from '../../pages/api/ACTIONS.JS'
import { useRouter } from 'next/router'
import api from '../../pages/api/darlink'
import {UserInfo} from '../verify'
import { Avatar, Box } from '@mui/material'
import { toast } from 'react-toastify'
import CloseIcon from '@mui/icons-material/Close'
import { ResetUser } from '../../context/context'
import { reload } from '../sidebar/DesktopSidebar'



const NewSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
   const router = useRouter()
   const handleLogout = async (e) => {
     try {
       const { data } = await api.post(USER_ENDPOINTS.LOGOUT(), {})
       if (data.success) {
         router.push('/Login')
       }
     } catch (error) {
      toast.error(error.response.data.error)
      if (error.response.status === 401) {
        toast.error(error.response.data.error)
        ResetUser()
        router.push('/Login')
      }
     }
   }
   useEffect(() =>{
     const AuthenticateUser = async () => {
       try {
         const { data } = await api.post(USER_ENDPOINTS.CHECK(), {})
         if (!data.success) router.push('/Login')
       } catch (error) {
         router.push('/Login')
       }
     }

     AuthenticateUser();
     reload()
   }, [])
  return (
    <>
      <aside>
        {showSidebar ? (
          <button
            className="flex text-2xl  text-gray-400 items-center cursor-pointer fixed left-44 md:left-56 top-6 z-[999999]"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <CloseIcon />
          </button>
        ) : (
          <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className="absolute  z-20 flex items-center cursor-pointer left-10 top-10"
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
          className={`top-0 left-0 w-3/5 md:w-2/5 bg-white  p-10 pl-0 text- shadow-3xl shadow hover:shadow-lg fixed h-[96%] z-[99999] 
            
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
                <Avatar
                  src={
                    UserInfo().passportUrl ? UserInfo().passportUrl : <Avatar />
                  }
                  className=" h-auto  rounded-full align-middle  border-none shadow-xl   "
                  sx={{ width: 200, height: 200 }}
                  style={{ maxWidth: '200px', maxHeight: '200' }}
                  height={100}
                  width={100}
                />
              </div>

              <div>
                {/* Navigation */}
                <div className="py-10">
                  <ul>
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
                        className="text-blueGray-300 text-xs uppercase py-3 font-bold block"
                        href="/upgrade"
                      >
                        <i className="fas fa-tools text-blueGray-300 mr-2 text-sm"></i>{' '}
                        Upgrade
                      </Link>
                    </li>

                    <li className="items-center hover:bg-gray-200">
                      <Link
                        className="text-blueGray-700 hover:text-blueGray-500 text-xs flex  gap-2 items-center uppercase py-3 font-bold "
                        href="/analyticses"
                      >
                        <SiSimpleanalytics className="text-2xl" />
                        Analytics
                      </Link>
                    </li>

                    <li className="items-center hover:bg-gray-200">
                      <Link
                        className="text-blueGray-700 flex  gap-2 items-center hover:text-blueGray-500 text-xs uppercase py-3 font-bold "
                        href="/wallet"
                      >
                        <IoMdContacts className="text-2xl" />
                        Wallet
                      </Link>
                    </li>

                    <li className="items-center hover:bg-gray-200">
                      <Link
                        className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold flex  gap-2 items-center"
                        href="/accounts"
                      >
                        <RiAccountBoxFill className="text-2xl" />
                        Account
                      </Link>
                    </li>

                    <li className="items-center hover:bg-gray-200">
                      <button
                        type="submit"
                        onClick={handleLogout}
                        className="text-blueGray-300 text-xs uppercase py-3 font-bold flex  gap-2 items-center"
                      >
                        <MdOutlineLogout className="text-2xl" />
                        Log Out
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
