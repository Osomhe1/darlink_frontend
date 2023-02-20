import React, {  useEffect, useRef, useState } from 'react'
import twitter from '../public/images/twitter.svg'
import twitter_black from '../public/images/twitter_black.svg'
import twitter_origin from '../public/images/twitter-original.svg'
import email from '../public/images/email.svg'
import email_2 from '../public/images/email_2.svg'
import Image from 'next/image'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Typography } from '@mui/material'
import api from '../pages/api/darlink'
import { BUTTONS } from '../pages/api/ACTIONS.JS'
import { ResetUser } from '../context/context'
import { useRouter } from 'next/router'
import Button from '../container/button'

export default function Buttons() {

  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [values, setValues] = useState({
    buttonId: '',
    email: '',
    discord: '',
    telegram: '',
  })
  const [active, setActive] = useState(false)
  const [infor, setInfor] = useState({
    email: '',
    discord: '',
    phone: '',
    telegram: '',
    social: '',
    music: '',
    contact: '',
    podcast: '',
    buttonId:'',
  })
 const [view, setView] = useState({
   email: '',
   discord: '',
   phone: '',
   telegram: '',
 });
  const handleSelect = (e)=>{
    const value = e.target.value
    const name =e.target.name;
    const exist = localStorage.getItem(`${e.target.name}`)
   
    if(exist !==null ){
       localStorage.removeItem(`${e.target.name}`)
       setView({ ...view, [e.target.name]: '' })
    }else{
      localStorage.setItem(`${e.target.name}`,e.target.value);
       setView({ ...view, [e.target.name]: name })
    }
  }
  const router = useRouter()
  const handleClick = () => {
    setOpen(!open)
  }
  const handleClick2 = () => {
    setOpen2(!open2)
  }
  const handleClick3 = () => {
    setOpen3(!open3)
  }
const emailRef = useRef(null)
const phoneRef = useRef(null)
const telegramRef = useRef(null)
const discordRef = useRef(null)
  
const handleChange = (e) => {
  setInfor({ ...infor, [e.target.name]: e.target.value })
}

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setActive(true)
      const buttonId = localStorage.getItem('buttonId')
      if (buttonId === null) {
        infor.buttonId = buttonId
        const { data } = await api.post(BUTTONS.ADD_BUTTON(), {
          ...infor,
        })
        setActive(false)
        if (data.success) {
          handleData()
        }
      } else {
        handleData()
        const { data } = await api.patch(BUTTONS.UPDATE_BUTTON(), {
          ...infor,
          buttonId,
        })
        setActive(false)
        if (data.success) {
          handleData()
        }
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          ResetUser()
          router.push('/Login')
        }
      }
    }
  }
  
   const handleData = async () => {
     try {
       const { data } = await api.get(BUTTONS.GET_BUTTON(), {})
       if (data.success) {
         localStorage.setItem('buttonId', data.button[0].buttonId)
         data.button.map((cu) => {
           for(const key in cu){
            infor[key] = cu[key];
           }
         })
       } 
     } catch (error) {
       if(error.response){
        if (error.response.status === 401) {
          ResetUser()
          router.push('/Login')
        }
       }
     }
   }

   const handleDelete = async (e) => {
     try {
       const { data } = await api.delete(BUTTONS.DELETE_BUTTON(), {})
       if (data.success) {
         handleData()
       } 
     } catch (error) {
       console.log(error.response.data.error)
     }
   }

   useEffect(() => {
     handleData()
   }, [])


  return (
    <div>
      <div className="">
        {/* <!-- Start block --> */}

        <div className="">
          <section className="bg-white dark:bg-gray-800 dark:text-gray-100 container mx-auto relative">

            <List
              sx={{ width: '100%', bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              className=" max-w-screen-xl px-4 pb-8 mx-auto lg:pb-4 lg:px-6  "
            >
              <ListItemButton onClick={handleClick}>
                <ListItemText>
                  <Typography variant="h4"> Buttons</Typography>
                </ListItemText>
                {open ? (
                  <ExpandLess fontSize="large" />
                ) : (
                  <ExpandMore fontSize="large" />
                )}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <form onSubmit={handleSubmit}>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText>
                        <div className="px-4 pb-4">
                          <h1 className="text-2xl py-4">Contact</h1>
                          {/* first inner */}

                          <List
                            sx={{ width: '100%', bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            className=" max-w-screen-xl px-4 pb-8 mx-auto lg:pb-4 lg:px-6  "
                          >
                            <ListItemButton onClick={handleClick2}>
                              <ListItemText>
                                <Typography variant="h6">Customize</Typography>
                              </ListItemText>
                              {open2 ? (
                                <ExpandLess fontSize="large" />
                              ) : (
                                <ExpandMore fontSize="large" />
                              )}
                            </ListItemButton>
                            <Collapse in={open2} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                  <ListItemText>
                                    <div className="px- pb-4">
                                      {/* shape */}
                                      <div className="">
                                        <div className="">
                                          <h1 className="text-sm py-2 uppercase">
                                            Shape
                                          </h1>
                                          <button
                                            className="bg-blue-500 text-white active:bg-gray-700 text-sm font-normal uppercase
                       px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none  mb-1 w-[100px]
                       bottom-0  "
                                            type="button"
                                            style={{
                                              transition: 'all .15s ease',
                                            }}
                                          >
                                            Square
                                          </button>
                                          <button
                                            className="bg-gray-200 text- active:bg-gray-700 text-sm font-normal uppercase
                       px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  mb-1 w-[100px]
                       bottom-0 "
                                            type="button"
                                            style={{
                                              transition: 'all .15s ease',
                                            }}
                                          >
                                            Round
                                          </button>
                                        </div>
                                      </div>
                                      {/* end of shape */}
                                      {/* style */}
                                      <div className="">
                                        <div className="">
                                          <h1 className="text-sm py-2 uppercase">
                                            style
                                          </h1>
                                          <div className="flex gap-4">
                                            <div className="border border-blue-600 h-28 w-40 text-center  ">
                                              <div className="py-4">
                                                <h1 className="py-1">
                                                  Minimal
                                                </h1>
                                                <button
                                                  className="bg-white flex text-black active:bg-gray-700 text-ms font-normal rounded-md
                                 py-2  shadow hover:shadow-lg outline-none focus:outline-none items-center justify-evenly    mb- w-[100px] m-auto
                                bottom-  "
                                                  type="button"
                                                  style={{
                                                    transition: 'all .15s ease',
                                                  }}
                                                >
                                                  <Image
                                                    src={email}
                                                    height={20}
                                                    w={20}
                                                    alt=""
                                                  />
                                                  Email
                                                </button>
                                              </div>
                                            </div>
                                            {/* end of first button */}
                                            <div className="border  h-28 w-40 text-center  ">
                                              <div className="py-4">
                                                <h1 className="py-1">
                                                  Colorful
                                                </h1>
                                                <button
                                                  className="bg-gray-200 flex text- active:bg-gray-700 text-sm font-normal
                                 py-2  shadow hover:shadow-lg outline-none focus:outline-none items-center justify-evenly    mb- w-[100px] m-auto
                                bottom-  "
                                                  type="button"
                                                  style={{
                                                    transition: 'all .15s ease',
                                                  }}
                                                >
                                                  <Image
                                                    src={email_2}
                                                    height={20}
                                                    w={20}
                                                    alt=""
                                                    className="text-blue-500"
                                                  />
                                                  Email
                                                </button>
                                              </div>
                                            </div>
                                            {/* end of second button */}
                                          </div>
                                        </div>
                                      </div>
                                      {/* end of style */}
                                      {/* position */}
                                      <div className="">
                                        <div className="">
                                          <h1 className="text-sm py-2 uppercase">
                                            Label
                                          </h1>
                                          <button
                                            className="bg-blue-500 text-white active:bg-gray-700 text-sm font-normal uppercase
                       px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none  mb-1 w-[100px]
                       bottom-0  "
                                            type="button"
                                            style={{
                                              transition: 'all .15s ease',
                                            }}
                                          >
                                            Type
                                          </button>
                                          <button
                                            className="bg-gray-200 text- active:bg-gray-700 text-sm font-normal uppercase
                       px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  mb-1 w-[100px]
                       bottom-0 "
                                            type="button"
                                            style={{
                                              transition: 'all .15s ease',
                                            }}
                                          >
                                            Details
                                          </button>
                                        </div>
                                      </div>
                                      {/* end of position */}
                                    </div>
                                  </ListItemText>
                                </ListItemButton>
                              </List>
                            </Collapse>
                          </List>
                          {/* end of first inner */}
                          <div className="py-4 my-4">
                            <div className="py-1">
                              <div className="">
                                <h1
                                  className=" text-sm font-medium uppercase text-gray-900
                           dark:text-gray-300 py-1"
                                >
                                  Email
                                </h1>
                                <label className="inline-flex relative items-center  cursor-pointer">
                                  <input
                                    type="checkbox"
                                    value={infor.email}
                                    name="email"
                                    className="sr-only peer"
                                    onClick={handleSelect}
                                    id={infor?.buttonId}
                                  />
                                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                                {view?.email && (
                                  <input
                                    type="email"
                                    className="border-0 px-3 py-5 placeholder-gray-400 focus:ring-[#8BC940]
                     text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring  w-full"
                                    placeholder="email"
                                    style={{ transition: 'all .15s ease' }}
                                    name="email"
                                    value={infor?.email}
                                    ref={emailRef}
                                    onChange={(e) => {
                                      handleChange(e)
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                            <div className="py-1">
                              <div className="">
                                <h1
                                  className=" text-sm font-medium uppercase text-gray-900
                           dark:text-gray-300 py-1"
                                >
                                  PHONE
                                </h1>
                                <label className="inline-flex relative items-center  cursor-pointer">
                                  <input
                                    type="checkbox"
                                    value={infor?.phone}
                                    className="sr-only peer"
                                    onClick={handleSelect}
                                    name="phone"
                                    id={infor.buttonId}
                                  />
                                  <div
                                    className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4
                             peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700
                              peer-checked:after:translate-x-full peer-checked:after:border-white 
                              after:content-[''] after:absolute after:top-0.5 after:left-[2px]
                               after:bg-white after:border-gray-300 after:border after:rounded-full 
                               after:h-5 after:w-5 after:transition-all dark:border-gray-600
                                peer-checked:bg-blue-600"
                                  ></div>
                                </label>
                                {view?.phone && (
                                  <input
                                    type="phone"
                                    className="border-0 px-3 py-5 placeholder-gray-400 focus:ring-[#8BC940]
                   text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring  w-full"
                                    placeholder="phone"
                                    value={infor?.phone}
                                    style={{ transition: 'all .15s ease' }}
                                    name="phone"
                                    ref={phoneRef}
                                    onChange={(e) => {
                                      handleChange(e)
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                            <div className="py-1">
                              <div className="">
                                <h1
                                  className=" text-sm font-medium uppercase text-gray-900
                           dark:text-gray-300 py-1"
                                >
                                  DISCORD
                                </h1>
                                <label className="inline- relative items-center  cursor-pointer">
                                  <input
                                    type="checkbox"
                                    value={infor.discord}
                                    className="sr-only peer"
                                    onClick={handleSelect}
                                    name="discord"
                                    id={infor?.buttonId}
                                  />
                                  <div
                                    className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 
                          peer-checked:after:translate-x-full peer-checked:after:border-white 
                          after:content-[''] after:absolute after:top-0.5 after:left-[2px]
                           after:bg-white after:border-gray-300 after:border after:rounded-full 
                           after:h-5 after:w-5 after:transition-all dark:border-gray-600
                            peer-checked:bg-blue-600"
                                  ></div>
                                </label>
                                {view?.discord && (
                                  <input
                                    type="text"
                                    className="border-0 px-3 py-5 placeholder-gray-400 focus:ring-[#8BC940]
                       text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring  w-full"
                                    placeholder="discord"
                                    style={{ transition: 'all .15s ease' }}
                                    name="discord"
                                    value={infor?.discord}
                                    ref={discordRef}
                                    onChange={(e) => {
                                      handleChange(e)
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                            <div className="py-1">
                              <div className="">
                                <h1
                                  className=" text-sm font-medium uppercase text-gray-900
                           dark:text-gray-300 py-1"
                                >
                                  TELEGRAM
                                </h1>
                                <label className="inline-flex relative items-center  cursor-pointer">
                                  <input
                                    type="checkbox"
                                    value={infor.telegram}
                                    name="telegram"
                                    className="sr-only peer"
                                    onClick={handleSelect}
                                    id={infor?.buttonId}
                                  />
                                  <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                                {view?.telegram && (
                                  <input
                                    type="text"
                                    className="border-0 px-3 py-5 placeholder-gray-400 focus:ring-[#8BC940]
                   text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring  w-full"
                                    placeholder="telegram"
                                    style={{ transition: 'all .15s ease' }}
                                    name="telegram"
                                    value={infor?.telegram}
                                    ref={telegramRef}
                                    onChange={(e) => {
                                      handleChange(e)
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                          {/* second inner */}

                          <List
                            sx={{ width: '100%', bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            className=" max-w-screen-xl px-4 pb-8 mx-auto lg:pb-4 lg:px-6  "
                          >
                            <h1 className="text-2xl py-4">Social</h1>
                            <ListItemButton onClick={handleClick3}>
                              <ListItemText>
                                <Typography variant="h6">Customize</Typography>
                              </ListItemText>
                              {open3 ? (
                                <ExpandLess fontSize="large" />
                              ) : (
                                <ExpandMore fontSize="large" />
                              )}
                            </ListItemButton>
                            <Collapse in={open3} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                  <ListItemText>
                                    <div className="px- pb-4">
                                      {/* shape */}
                                      <div className="">
                                        <div className="">
                                          <h1 className="text-sm py-2 uppercase">
                                            Shape
                                          </h1>
                                          <button
                                            className="bg-blue-500 text-white active:bg-gray-700 text-sm font-normal uppercase
                       px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none  mb-1 w-[100px]
                       bottom-0  "
                                            type="button"
                                            style={{
                                              transition: 'all .15s ease',
                                            }}
                                          >
                                            Square
                                          </button>
                                          <button
                                            className="bg-gray-200 text- active:bg-gray-700 text-sm font-normal uppercase
                       px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  mb-1 w-[100px]
                       bottom-0 "
                                            type="button"
                                            style={{
                                              transition: 'all .15s ease',
                                            }}
                                          >
                                            Round
                                          </button>
                                        </div>
                                      </div>
                                      {/* end of shape */}
                                      {/* style */}
                                      <div className="">
                                        <div className="">
                                          <h1 className="text-sm py-2 uppercase">
                                            style
                                          </h1>
                                          <div className="flex gap-4">
                                            <div className="border-2 border-blue-600 h-28 w-40 text-center  ">
                                              <div className="py-4">
                                                <h1 className="py-1">
                                                  Minimal
                                                </h1>
                                                <button
                                                  className="bg-white text-white border active:bg-gray-700 text-sm font-normal uppercase
                                 py-3  shadow hover:shadow-lg outline-none focus:outline-none     mb- w-[50px] m-auto
                                bottom-  "
                                                  type="button"
                                                  style={{
                                                    transition: 'all .15s ease',
                                                  }}
                                                >
                                                  <Image
                                                    src={twitter_black}
                                                    height={20}
                                                    w={20}
                                                    alt=""
                                                    className="mx-auto"
                                                  />
                                                </button>
                                              </div>
                                            </div>
                                            {/* end of first button */}
                                            <div className="border-2 border-blue-600 h-28 w-40 text-center  ">
                                              <div className="py-4">
                                                <h1 className="py-1">
                                                  Colorful
                                                </h1>
                                                <button
                                                  className="bg-gray-200 border text-white active:bg-gray-700 text-sm font-normal uppercase
                                 py-3  shadow hover:shadow-lg outline-none focus:outline-none     mb- w-[50px] m-auto
                                bottom-  "
                                                  type="button"
                                                  style={{
                                                    transition: 'all .15s ease',
                                                  }}
                                                >
                                                  <Image
                                                    src={twitter_origin}
                                                    height={20}
                                                    w={20}
                                                    alt=""
                                                    className="mx-auto"
                                                  />
                                                </button>
                                              </div>
                                            </div>
                                            {/* end of second button */}
                                            <div className="border-2 border-blue-600 h-28 w-40 text-center  ">
                                              <div className="py-4">
                                                <h1 className="py-1">
                                                  One Click
                                                </h1>
                                                <button
                                                  className="bg-blue-500 flex text-white active:bg-gray-700 text-sm font-normal rounded-md
                                 py-2  shadow hover:shadow-lg outline-none focus:outline-none items-center justify-evenly    mb- w-[100px] m-auto
                                bottom-  "
                                                  type="button"
                                                  style={{
                                                    transition: 'all .15s ease',
                                                  }}
                                                >
                                                  <Image
                                                    src={twitter}
                                                    height={15}
                                                    w={15}
                                                    alt=""
                                                  />
                                                  Follow
                                                </button>
                                              </div>
                                            </div>
                                            {/* end of third button */}
                                          </div>
                                        </div>
                                      </div>
                                      {/* end of style */}
                                      {/* position */}
                                      <div className="">
                                        <div className="">
                                          <h1 className="text-sm py-2">
                                            POSITION
                                          </h1>
                                          <button
                                            className="bg-blue-500 text-white active:bg-gray-700 text-sm font-normal uppercase
                       px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none  mb-1 w-[100px]
                       bottom-0  "
                                            type="button"
                                            style={{
                                              transition: 'all .15s ease',
                                            }}
                                          >
                                            Top
                                          </button>
                                          <button
                                            className="bg-gray-200 text- active:bg-gray-700 text-sm font-normal uppercase
                       px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  mb-1 w-[100px]
                       bottom-0 "
                                            type="button"
                                            style={{
                                              transition: 'all .15s ease',
                                            }}
                                          >
                                            Bottom
                                          </button>
                                        </div>
                                      </div>
                                      {/* end of position */}
                                    </div>
                                  </ListItemText>
                                </ListItemButton>
                              </List>
                            </Collapse>
                          </List>
                          {/* end of seccond inner */}
                        </div>
                        {/* last inner */}
                        <div className="px-4 pb-4">
                          <div className="my-3 border-b-2">
                            <h2 className="uppercase text-sm py-2">
                              CATEGORIES
                            </h2>
                            <button
                              type="button"
                              className="text-white bg-blue-500 border border-gray-300 focus:outline-none
                         hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  rounded-lg 
                         text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white
                          dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600
                           dark:focus:ring-gray-700"
                            >
                              Social
                            </button>
                            <button
                              type="button"
                              className="py-2.5 px-5 mr-2 mb-2 text-sm  text-gray-900 focus:outline-none bg-gray-200 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                              Music
                            </button>
                            <button
                              type="button"
                              className="py-2.5 px-5 mr-2 mb-2 text-sm  text-gray-900 focus:outline-none bg-gray-200 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                              Podcast
                            </button>
                            <button
                              type="button"
                              className="py-2.5 px-5 mr-2 mb-2 text-sm  text-gray-900 focus:outline-none bg-gray-200 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                              Contact
                            </button>
                          </div>
                          <div className="my-3 py-3 ">
                            <div className=" flex flex-wrap">
                              <button
                                type="button"
                                className="text-gray-900 bg-white border flex gap-2 items-center border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              >
                                Light
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill=""
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 "
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                    className="fill-blue-500 text-blue-500"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="text-gray-900 bg-white border flex gap-2 items-center border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              >
                                Light
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill=""
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 "
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                    className="fill-blue-500 text-blue-500"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="text-gray-900 bg-white border flex gap-2 items-center border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              >
                                Light
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill=""
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 "
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                    className="fill-blue-500 text-blue-500"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="text-gray-900 bg-white border flex gap-2 items-center border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              >
                                Light
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill=""
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 "
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                    className="fill-blue-500 text-blue-500"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="text-gray-900 bg-white border flex gap-2 items-center border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              >
                                Light
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill=""
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 "
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                    className="fill-blue-500 text-blue-500"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="text-gray-900 bg-white border flex gap-2 items-center border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              >
                                Light
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill=""
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 "
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                    className="fill-blue-500 text-blue-500"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="text-gray-900 bg-white border flex gap-2 items-center border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              >
                                Light
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill=""
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 "
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                    className="fill-blue-500 text-blue-500"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="text-gray-900 bg-white border flex gap-2 items-center border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              >
                                Light
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill=""
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 "
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                    className="fill-blue-500 text-blue-500"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="text-gray-900 bg-white border flex gap-2 items-center border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              >
                                Light
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill=""
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 "
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                    className="fill-blue-500 text-blue-500"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="text-gray-900 bg-white border flex gap-2 items-center border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              >
                                Light
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill=""
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 "
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                    className="fill-blue-500 text-blue-500"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="text-gray-900 bg-white border flex gap-2 items-center border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              >
                                Light
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill=""
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 "
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                    className="fill-blue-500 text-blue-500"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* end of last inner */}

                        <div className="text-center mt-6 float-right ">
                       
                          <Button
                            type="submit"
                            disabled={active}
                            label={active ? 'Saving...' : 'Save'}
                            id={infor?.buttonId}
                          />
                        </div>
                      </ListItemText>
                    </ListItemButton>
                  </List>
                </form>
              </Collapse>
            </List>
          </section>
        </div>
        {/* <!-- End block --> */}
      </div>
    </div>
  )
}
