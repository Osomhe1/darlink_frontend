
import React, { useEffect } from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Typography } from '@mui/material'
import { useState } from 'react'
import  api from '../pages/api/darlink'
import { APPREANCE } from '../pages/api/ACTIONS.JS'
import { useRouter } from 'next/router'
import { ResetUser } from '../context/context'
import Button from '../container/button'


export default function Appreance() {

  const [open, setOpen] = useState(false)
  const [values, setValues] = useState({
    type:'',
    data:'',
    iconImage:'',
  })
  const [active, setActive] = useState(false)
   const router = useRouter()
  const appreances = []

  const handleClick = () => {
    setOpen(!open)
  }
const indicator =
  `py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-red-500 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`;
const handleSelect = (e)=> {
  const type = e.target.name;

  if(type === "icon"){
    //to do == handle file select for  the icon
    
  }else{
    values.type =type;
    values.data =e.target.value;

  }
  
handleSubmit();

  }


   const handleSubmit = async () => {
     try {
      setActive(true)
         const { data } = await api.post(APPREANCE.ADD_APPREANCE(), {
           ...values,
         })
         setActive(false)
         if (data.success) {
           router.push('/dashboard')
         
       }
     } catch (error) {
      setActive(false)
      if (error.response.status === 401) {
        ResetUser()
        router.push('/Login')
      }
     }
   }

   const handleData = async () => {
     try {
         const { data } = await api.get(APPREANCE.GET_APPREANCE())
         if (data.success) {
          const infor = data.appreances.map((cur) => {
            return cur
          });
          appreances.push(...infor);
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

useEffect(() =>{
handleData()
}, [])
  


  return (
    <div className="">
      {/* <!-- Start block --> */}

      <div className="">
        <section className="bg-white container mx-auto dark:bg-gray-800 dark:text-gray-100 relative ">

          <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            className=" max-w-screen-xl px-4 pb-8 mx-auto lg:pb-4 lg:px-6  "
          >
            <ListItemButton onClick={handleClick}>
              <ListItemText>
                <Typography variant="h4"> Appearnces</Typography>
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
                    <form onSubmit={handleSubmit} action="">
                      <div className="px-4 pb-4">
                        <div className="my-3">
                          <h2 className="uppercase">Font</h2>
                          <button
                            value={'Graphik'}
                            name={'font'}
                            type="button"
                            onClick={(e) => {
                              handleSelect(e)
                            }}
                            className={
                              appreances.find((s) => s.type === name)
                                ? indicator
                                : `py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`
                            }
                          >
                            Graphik
                          </button>
                          <button
                            value={'Roboto Mono'}
                            name={'font'}
                            type="button"
                            onClick={(e) => {
                              handleSelect(e)
                            }} 
                            className={
                              appreances.find((s) => s.type === name)
                                ? indicator
                                : `py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`
                            }
                          >
                            Roboto Mono
                          </button>

                          <button
                            value={'Maitree'}
                            name={'font'}
                            type="button"
                            onClick={(e) => {
                              handleSelect(e)
                            }}
                            className={
                              appreances.find((s) => s.type === name)
                                ? indicator
                                : `py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`
                            }
                          >
                            Maitree
                          </button>
                          <button
                            type="button"
                            value={'Chillax'}
                            name={'font'}
                            onClick={(e) => {
                              handleSelect(e)
                            }}
                            className={
                              appreances.find((s) => s.type === name)
                                ? indicator
                                : `py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`
                            }
                          >
                            Chillax
                          </button>
                          <button
                            type="button"
                            value={'Nippo'}
                            name={'font'}
                            onClick={(e) => {
                              handleSelect(e)
                            }}
                            className={
                              appreances.find((s) => s.type === name)
                                ? indicator
                                : `py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`
                            }
                          >
                            Nippo
                          </button>
                        </div>
                        <div className="my-3">
                          <h2 className="uppercase">THEME</h2>

                          <button
                            type="button"
                            value={'Light'}
                            name={'theme'}
                            onClick={(e) => {
                              handleSelect(e)
                            }}
                            className={
                              appreances.find((s) => s.type === name)
                                ? indicator
                                : `py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`
                            }
                          >
                            Light
                          </button>
                          <button
                            type="button"
                            name={'theme'}
                            value={'Dark'}
                            onClick={(e) => {
                              handleSelect(e)
                            }}
                            className={
                              appreances.find((s) => s.type === name)
                                ? indicator
                                : `py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`
                            }
                          >
                            Dark
                          </button>
                          <button
                            type="button"
                            name={'theme'}
                            value={'Viod'}
                            onClick={(e) => {
                              handleSelect(e)
                            }}
                            className={
                              appreances.find((s) => s.type === name)
                                ? indicator
                                : `py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`
                            }
                          >
                            Viod
                          </button>
                        </div>
                        <div className="my-3">
                          <h2 className="uppercase">FAVICON</h2>

                          <button
                            type="button"
                            name={'icon'}
                            value={'Custom'}
                            onClick={(e) => {
                              handleSelect(e)
                            }}
                            className={
                              appreances.find((s) => s.type === name)
                                ? indicator
                                : `py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`
                            }
                          >
                            Custom
                          </button>
                          <button
                            type="button"
                            name={'icon'}
                            value={'Default'}
                            onClick={(e) => {
                              handleSelect(e)
                            }}
                            className={
                              appreances.find((s) => s.type === name)
                                ? indicator
                                : `py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`
                            }
                          >
                            Default
                          </button>
                        </div>
                        <div className="my-3">
                          <h2 className="uppercase">LINK THUMBNAILS</h2>

                          <button
                            type="button"
                            name={'link'}
                            value={'Squre'}
                            onClick={(e) => {
                              handleSelect(e)
                            }}
                            className={
                              appreances.find((s) => s.type === name)
                                ? indicator
                                : `py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`
                            }
                          >
                            Squre
                          </button>
                          <button
                            type="button"
                            name={'link'}
                            value={'Round'}
                            onClick={(e) => {
                              handleSelect(e)
                            }}
                            className={
                              appreances.find((s) => s.type === name)
                                ? indicator
                                : `py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`
                            }
                          >
                            Round
                          </button>
                        </div>
                      </div>
                      <div className="text-center mt-6 float-right ">
                        
                        <Button
                          type="submit"
                          disabled={active}
                          label={active ? 'Saving...' : 'Save'}
                        />
                      </div>
                    </form>
                  </ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </section>
      </div>
      {/* <!-- End block --> */}
    </div>
  )
}
