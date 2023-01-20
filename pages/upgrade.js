import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Typography } from '@mui/material'
import Link from 'next/link'

export default function Upgrade() {

   const [open, setOpen] = React.useState(false)
   const [open2, setOpen2] = React.useState(false)
   const [open3, setOpen3] = React.useState(false)
   const [open4, setOpen4] = React.useState(false)

   const handleClick = () => {
     setOpen(!open)
   }
   const handleClick2 = () => {
     setOpen2(!open2)
   }
   const handleClick3 = () => {
     setOpen3(!open3)
   }
   const handleClick4 = () => {
     setOpen4(!open4)
   }


  return (
    <div>
      <div className='max-w-screen-xl m-auto'>
        {/* <!-- Start block --> */}
        <div className=''>
          <div className=''>
            <Typography variant='h2' className='text-[#8BC940] text-center'>
              Upgrade
            </Typography>
          </div>

          <div className='bg-white max-w-screen-lg m-auto my-4 '>
            <section className='bg-white dark:bg-gray-800 dark:text-gray-100 container '>
              <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component='nav'
                aria-labelledby='nested-list-subheader'
                className=' max-w-screen-xl px-4 pb-8 mx-auto lg:pb-4 lg:px-6  '
              >
                <ListItemButton onClick={handleClick}>
                  <ListItemText>
                    <Typography className='text-[#8BC940]' variant='h4'>
                      Basic
                    </Typography>
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
                        <div className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
                          <h3 className='mb-4 text-2xl font-semibold'>
                            Company
                          </h3>
                          <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
                            Relevant for multiple users, extended & premium
                            support.
                          </p>
                          <div className='flex items-baseline justify-center my-8'>
                            <span className='mr-2 text-5xl font-extrabold'>
                              $99
                            </span>
                            <span className='text-gray-500 dark:text-gray-400 dark:text-gray-400>'>
                              /month
                            </span>
                          </div>
                          {/* <!-- List --> */}
                          <ul role='list' className='mb-8 space-y-4 text-left'>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>Individual configuration</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>No setup, or hidden fees</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>
                                Team size:{' '}
                                <span className='font-semibold'>
                                  10 developers
                                </span>
                              </span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>
                                Premium support:{' '}
                                <span className='font-semibold'>24 months</span>
                              </span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>
                                Free updates:{' '}
                                <span className='font-semibold'>24 months</span>
                              </span>
                            </li>
                          </ul>
                          <Link
                            href='#/'
                            className='text-white bg-[#8BC940] focus:ring-[#8BC940]  hover:bg-[#97ff19] focus:ring-4  
                  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900'
                          >
                            Get started
                          </Link>
                        </div>
                      </ListItemText>
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </section>
          </div>
          <div className='bg-white max-w-screen-lg m-auto my-4 '>
            <section className='bg-white dark:bg-gray-800 dark:text-gray-100 container '>
              <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component='nav'
                aria-labelledby='nested-list-subheader'
                className=' max-w-screen-xl px-4 pb-8 mx-auto lg:pb-4 lg:px-6  '
              >
                <ListItemButton onClick={handleClick2}>
                  <ListItemText>
                    <Typography className='text-[#8BC940]' variant='h4'>
                      Standard
                    </Typography>
                  </ListItemText>
                  {open2 ? (
                    <ExpandLess fontSize='large' />
                  ) : (
                    <ExpandMore fontSize='large' />
                  )}
                </ListItemButton>
                <Collapse in={open2} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText>
                        <div className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
                          <h3 className='mb-4 text-2xl font-semibold'>
                            Company
                          </h3>
                          <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
                            Relevant for multiple users, extended & premium
                            support.
                          </p>
                          <div className='flex items-baseline justify-center my-8'>
                            <span className='mr-2 text-5xl font-extrabold'>
                              $99
                            </span>
                            <span className='text-gray-500 dark:text-gray-400 dark:text-gray-400>'>
                              /month
                            </span>
                          </div>
                          {/* <!-- List --> */}
                          <ul role='list' className='mb-8 space-y-4 text-left'>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>Individual configuration</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>No setup, or hidden fees</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>
                                Team size:{' '}
                                <span className='font-semibold'>
                                  10 developers
                                </span>
                              </span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>
                                Premium support:{' '}
                                <span className='font-semibold'>24 months</span>
                              </span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>
                                Free updates:{' '}
                                <span className='font-semibold'>24 months</span>
                              </span>
                            </li>
                          </ul>
                          <Link
                            href='#/'
                            className='text-white bg-[#8BC940] focus:ring-[#8BC940]  hover:bg-[#97ff19] focus:ring-4  
                  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900'
                          >
                            Get started
                          </Link>
                        </div>
                      </ListItemText>
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </section>
          </div>
          <div className='bg-white max-w-screen-lg m-auto my-4 '>
            <section className='bg-white dark:bg-gray-800 dark:text-gray-100 container '>
              <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component='nav'
                aria-labelledby='nested-list-subheader'
                className=' max-w-screen-xl px-4 pb-8 mx-auto lg:pb-4 lg:px-6  '
              >
                <ListItemButton onClick={handleClick3}>
                  <ListItemText>
                    <Typography variant='h4' className='text-[#8BC940]'>
                      Preminum
                    </Typography>
                  </ListItemText>
                  {open3 ? (
                    <ExpandLess fontSize='large' />
                  ) : (
                    <ExpandMore fontSize='large' />
                  )}
                </ListItemButton>
                <Collapse in={open3} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText>
                        <div className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
                          <h3 className='mb-4 text-2xl font-semibold'>
                            Company
                          </h3>
                          <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
                            Relevant for multiple users, extended & premium
                            support.
                          </p>
                          <div className='flex items-baseline justify-center my-8'>
                            <span className='mr-2 text-5xl font-extrabold'>
                              $99
                            </span>
                            <span className='text-gray-500 dark:text-gray-400 dark:text-gray-400>'>
                              /month
                            </span>
                          </div>
                          {/* <!-- List --> */}
                          <ul role='list' className='mb-8 space-y-4 text-left'>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>Individual configuration</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>No setup, or hidden fees</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>
                                Team size:{' '}
                                <span className='font-semibold'>
                                  10 developers
                                </span>
                              </span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>
                                Premium support:{' '}
                                <span className='font-semibold'>24 months</span>
                              </span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>
                                Free updates:{' '}
                                <span className='font-semibold'>24 months</span>
                              </span>
                            </li>
                          </ul>
                          <Link
                            href='#/'
                            className='text-white bg-[#8BC940] focus:ring-[#8BC940]  hover:bg-[#97ff19] focus:ring-4  
                  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900'
                          >
                            Get started
                          </Link>
                        </div>
                      </ListItemText>
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </section>
          </div>
          <div className='bg-white max-w-screen-lg m-auto my-4 '>
            <section className='bg-white dark:bg-gray-800 dark:text-gray-100 container '>
              <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component='nav'
                aria-labelledby='nested-list-subheader'
                className=' max-w-screen-xl px-4 pb-8 mx-auto lg:pb-4 lg:px-6  '
              >
                <ListItemButton onClick={handleClick4}>
                  <ListItemText>
                    <Typography variant='h4' className='text-[#8BC940]'>
                      Entrapenur
                    </Typography>
                  </ListItemText>
                  {open4 ? (
                    <ExpandLess fontSize='large' />
                  ) : (
                    <ExpandMore fontSize='large' />
                  )}
                </ListItemButton>
                <Collapse in={open4} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText>
                        <div className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
                          <h3 className='mb-4 text-2xl font-semibold'>
                            Company
                          </h3>
                          <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
                            Relevant for multiple users, extended & premium
                            support.
                          </p>
                          <div className='flex items-baseline justify-center my-8'>
                            <span className='mr-2 text-5xl font-extrabold'>
                              $99
                            </span>
                            <span className='text-gray-500 dark:text-gray-400 dark:text-gray-400>'>
                              /month
                            </span>
                          </div>
                          {/* <!-- List --> */}
                          <ul role='list' className='mb-8 space-y-4 text-left'>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>Individual configuration</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>No setup, or hidden fees</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>
                                Team size:{' '}
                                <span className='font-semibold'>
                                  10 developers
                                </span>
                              </span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>
                                Premium support:{' '}
                                <span className='font-semibold'>24 months</span>
                              </span>
                            </li>
                            <li className='flex items-center space-x-3'>
                              {/* <!-- Icon --> */}
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                              <span>
                                Free updates:{' '}
                                <span className='font-semibold'>24 months</span>
                              </span>
                            </li>
                          </ul>
                          <Link
                            href='#/'
                            className='text-white bg-[#8BC940] focus:ring-[#8BC940]  hover:bg-[#97ff19] focus:ring-4  
                  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900'
                          >
                            Get started
                          </Link>
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
    </div>
  )
}
