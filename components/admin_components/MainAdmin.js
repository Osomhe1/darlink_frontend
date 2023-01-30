import React, { useContext, useEffect, useState } from 'react'

import InfoCard from './Card'
import Tables from './Table'
// import {ChatIcon} from '@mui/icons-material'
import  AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded'
import { PROFILE } from '../../pages/api/ACTIONS.JS'
import api from '../../pages/api/darlink'
// import { UserContext } from '../../context/context'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { ResetUser } from '../../context/context'
import UserInfo from '../verify'



export default function Profile() {

  const [user, setUser] = useState()
  const [users, setUsers] = useState([])
   const router = useRouter()


  const handleData = async () => {
    try {
      const { data } = await api.get(PROFILE.ADMIN_PROFILE(), {})
      console.log(data, 'data')
      if (data.success) 
      //todo
      //populate UI
      setUser(data.profile)
    } catch (error) {
      // console.log(error.response.data.error)
      console.log(error, 'error')
      if (error.response.status === 401) {
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
  }, [])
  
  return (
    <>
      <main className='profile-page mx- '>
        {/* pages */}
        <div className='md:flex justify-between -mt-5 md:-mt-24 xl:w-5/6 my-  '>
          <div className=' ml-20 md:ml-0'>
            <h1 className='text-[#8BC940] font-bold text-5xl '>My Page</h1>
          </div>
        </div>
        <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 xl:w-5/6 '>
          <InfoCard title='Total clients' value='6389'>
            
            <AccountCircleRoundedIcon className='mr-4' />
          </InfoCard>

          <InfoCard title='Account balance' value='$ 46,760.89'>
            
            <AttachMoneyRoundedIcon className='mr-4' />
          </InfoCard>

          <InfoCard title='New sales' value='376'>
            
            <AccountCircleRoundedIcon className='mr-4' />
          </InfoCard>

          <InfoCard title='Pending contacts' value='35'>
            
            <AccountCircleRoundedIcon className='mr-4' />
          </InfoCard>
        </div>

        <div className='md:w-5/6'>
          <Tables />
        </div>
      </main>
    </>
  )
}
