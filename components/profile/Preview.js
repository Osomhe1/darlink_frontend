import React, { useEffect, useState } from 'react'
import { Avatar, Box, Stack } from '@mui/material'
import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import { ResetUser } from '../../context/context'
import {toast} from 'react-toastify'
import {useRouter} from 'next/router'
import UserInfo from '../verify'
import { PROFILE } from '../../pages/api/ACTIONS.JS'
import api from '../../pages/api/darlink'
import { LINK } from '../../pages/api/ACTIONS.JS'
import { BUTTONS } from '../../pages/api/ACTIONS.JS'

export default function Preview() {

  const [users, setUsers] = useState([])
  const [link, setLink] = useState([])
  const [buttons, setButtons] = useState([])
   let userData;
   const router = useRouter()


  const handleData = async () => {
    try {
      const { data } = await api.get(PROFILE.USER_PROFILE(), {})
      if (data.success) userData = { ...data.profile }
      localStorage.setItem('passportUrl', userData.passportUrl)
      setUsers(userData)
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(error.response.data.error)
        ResetUser()
        router.push('/auth/Login')
      }
    }
  }
  const handleLink = async () => {
    try {
      const { data } = await api.get(LINK.GET_LINK(), {})
      if (data.success) userData = { ...data.Link }
    //   localStorage.setItem('passportUrl', userData.passportUrl)
      setLink(userData)
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(error.response.data.error)
        ResetUser()
        router.push('/auth/Login')
      }
    }
  }
  const handleButton = async () => {
    try {
      const { data } = await api.get(BUTTONS.GET_BUTTON(), {})
      if (data.success) userData = { ...data.button }
    //   localStorage.setItem('passportUrl', userData.passportUrl)
      setButtons(userData)
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(error.response.data.error)
        ResetUser()
        router.push('/auth/Login')
      }
    }
  }

  const infor = UserInfo()

  useEffect(() => {
    const AuthenticateUser = async () => {
      try {
        const { data } = await api.post(USER_ENDPOINTS.CHECK(), {})
        if (!data.success) router.push('/auth/Login')
      } catch (error) {
        toast.error(error.response.data.error)
        router.push('/auth/Login')
      }
    }

    AuthenticateUser();
    handleData()
    handleLink()
    handleButton()
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
              <div className=" z-90">
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
                <p className="text-white">{users?.displayName}</p>
              </div>
              <div className="text-white text-center pb-4 flex flex-wrap items-center justify-center gap-3 ">
                <button className="text-3xl">
                  <CallIcon />
                </button>
                <button className="text-3xl">
                  <EmailIcon />
                </button>
                <button className="text-3xl">
                  <CallIcon />
                </button>
              </div>
            </Stack>
          </div>
          {/* links */}
        </div>
        <div className="bg-[#8BC940]   z-90 shadow-xl w-[90%]">
          <p>{link?.title}</p>
          <p>{link?.url}</p>
        </div>
        <div className="bg-[#8BC940]   z-90 shadow-xl w-[90%]">
          <p>{buttons?.type}</p>
          <p>{buttons?.data}</p>
        </div>
      </section>
    </div>
  )
}
