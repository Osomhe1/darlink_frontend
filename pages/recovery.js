import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { USER_ENDPOINTS } from '../pages/api/ACTIONS.JS'
import api from '../pages/api/darlink'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { UserInfo } from '../components/verify' 

export default function Recorvery() {
   
let email, emailId;
  const [active, setActive] = useState(false)
  const [error, setError] = useState(false)

   const infor = UserInfo()
  const router = useRouter()

const userId = localStorage.getItem("id");
const userEmail = localStorage.getItem("email"); 

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setActive(true)
      const { data } = await api.post(
        USER_ENDPOINTS.RECOVERY_MAIL(),
        {},
        {
          params: {
            email: userEmail,
            id: userId,
          },
        }
      )
      setActive(false)
      if (data.success) {
        toast.success(data.msg, 'Please check you ermail for link')
        localStorage.clear('email')
        localStorage.clear('emailId')
        localStorage.clear('id')
        router.push(`/[id]${id}`)
        setActive(false) 
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
    //  id= localStorage.getItem("id");
   if(!email || !emailId ){
       router.push('/forget_password')
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
            <div className="relative w-full mb-3">
              <input
                className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring w-full focus:ring-[#8BC940]"
                style={{ transition: 'all .15s ease' }}
                value={infor.email}
                name="email"
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
            
          </form>
        </section>
      </div>
    </Layout>
  )
}
