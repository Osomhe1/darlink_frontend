import React from 'react'
import { Avatar, Box, Stack } from '@mui/material'
import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'

export default function Preview() {
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
                />
              </div>
              <div className="text-center">
                <p className='text-white'>My name</p>
              </div>
              <div className="text-white text-center ">
                <CallIcon />
                <EmailIcon />
                <CallIcon />
              </div>
            </Stack>
          </div>
        </div>
        
      </section>
      
    </div>
  )
}
