import Link from 'next/link'
import React, { useState } from 'react'
import { USER_ENDPOINTS } from './api/ACTIONS.JS'
import Layout from '../components/Layout'
import api from './api/darlink'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import Button from '../container/button'

export default function SignUp() {
  const [values, setValues] = useState({
    username: '',
    password: '',
    email: '',
    confirm_password: ''
  })
  const [error, setError] = useState('')
  const router = useRouter()
  const [active, setActive] = useState(false);
  const generateError = (err) => toast(err);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setActive(true);
      if(values.password !== values.confirm_password){
        setError(true)
        generateError("Password mismatched");
        setActive(false);
      }else{
        const {data} = await api.post(USER_ENDPOINTS.REGISTER(),{
          ...values,
        })
        setActive(false);
        if(data.success){
          router.push('/Login')
        } 
        if(data.error)
        generateError(data.error);
      }
    } catch (error) {
      setActive(false);
      if(error.name){
        generateError("Unauthorized domain");
      }
      if(error.response){
        generateError(error.response.data.error);
      }else{
        generateError("An error occurred, please try again");
      }
    }
  }
  return (
    <Layout>
      <div>
        <section>
          <form
            onSubmit={handleSubmit}
            className="Avenir  lg:w-2/5 m-3 md:w-3/5 md:m-auto lg:m-auto  py-28 "
          >
            <h2 className="text-center font-bold text-3xl md:text-5xl py-5 ">
              Create Account
            </h2>
            <div className="relative  mb-3 ">
              <input
                name="username"
                type="name"
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value })
                }}
                className="border-0 px-3 py-5 placeholder-gray-400 focus:ring-[#8BC940]
                   text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring  w-full"
                placeholder="UserName"
                style={{ transition: 'all .15s ease' }}
              />
            </div>

            <div className="relative w-full mb-3">
              <input
                name="email"
                type="email"
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value })
                }}
                className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                focus:ring-[#8BC940]   text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Email"
                style={{ transition: 'all .15s ease' }}
              />
            </div>
            <div className="relative w-full mb-3 md:flex justify-between md:space-x-4 ">
              <div className="w-full">
                <input
                  name="password"
                  type="password"
                  onChange={(e) => {
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }}
                  className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:ring-[#8BC940] focus:outline-none focus:ring w-full"
                  placeholder="Password"
                  style={{ transition: 'all .15s ease' }}
                />
              </div>
              <div className="w-full my-3 md:m-0">
                <input
                  name="confirm_password"
                  type="password"
                  onChange={(e) => {
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }}
                  className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                  focus:ring-[#8BC940]  text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Confirm Password"
                  style={{ transition: 'all .15s ease' }}
                />
              </div>
            </div>

            <small>
              By clicking, you agree to the Terms of Service & Privacy Policy
              for Darlink.to.
            </small>
            <div className="text-center mt-6">
             
              <Button
                type="submit"
                disabled={active}
                label={active ? 'Processing...' : 'Sign Up'}
              />
            </div>
            <div className="text-center mt-6">
              <button
                className=" text-gray-300 hover:bg-[#5AB025] hover:text-gray-500 active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="button"
                style={{ transition: 'all .15s ease' }}
              >
                <Link href="/Login">or Sign In</Link>
              </button>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}
