import Layout from "./Layout";
import Slide from "./Carousel";
import { toast } from "react-toastify";
import { USER_ENDPOINTS, USER_TYPE } from '../pages/api/ACTIONS.JS'
import api from '../pages/api/darlink'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Main() {
 
  const [values, setValues] = useState({
    username: '',
    password: '',
    email: '',
    confirm_password: '',
  })
  const [error, setError] = useState('')
  const router = useRouter()
  const [active, setActive] = useState(false)
  const generateError = (err) => toast(err)

   const handleSubmit = async (e) => {
     e.preventDefault()
     try {
       setActive(true)
       if (values.password !== values.confirm_password) {
         setError(true)
         generateError('Password mismatched')
         setActive(false)
       } else {
         const { data } = await api.post(USER_ENDPOINTS.REGISTER(), {
           ...values,
         })
         setActive(false)
         if (data.success) {
           router.push('/Login')
         }
         if (data.error) generateError(data.error)
       }
     } catch (error) {
       setActive(false)
       if (error.name) {
         generateError('Unauthorized domain')
       }
       if (error.response) {
         generateError(error.response.data.error)
       } else {
         generateError('An error occurred, please try again')
       }
     }
   }


  return (
    <Layout>
      <section className="text-gray-600 body-font bg-[#F4F4F7]">
        <div className="max-w-7xl mx-auto flex px-5 py-24 lg:flex-row flex-col items-center">
          <div className="lg:flex-grow  md:w-1/2 md:ml-2 lg:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
            <h1 className="mb-5 sm:text-6xl md:text-4xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
              One bio link for everything
            </h1>
            <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
              Share and cross promote your links, music, videos, social media,
              and more on one page.
            </p>

            {/* <section> */}
            <form className="Avenir  xl:w-3/4" onSubmit={handleSubmit}>
              <div className="relative w-full mb-3 ">
                <input
                  type="email"
                  name="email"
                  onChange={(e) => {
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }}
                  className="border-0 px-3 py-5 placeholder-gray-400 
                   text-gray-700 bg-white rounded focus:ring-[#8BC940] text-sm shadow focus:outline-none focus:ring  w-full"
                  placeholder="Email"
                  style={{ transition: 'all .15s ease' }}
                />
              </div>

              <div className="relative w-full mb-3">
                <input
                  type="username"
                  name="username"
                  className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring-[#8BC940] focus:ring w-full"
                  placeholder="Username"
                  style={{ transition: 'all .15s ease' }}
                  onChange={(e) => {
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }}
                />
              </div>
              <div className="relative w-full mb-3 flex justify-between ">
                <div className="">
                  <input
                    type="password"
                    name="password"
                    className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring focus:ring-[#8BC940] w-full"
                    placeholder="Password"
                    style={{ transition: 'all .15s ease' }}
                    onChange={(e) => {
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }}
                  />
                </div>
                <div className="">
                  <input
                    name="confirm_password"
                    type="password"
                    className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring  focus:ring-[#8BC940] w-full  "
                    placeholder="Confirm Password"
                    style={{ transition: 'all .15s ease' }}
                    onChange={(e) => {
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }}
                  />
                </div>
              </div>

              <div className="text-center mt-6">
                <button
                  className="bg-[#8BC940] hover:bg-[#5AB025]  text-white active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="submit"
                  style={{ transition: 'all .15s ease' }}
                >
                  {active ? 'Authenticating...' : 'Join For Free'}
                </button>
                <Link href={'/Login'}>
                  <button
                    className="bg-[#8BC940] hover:bg-[#5AB025]  text-white active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    type="submit"
                    style={{ transition: 'all .15s ease' }}
                  >
                    Login
                  </button>
                </Link>

                <small>
                  By clicking, you agree to the Terms of Service & Privacy
                  Policy for solo.to.
                </small>
              </div>
            </form>
            {/* </section> */}
          </div>
          <div className=" sm:mr-0 sm:mb-28 mb-0 lg:mb-  md:pl- lg:w-[50%]  ">
            <Slide />
          </div>
        </div>
      </section>
    </Layout>
  )
}
