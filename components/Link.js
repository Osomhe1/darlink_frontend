import React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Typography } from '@mui/material'

export default function Link() {

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
                  <Typography variant='h4'>Links & Embeds</Typography>
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
                      <div className='px-4 pb-4'>
                        <form>
                          <div className='mb-6 '>
                            <label
                              for='add_new'
                              className=' items-center gap-2 mb-2 text-2xl inline-flex font-normal text-white dark:text-white'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill=''
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-12 h-12 '
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                                  className=' fill-[#8BC940]'
                                />
                              </svg>
                              <span className='text-[#8BC940]'>Add New</span>
                            </label>
                            <input
                              type='text'
                              id='links'
                              placeholder='no links or embles'
                              className='bg-gray-50  text-center border-dashed border-2 border-gray-300 text-gray-900 text-sm 
                          rounded-lg focus:ring-[#8BC940] focus:border-[#8BC940] block w-full p-2.5 py-5
                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              required
                            />
                          </div>
                        </form>
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
