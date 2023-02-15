import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { USER_ENDPOINTS } from '../../pages/api/ACTIONS.JS'
import api from '../../pages/api/darlink'
import { USER_TYPE } from '../../pages/api/ACTIONS.JS'
// import { UserContext } from '../../context/context'
import { toast } from 'react-toastify'


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
   const [isLoading, setIsLoading] = useState(false)

  //  const userContext = useContext(UserContext)

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
          toast.success('success')
          route.push('/dashboard')
        }
       }
     } catch (error) {
      setActive(false)
       if(error.name){
        toast.error("Unauthorized domain");
       }else{

         if (error.response) {
           const err = error.response.data.error
           if (err.includes('username')) error.username = err
           
           if (err.includes('password')) error.password = err
           setError(err)
           toast.error(err)
        }
       }
      }
   }

   useEffect(() =>{
    localStorage.clear()
   }, [])

  return (
    <Layout>
      {/* { isLoading  ? (
        <p>Loading ...</p>
      ) : ( */}
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
                <button
                  className="bg-[#8BC940] hover:bg-[#5AB025] text-white active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
<<<<<<< HEAD
                  type="submit"
                  style={{ transition: 'all .15s ease' }}
                  value='submit'
                >
                  { !isLoading ? (
                        <svg
                          aria-hidden='true'
                          role='status'
                          class='inline mr-3 w-4 h-4 text-white animate-spin'
                          viewBox='0 0 100 101'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                            fill='#E5E7EB'
                          />
                          <path
                            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                            fill='currentColor'
                          />
                        </svg>
                      ) : (
                        'Login'
                      )}
                  {/* Login */}
                </button>
              </div>
              <div className="text-center mt-6">
                <button
                  className=" text-gray-300 hover:bg-[#5AB025] hover:text-gray-500 active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  <Link href="/auth/SignUp">or Create an Account</Link>
                </button>
              </div>
            </form>
          </section>
        </div>
      {/* )} */}
=======
                type="submit"
                style={{ transition: 'all .15s ease' }}
                disabled={active}
              >
                {active ? "Authenticating..." : "Login"}
              </button>
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
>>>>>>> a0bdd45761a3c4da831f94ad7f7751feba76cc39
    </Layout>
  )
}
