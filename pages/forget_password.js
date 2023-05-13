import React, { useState } from 'react'
import Layout from '../components/Layout'
import { USER_ENDPOINTS } from './api/ACTIONS.JS'
import api from './api/darlink'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '../container/button'

export default function ForgetPassword() {

  const [values, setValues] = useState({
    username: '',
    email: '',
  })

  const [active, setActive] = useState(false)
  const [error, setError] = useState(false)

  const router = useRouter()
  const { id } = router.query

   const handleSubmit = async (e) => {
     e.preventDefault()
     try {
       setActive(true)
       const { data } = await api.get(USER_ENDPOINTS.FORGET_PASSWORD(), {
         params:{ 
          username:values.username,
          email: values.email,
         } 
         
       })
       setActive(false)
       if (data.success) {
         localStorage.setItem('email', data.user.email)
         localStorage.setItem('emailId', data.user.id)
         localStorage.setItem('id', data.user.id)
         router.push(`/recovery`)
        }
       if(data.error)
       toast.error(data.error)
     } catch (error) {
       setActive(false)

       if (error.response) {
         const err = error.response.data.error
         setError(err)
         toast.error(err)
       } 
     }
   }

  return (
    <Layout>
      <div>
        <section>
          <form
            onSubmit={handleSubmit}
            className="Avenir  lg:w-2/5 m-3 md:w-3/5 md:m-auto lg:m-auto py-28 "
          >
            <h2 className="text-center font-bold text-3xl md:text-5xl py-5 ">
              Forgot Password
            </h2>
            <p className="text-center  text  py-5 ">
              Enter your email or username below.
            </p>

            <div className="relative w-full mb-3">
              <input
                className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring w-full focus:ring-[#8BC940]"
                placeholder="Enter email or username"
                style={{ transition: 'all .15s ease' }}
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value })
                }}
                name="username"
              />
            </div>

            <div className="text-center mt-6">
             
              <Button
                type="submit"
                disabled={active}
                label={active ? 'Sending...' : 'Send'}
              />
            </div>
            <div className="text-center mt-6">
              <Link href={'/'}>
                <button
                  className=" text-gray-300 hover:text-gray-500 active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  or Go Back
                </button>
              </Link>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}
