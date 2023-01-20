import React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Typography } from '@mui/material'


export default function Integrations() {

   const [open, setOpen] = React.useState(false)

   const handleClick = () => {
     setOpen(!open)
   }


  return (
    <div>
      <div className=''>
        {/* <!-- Start block --> */}

        <div className=''>
          <section className='bg-white dark:bg-gray-800 dark:text-gray-100 container mx-auto relative'>
            {/* container flex flex-col justify-center p-4 mx-auto md:p-8 */}
           

            <List
              sx={{ width: '100%', bgcolor: 'background.paper' }}
              component='nav'
              aria-labelledby='nested-list-subheader'
              className=' max-w-screen-xl px-4 pb-8 mx-auto lg:pb-4 lg:px-6  '
            >
              <ListItemButton onClick={handleClick}>
                <ListItemText>
                  <Typography variant='h4'>Integration</Typography>
                </ListItemText>
                {open ? (
                  <ExpandLess fontSize='large' />
                ) : (
                  <ExpandMore fontSize='large' />
                )}
              </ListItemButton>
              <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText>
                      
                      <div className='py-4 my-4'>
                        <div className='py-1'>
                          <div className=''>
                            <h1
                              className=' text-sm font-medium uppercase text-[#8BC940]
                           dark:text-gray-300 py-1'
                            >
                              LINK SEARCH
                            </h1>
                            <label className='inline-flex relative items-center  cursor-pointer'>
                              <input
                                type='checkbox'
                                value=''
                                className='sr-only peer'
                              />
                              <div
                                className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 
                          peer-focus:ring-[#8BC940] dark:peer-focus:ring-blue-800 dark:bg-gray-700 
                          peer-checked:after:translate-x-full peer-checked:after:border-white 
                          after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                              ></div>
                            </label>
                          </div>
                        </div>
                        <div className='py-1'>
                          <div className=''>
                            <h1
                              className=' text-sm font-medium uppercase text-[#8BC940]
                           dark:text-gray-300 py-1'
                            >
                              META PIXEL
                            </h1>
                            <label className='inline-flex relative items-center  cursor-pointer'>
                              <input
                                type='checkbox'
                                value=''
                                className='sr-only peer'
                                checked
                              />
                              <div
                                className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4
                             peer-focus:ring-[#8BC940] dark:peer-focus:ring-blue-800 dark:bg-gray-700
                              peer-checked:after:translate-x-full peer-checked:after:border-white 
                              after:content-[''] after:absolute after:top-0.5 after:left-[2px]
                               after:bg-white after:border-gray-300 after:border after:rounded-full 
                               after:h-5 after:w-5 after:transition-all dark:border-gray-600
                                peer-checked:bg-blue-600"
                              ></div>
                            </label>
                          </div>
                        </div>
                        <div className='py-1'>
                          <div className=''>
                            <h1
                              className=' text-sm font-medium uppercase text-[#8BC940]
                           dark:text-gray-300 py-1'
                            >
                              CONTACT CAPTURE
                            </h1>
                            <label className='inline- relative items-center  cursor-pointer'>
                              <input
                                type='checkbox'
                                value=''
                                className='sr-only peer'
                                disabled
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
                          </div>
                        </div>
                      </div>
                      <div className='text-center mt-6 float-right '>
                        <button
                          className='bg-[#8BC940] text-white active:bg-gray-700 text-sm font-bold uppercase
                       px-6 py-5 rounded absolute right-0 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[100px]
                       bottom-0 '
                          type='button'
                          style={{ transition: 'all .15s ease' }}
                        >
                          save
                        </button>
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
