import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import pic from '../../public/images/team-2-800x800.jpg'
import {FaPager} from 'react-icons/fa'
import {MdOutlineLogout} from 'react-icons/md'
import { IoMdContacts } from 'react-icons/io'
import { SiSimpleanalytics } from 'react-icons/si'
import { RiAccountBoxFill } from 'react-icons/ri'
import {Modal} from '../Modal'
import { USER_ENDPOINTS } from '../../api/ACTIONS.JS'
import api from '../../api/darlink'
import {  useRouter } from 'next/router'



export default function Sidebar() {
  // const [collapseShow, setCollapseShow] = React.useState('hidden')

   const [showModal, setShowModal] = useState(false)
   const [loggedin, setLoggedin] = useState(true)

   const showtheModal = () => {
     setShowModal(!showModal)
     console.log('welcome')
   }
   const router = useRouter()

    const handleLogout = async (e) => {
      try {
          const { data } = await api.post(USER_ENDPOINTS.LOGOUT(), {
          })
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
        <nav
          className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row 
        md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between 
        relative md:w-64 z-10  px-6 py-4 "
        >
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
                      className="text-[#8BC940]  hover:text-[#8BC940] flex  gap-2 items-center text-xs uppercase py-3 font-bold "
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
                    {/* <Link
                      className='text-blueGray-300 text-xs uppercase py-3 font-bold flex  gap-2 items-center'
                      href='/auth/Login'
                      // onClick={(e) => e.preventDefault()}
                    > */}
                    <button type='submit'  onClick={handleLogout} className="text-blueGray-300 text-xs uppercase py-3 font-bold flex  gap-2 items-center">
                      <MdOutlineLogout className="text-2xl" />
                      Log Out
                    </button>
                    {/* </Link> */}
                  </li>

                  <li className="items-center hover:bg-gray-200">
                    <button
                      className="text-blueGray-300 text-xs uppercase py-3 font-bold block"
                      href="/upgrade"
                      // onFocus={showtheModal}
                    >
                      {/* {showModal && <Modal showtheModal={showtheModal} />} */}
                      <i className="fas fa-tools text-blueGray-300 mr-2 text-sm"></i>{' '}
                      Upgrade
                    </button>
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
