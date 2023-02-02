import React, { useContext, useEffect, useState } from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Box, Button, Typography } from '@mui/material'
import { LINK } from '../pages/api/ACTIONS.JS'
import api from '../pages/api/darlink'
import {useRouter} from 'next/router'
import { ResetUser, UserContext } from '../context/context'
import { toast } from 'react-toastify'

export default function Link() {

  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [values, setValues] = useState({
    url: '',
    title: '',
    theme: '',
    subtitle: '',
    // type: '',
    dataFile: '',
  })
  const router = useRouter()
  const { Logout } = useContext(UserContext)
  const [active, setActive] = useState(false)


  const handleClick = () => {
    setOpen(!open)
  }
  const handleClick2 = () => {
    setOpen2(!open2)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setActive(true)
      const { data } = await api.post(LINK.ADD_LINK(), {
        ...values, type:"link"
      })
     setActive(false)
      if (data.success) {
        router.push('/dashboard')
        
      } else {
      }
    } catch (error) {
      // console.log(error)
      // console.log(error.msg)
      setActive(false)
      if (error.response.status === 401) {
        toast.error(error.response.data.error)
         ResetUser()
      }
    }
  }

 

   const handleDelete = async (e) => {
     try {
       const { data } = await api.delete(LINK.DELETE_LINK(), {})
       if (data.success) {
         handleData()
       } else {
         //display error
       }
     } catch (error) {
      //  console.log(error.response.data.error)
      toast.error(error.response.data.error)
     }
   }

   const handleData = async (e) => {
     try {
       const { data } = await api.get(LINK.GET_LINK(), {})
       if (data.success) {
         localStorage.setItem('link', data.Link)
       } else {
         //display error
       }
     } catch (error) {
       if (error.response.status === 401) {
         ResetUser()
         router.push('/auth/Login')
       }
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
            {/* container flex flex-col justify-center p-4 mx-auto md:p-8 */}

            <List
              sx={{ width: '100%', bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              className=" max-w-screen-xl px-4 pb-8 mx-auto lg:pb-4 lg:px-6  "
            >
              <ListItemButton onClick={handleClick}>
                <ListItemText>
                  <Typography variant="h4">Links & Embeds</Typography>
                </ListItemText>
                {open ? (
                  <ExpandLess fontSize="large" />
                ) : (
                  <ExpandMore fontSize="large" />
                )}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText>
                      <div className="px-4 pb-4">
                        <label
                          for="add_new"
                          className=" items-center gap-2 mb-2 text-2xl inline-flex font-normal text-white dark:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill=""
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-12 h-12 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              className=" fill-[#8BC940]"
                            />
                          </svg>
                          <span className="text-[#8BC940]">Add New</span>
                        </label>

                        <form onSubmit={handleSubmit}>
                          <div className="border-2 p-4 mb-12">
                            <div className="mb-6 ">
                              <label
                                for="add_new"
                                className=" items-center gap-2 mb-2 text-2xl inline-flex font-normal text-white dark:text-white"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill=""
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-12 h-12 "
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    className=" fill-[#8BC940]"
                                  />
                                </svg>
                                <span
                                  className="text-[#8BC940]"
                                  onClick={handleClick2}
                                >
                                  New Link{' '}
                                </span>
                              </label>
                              <Collapse in={open2} timeout="auto" unmountOnExit>
                                <Box className="py-2">
                                  <label htmlFor="url">URL</label>
                                  <input
                                    type="link"
                                    id="links"
                                    placeholder="no links or embles"
                                    className="bg-gray-50  text-center   border-gray-300 text-gray-900 text-sm 
                          rounded-lg focus:ring-[#8BC940] focus:border-[#8BC940] block w-full p-2.5 py-5
                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    name="url"
                                    onChange={(e) => {
                                      setValues({
                                        ...values,
                                        [e.target.name]: e.target.value,
                                      })
                                    }}
                                  />
                                </Box>
                                <Box className="py-2">
                                  <label className="" htmlFor="title">
                                    TITLE
                                  </label>
                                  <input
                                    type="text"
                                    id="links2"
                                    placeholder="no links or embles"
                                    className="bg-gray-50  text-center  border-gray-300 text-gray-900 text-sm 
                          rounded-lg focus:ring-[#8BC940] focus:border-[#8BC940] block w-full p-2.5 py-5
                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    name="title"
                                    onChange={(e) => {
                                      setValues({
                                        ...values,
                                        [e.target.name]: e.target.value,
                                      })
                                    }}
                                  />
                                </Box>
                                <div className="flex justify-between mt-4 py-6">
                                  <button
                                    color="error"
                                    className="text-red-500 text-lg w-[150px] border-2 p-2 border-red-500"
                                    variant="outlined"
                                    onClick={handleDelete}
                                  >
                                    Delete
                                  </button>
                                  <Button
                                    className=" text-lg w-[150px] border-2 p-2 "
                                    variant="outlined"
                                    onClick={handleClick2}
                                  >
                                    Done
                                  </Button>
                                </div>
                              </Collapse>
                            </div>
                          </div>

                          <div className="text-center mt-6 float-right ">
                            <button
                              className="bg-[#8BC940] text-white active:bg-gray-700 text-sm font-bold uppercase
                       px-6 py-5 rounded absolute right-0 shadow hover:shadow-lg outline-none focus:outline-none mr-1 -mb-1 w-[100px]
                       bottom-0 "
                              type="submit"
                              style={{ transition: 'all .15s ease' }}
                              disabled={active}
                            >
                              {active ? 'Saving...' : 'Save'}
                            </button>
                          </div>
                        </form>
                      </div>
                    </ListItemText>
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </section>
        </div>
        {/* <!-- End block --> */}
      </div>
    </div>
  )
}
