import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { USER_ENDPOINTS } from '../api/ACTIONS.JS'
import api from '../api/darlink'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Button from '../../container/button'

export default function VerifyReset() {
  const [active, setActive] = useState(false)
  const [error, setError] = useState(false)
  const [values, setValues] = useState({
    newPassword: '',
    confirm_newPassword:'',
  })
 const generateError = (err) => toast(err);
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = localStorage.getItem('linkId')

    try {
      setActive(true)
      if (values.newPassword !== values.confirm_newPassword) {
        setError(true)
        generateError('Password mismatched')
        setActive(false)
      } else {
        const { data } = await api.post(USER_ENDPOINTS.RESET_PASSWORD(), {
          ...values,
          id,
        })
        setActive(false)
        if (data.success) {
          setActive(false)
          router.push(`/Login`)
          toast.success(data.msg)
        }
        if (data.error) {
          generateError(data.error)
          router.push('/forget_password')
        }
      }
    } catch (error) {
      setActive(false)
         router.push('/forget_password')
      if (error.response) {
        const err = error.response.data.error
        setError(err)
        toast.error(err)
      }
    }
  }

  useEffect(() => {
  
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
                name="newPassword"
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value })
                }}
                placeholder="Enter your new password"
                type="password"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring w-full focus:ring-[#8BC940]"
                style={{ transition: 'all .15s ease' }}
                name="confirm_newPassword"
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value })
                }}
                placeholder="Confirm your new password"
                type="password"
              />
            </div>

            <div className="text-center mt-6">
             
              <Button
                type="submit"
                disabled={active}
                label={active ? 'Reseting...' : 'Reset'}
              />
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}
