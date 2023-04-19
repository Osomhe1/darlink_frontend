import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {  useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { USER_ENDPOINTS } from './api/ACTIONS.JS'
import api from './api/darlink'
import { USER_TYPE } from './api/ACTIONS.JS'
import { toast } from 'react-toastify'
import Button from '../container/button'


export default function Login() {
   const [values, setValues] = useState({
     username: '',
     password: '',
   })
   const [error, setError] = useState({
    password:'',
    username:''
   })
   const [active, setActive] = useState(false)
   const route = useRouter()

   const handleSubmit = async (e) => {
     e.preventDefault()
     try {
      setActive(true)
       const { data } = await api.post(USER_ENDPOINTS.LOGIN(), {
         ...values,
       }) 
       setActive(false);
       if (data.success) {
        localStorage.setItem('username', data.user.username)
        localStorage.setItem('email', data.user.email)
        localStorage.setItem('role', data.user.role)
        localStorage.setItem('token', data.token)

         if (data.user.role === USER_TYPE.ADMIN())
            route.push('/admin/dashboard')
        if(data.user.role === USER_TYPE.USER()) {
          route.push('/dashboard')
        }
       }
     } catch (error) {
      console.log(error, 'error')
      setActive(false)

         if (error.response) {
           const err = error.response.data.error
           if (err.includes('username')) error.username = err
           
           if (err.includes('password')) error.password = err
           setError(err)
           toast.error(err)
        }else if(error.name){
          toast.error('unauthorised domain')
        }
  
       
      }
   }

   useEffect(() =>{
    localStorage.clear()
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
              Login
            </h2>
            <p className="text-center  text  py-5 ">
              Enter your email and password below to access your Darlink.to
              account.
            </p>
            <div className="relative  mb-3 ">
              <input
                type="name"
                className="border-0 px-3 py-5 placeholder-gray-400 focus:ring-[#8BC940]
                   text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring  w-full"
                placeholder="UserName"
                style={{ transition: 'all .15s ease' }}
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value })
                }}
                name="username"
              />
              {error?.username && (
                <p className="text-red-500">{error.username}</p>
              )}
            </div>

            <div className="relative w-full mb-3">
              <input
                type="password"
                className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded focus:ring-[#8BC940]
                   text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Password"
                style={{ transition: 'all .15s ease' }}
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value })
                }}
                name="password"
              />
              {error?.password && (
                <p className="text-red-500">{error.password}</p>
              )}
            </div>
            <div className="relative w-full mb-3 md:flex justify-between md:space-x-4 ">
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                    style={{ transition: 'all .15s ease' }}
                  />
                  <span className="ml-2 text-sm font-semibold text-gray-700">
                    Remember me
                  </span>
                </label>
              </div>

              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <Link href="/forget_password">
                    <span
                      style={{ transition: 'all .15s ease' }}
                      className="ml-2 text-sm font-semibold hover:text-gray-200 text-gray-700"
                    >
                      Forget Password
                    </span>
                  </Link>
                </label>
              </div>
            </div>

            <div className="text-center mt-6">
              <Button
                type="submit"
                disabled={active}
                label={active ? 'Authenticating...' : 'Login'}
              />
            </div>
            <div className="text-center mt-6">
              <button
                className=" text-gray-300 hover:bg-[#5AB025] hover:text-gray-500 active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="button"
                style={{ transition: 'all .15s ease' }}
              >
                <Link href="/SignUp">or Create an Account</Link>
              </button>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}
