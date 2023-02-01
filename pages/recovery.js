import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { USER_ENDPOINTS } from '../pages/api/ACTIONS.JS'
import api from '../pages/api/darlink'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Router from 'next/router'

export default function Recorvery() {
   
let email,emailId;
  const [active, setActive] = useState(false)
  const [error, setError] = useState(false)

  const router = useRouter

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setActive(true)
      const { data } = await api.post(USER_ENDPOINTS.RECOVERY_MAIL(), {
        params: {
          id: emailId,
          email: email,
        },
      })
      setActive(false)
      if (data.success) {
        localStorage.clear('email')
        localStorage.clear('emailId')
        setActive(false) 
        toast.success(data.msg)
      }
      if (data.error) toast.error(data.error)
    } catch (error) {
      setActive(false)

      if (error.response) {
        const err = error.response.data.error
        setError(err)
        toast.error(err)
      }
    }
  }

  useEffect(() => {
     email= localStorage.getItem("email");
     emailId= localStorage.getItem("emailId");
   if(!email || !emailId){
       Router.push('/auth/forget_password')
   }
   
  }, [])
  
  return (
    <Layout>
      <div>
        <section>
          <form
            onSubmit={handleSubmit}
            className="Avenir  lg:w-2/5 m-3 md:w-3/5 md:m-auto lg:m-auto py-28 "
          >
            <h2 className="text-center font-bold text-3xl md:text-5xl py-5 ">
              Recover Password
            </h2>
            {/* <p className="text-center  text  py-5 ">
              Enter your email or username below.
            </p> */}

            <div className="relative w-full mb-3">
              <input
                className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring w-full focus:ring-[#8BC940]"
                style={{ transition: 'all .15s ease' }}
                value={email}
                name="username"
                disabled
              />
            </div>
           

            <div className="text-center mt-6">
              <button
                className="bg-[#8BC940] hover:bg-[#5AB025] text-white active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="submit"
                style={{ transition: 'all .15s ease' }}
              >
                {active ? 'Sending...' : 'Get recoverying link'}
              </button>
            </div>
            {/* <div className="text-center mt-6">
              <button
                className=" text-gray-300 hover:text-gray-500 active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="button"
                style={{ transition: 'all .15s ease' }}
              >
                or Go Back
              </button>
            </div> */}
          </form>
        </section>
      </div>
    </Layout>
  )
}
