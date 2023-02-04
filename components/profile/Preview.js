import React, { useEffect, useState } from 'react'
import { Avatar, Box, Stack } from '@mui/material'
import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import TelegramIcon from '@mui/icons-material/Telegram'
import { ResetUser } from '../../context/context'
import {toast} from 'react-toastify'
import {useRouter} from 'next/router'
import {UserInfo} from '../verify'
import { PROFILE } from '../../pages/api/ACTIONS.JS'
import api from '../../pages/api/darlink'
import { LINK, USER_ENDPOINTS } from '../../pages/api/ACTIONS.JS'
import { BUTTONS } from '../../pages/api/ACTIONS.JS'

export default function Preview() {

  const [users, setUsers] = useState([])
  const [link, setLink] = useState([])
  const [buttons, setButtons] = useState({
    email: '',
    discord: '',
    telegram: '',
    phone: '',
    social: '',
    contact: '',
    podcast: '',
    music: '',
  })
   let userData;
   const router = useRouter()

const userLinks =[];

  
  

   const handleData = async () => {
     try {
       const { data } = await api.get(LINK.GET_LINK(), {})
       if (data.success) {
         data.Link.map((cu) => {
           console.log(cu)
           for (const key in cu) {
            userLinks.push({key:cur[key]})
            }
          })
        }
        console.log(userLinks)
      } catch (error) {
       if (error.response) {
         if (error.response.status === 401) {
           ResetUser()
           router.push('/auth/Login')
         }
       }
     }
   }

  const infor = UserInfo().selectedPreview;

  const value = UserInfo().link;
  // console.log(value, 'value')

  // console.log(infor, 'infor')
  useEffect(() => {
    const AuthenticateUser = async () => {
      try {
        const { data } = await api.post(USER_ENDPOINTS.CHECK(), {})
        if (!data.success) router.push('/auth/Login')
      } catch (error) {
        console.log(error)
        toast.error(error.response.data.error)
        router.push('/auth/Login')
      }
    }
    AuthenticateUser();

    handleData()
    
  }, [])

  return (
    <div>
      <section
        className="relative bg-white block"
        style={{ height: '400px', backgroundColor: 'white' }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center
           flex justify-center items-center cursor-pointer bg-cover  
            from-[#8BC940]   bg-gradient-to-r  to-blue-500 "
          // style={{
          //   backgroundImage:
          //     "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          // }}
          name="colour"
        >
          {/* <Modal /> */}
          <div className="bg-[#8BC940]   z-90 shadow-xl w-[90%] items-center justify-center flex  bg-center ">
            <Stack>
              <div className=" z-90 m-auto">
                <Avatar
                  className="shadow-md
                           rounded-full h-auto align-middle  z-[99]
                           border-2 border-[#8BC940] absolute -mt-12 lg:-ml-6 xl:-ml-3  "
                  sx={{ width: 200, height: 200 }}
                  style={{ maxWidth: '200px', maxHeight: '200' }}
                  src={users.passportUrl ? users.passportUrl : <Avatar />}
                />
              </div>
              <div className="text-center text-2xl">
                <p className="text-white">{infor?.username}</p>
                <p className="text-white">{infor?.email}</p>
              </div>

              <div className="text-white text-center pb-4 flex flex-wrap items-center justify-center gap-3 ">
                {infor?.phone && (
                  <button className="text-3xl">
                    <CallIcon /> Phone
                  </button>
                )}
                {infor?.email && (
                  <button className="text-3xl">
                    <EmailIcon /> Emaill
                  </button>
                )}

                {infor?.discord && (
                  <button className="text-3xl">
                    <CallIcon /> Discord
                  </button>
                )}

                {infor?.telegram && (
                  <button className="text-3xl">
                    <TelegramIcon />
                    Telegram
                  </button>
                )}
              </div>
            <h1> {link.title} </h1>
            <h1> {link.url} </h1>
            </Stack>

          </div>
          {/* links */}
        </div>
        <div className="bg-[#8BC940]   z-[9999] shadow-xl w-[90%]">
          <p>{infor?.link}</p>
          <p>{infor?.url}</p>
          <p>hehhhhh</p>
        </div>
      </section>
    </div>
  )
}
