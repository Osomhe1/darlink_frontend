import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import { USER_ENDPOINTS } from '../../api/ACTIONS.JS'
import api from '../../api/darlink'
import { toast } from 'react-toastify'
import { useRouter} from 'next/router'
import Button from '../../../container/button'

export default function Reset() {
  let email, emailId
  const [active, setActive] = useState(false)
  const [error, setError] = useState(false)

  const router = useRouter()
  const { id } = router.query

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setActive(true)
      const { data } = await api.get(USER_ENDPOINTS.VERIFY_RESET(), {
        params: {
          
        },
      })
      setActive(false)
      if (data.success) {
        
        setActive(false)
        router.push(`/reset?id=${id}`) 
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
    email = localStorage.getItem('email')
    emailId = localStorage.getItem('emailId')
    if (!email || !emailId) {
      Router.push('/forget_password')
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
            <div className="relative w-full mb-3">
              <input
                className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring w-full focus:ring-[#8BC940]"
                style={{ transition: 'all .15s ease' }}
                value={email}
                name="username"
              />
            </div>

            <div className="text-center mt-6">
             
              <Button
                type="submit"
                disabled={active}
                label={active ? 'Sending...' : 'Get recoverying link'}
              />
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}
