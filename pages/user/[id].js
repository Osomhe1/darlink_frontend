import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { USER_ENDPOINTS } from '../api/ACTIONS.JS'
import api from '../api/darlink'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

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
        

        <h1>Hello  this is my router</h1>
      </div>
    </Layout>
  )
}
