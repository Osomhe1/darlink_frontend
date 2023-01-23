import React, { useEffect, useState } from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Box, Typography } from '@mui/material'
import { LINK } from '../pages/api/ACTIONS.JS'
import api from '../pages/api/darlink'
import {useRouter} from 'next/router'

export default function Link() {

  const [open, setOpen] = useState(false)
  const [values, setValues] = useState({
    url: '',
    title: '',
    theme: '',
    subtitle: '',
    // type: '',
    dataFile: '',
  })
  const router = useRouter()

  const handleClick = () => {
    setOpen(!open)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(values, 'valuesss')
    try {
      const { data } = await api.post(LINK.ADD_LINK(), {
        ...values, type:"link"
      })
      console.log(values, 'values')
     
      if (data.success) {
        console.log(values, 'success')
        router.push('/dashboard')
        // setIsEditing(false)
        // handleData()
      } else {
        console.log(data, 'else')
      }
    } catch (error) {
      console.log(error)
      console.log(error.msg)
    }
  }

  //  const handleData = async () => {
  //    try {
  //      const { data } = await api.get(LINK.GET_LINK(), {})
  //      console.log(data, 'data')
  //      if (!data.success) navigate('/home')
  //      //todo
  //      //populate UI
  //      setUsers(data.profile)
  //    } catch (error) {
  //      // console.log(error.response.data.error)
  //      console.log(error, 'error')
  //    }
  //  }

   const handleDelete = async (e) => {
     try {
       values.id = e.target.id
       const { data } = await api.delete(LINK.DELETE_LINK(), {})
       if (data.success) {
         handleData()
       } else {
         //display error
       }
     } catch (error) {
       console.log(error.response.data.error)
     }
   }

   useEffect(() => {
    //  handleData()
   })

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
                        <form onSubmit={handleSubmit}>
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
                              <span className="text-[#8BC940]">Add New</span>
                            </label>
                            <Box>
                              <label htmlFor="url">URL</label>
                              <input
                                type="link"
                                id="links"
                                placeholder="no links or embles"
                                className="bg-gray-50  text-center border-dashed border-2 border-gray-300 text-gray-900 text-sm 
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
                            <Box>
                              <label htmlFor="url">TITLE</label>
                              <input
                                type="text"
                                id="links2"
                                placeholder="no links or embles"
                                className="bg-gray-50  text-center border-dashed border-2 border-gray-300 text-gray-900 text-sm 
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
                          </div>
                      <div className="text-center mt-6 float-right ">
                        <button
                          className="bg-[#8BC940] text-white active:bg-gray-700 text-sm font-bold uppercase
                       px-6 py-5 rounded absolute right-0 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[100px]
                       bottom-0 "
                          type="submit"
                          style={{ transition: 'all .15s ease' }}
                        >
                          save
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
