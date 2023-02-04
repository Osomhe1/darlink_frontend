import React, { useEffect, useState } from 'react'
import { Avatar, Box, Stack } from '@mui/material'
import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import TelegramIcon from '@mui/icons-material/Telegram'
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

    // const details = () => {
    //   buttons.map((cur) => {
    //     for (key in cur) {
    //       buttons[key] = cur[key]
    //     }
    //     // setButtons({ ...buttons, [cur.type]: cur.data })
    //   })
    // }

  const handleLink = async () => {
    try {
      const { data } = await api.get(LINK.GET_LINK(), {})
      if (data.success) 
      // userData = { ...data.Link }
      userData = { ...data.Link }
    //   localStorage.setItem('passportUrl', userData.passportUrl)
     localStorage.setItem('link', userData)
    console.log(userData, 'link')
      setLink(userData) 
      console.log(link, 'linksssss')
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

   const handleButton2 = async () => {
     try {
       const { data } = await api.get(BUTTONS.GET_BUTTON(), {})
       console.log(data, 'data')
       if (data.success) {
        
       }
       //todo
       //populate UI
       console.log(data, 'data ')
       data.button.map((cu) => {
         setButtons({ ...buttons, [cu.type]: cu.data })
       })
       //  console.log(infor);
       //  getLinks();
     } catch (error) {
       console.log(error, 'error')
       if (error.response.status === 401) {
         toast.error(error.response.data.error)
         ResetUser()
         router.push('/auth/Login')
       }
     }
   }

  const infor = UserInfo()
  // const value = localStorage.getItem('selectedPreview')

  // console.log(value, 'value')
  useEffect(() => {
    // const AuthenticateUser = async () => {
    //   try {
    //     const { data } = await api.post(USER_ENDPOINTS.CHECK(), {})
    //     if (!data.success) router.push('/auth/Login')
    //   } catch (error) {
    //       // toast.error(error.response.data.error)
    //       ResetUser()
    //       router.push('/auth/Login')
    //   }
    // }
    // AuthenticateUser();
    // handleData()
    // handleLink()
    // handleButton()
    // details()
    // handleButton2()
    localStorage.getItem('selectedPreview')
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
                <p className="text-white">{infor?.username}</p>
                <p className="text-white">{infor?.email}</p>
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
                <button className="text-3xl">
                  <TelegramIcon />
                </button>
              </div>
            </Stack>
            {/* <div className="">{value.map((x, index) =>{
              <div className="">
                <h1>{x.phone} </h1>
                <h1>{x.discord} </h1>
              </div>
            })}</div> */}
            {/* <h1> {infor.selectedPreview} </h1> */}
          </div>
          {/* links */}
        </div>
        <div className="bg-[#8BC940]   z-[9999] shadow-xl w-[90%]">
          <p>{infor?.link}</p>
          <p>{infor?.url}</p>
          <p>hehhhhh</p>
        </div>
        <div className="bg-black text-black  z-[999] shadow-xl w-[90%] h-auto ">
          <p className="text-black">{buttons?.email}</p>
          <p className="text-black">{buttons?.discord}</p>
          <p className="text-black">{buttons?.telegram}</p>
          <p className="text-black">{buttons?.phone}</p>
          <p className="text-black">hello</p>
          <p>hey</p>
        </div>
      </section>
    </div>
  )
}
