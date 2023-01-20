import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import pic from '../../public/images/team-2-800x800.jpg'
import Appreance from '../Appreance'
import Link from '../Link'
import Buttons from '../Buttons'
import Integrations from '../Integrations'
import Preview from '../inner-page/Preview'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded'
import { PROFILE } from '../../pages/api/ACTIONS.JS'
import api from '../../pages/api/darlink'
import { faL } from '@fortawesome/free-solid-svg-icons'


export default function Profile() {
  const [alignment, setAlignment] = useState('left')
  const [values, setValues] = useState({
    displayName: '',
    location: '',
    color: '',
    proileImage: '',
    bgImage: '',
  })
  const [isEditing, setIsEditing] = useState(false)

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment)
  }
  const [users, setUsers] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(values, 'valuesss')
    try {
      const { data } = await api.post(PROFILE.CREATE_USER_PROFILE(), {
        ...values,
      })
      console.log(values, 'values')
      // if (!user || user.isLoggedIn === false) {
      //   return <Layout>Loading...</Layout>
      // }
      if (data.success) {
        // router.push('/auth/Login')
        setIsEditing(false)
        handleData()
      } else {
      }
    } catch (error) {
      console.log(error)
      console.log(error.msg)
    }
  }

  // function to handle when the "Edit" button is clicked
  // function handleEditClick(e) {
  //   const pro_id = e.target.id
  //   const findProduct = order.find((curr) => curr.id === pro_id)
  //   setProId(pro_id)
  //   setIsEditing(true)
  //   setvalues(findProduct)
  // }

  const handleData = async () => {
    try {
      const { data } = await api.get(PROFILE.USER_PROFILE(), {})
      console.log(data, 'data')
      if (!data.success) navigate('/home')
      //todo
      //populate UI
      setUsers(data.profile)
    } catch (error) {
      // console.log(error.response.data.error)
      console.log(error, 'error')
    }
  }

  useEffect(() => {
    handleData()
  })

  return (
    <>
      {/* <Navbar transparent /> */}
      {/* <Details> */}
      {/* <Post> */}
      <main className="profile-page mx- ">
        {/* pages */}
        <div className="md:flex justify-between -mt-5 md:-mt-24 xl:w-5/6 my-  ">
          <div className=" ml-20 md:ml-0">
            <h1 className="text-[#8BC940] font-bold text-5xl ">My Page</h1>
          </div>
          <div className="">
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="left" aria-label="left aligned">
                <ModeEditOutlineRoundedIcon />
                <h1>Editor</h1>
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                <SearchRoundedIcon />
                <h1>Preview</h1>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
        {/* links */}
        <div className="flex justify-between xl:w-5/6 my-4">
          <div className="flex gap-3">
            <div className="">
              <button
                className="bg-[#8BC940]  text-white active:bg-gray-700 text-sm font-bold uppercase
                       px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[100px]
                       bottom-0 "
                type="button"
                style={{ transition: 'all .15s ease' }}
              >
                unsave
              </button>
            </div>
            <div className="">
              <button
                className="bg-[#8BC940]  text-white active:bg-gray-700 text-sm font-bold uppercase
                       px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[100px]
                       bottom-0 "
                type="button"
                style={{ transition: 'all .15s ease' }}
              >
                unsave
              </button>
            </div>
          </div>
          <div className="">
            <button
              className="bg-[#8BC940]  text-white active:bg-gray-700 text-sm font-bold uppercase
                       px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[100px]
                       bottom-0 "
              type="button"
              style={{ transition: 'all .15s ease' }}
            >
              unsave
            </button>
          </div>
        </div>
        <div className="bg-whit md:w-5/6">
          <section
            className="relative bg-white block"
            style={{ height: '200px', backgroundColor: 'white' }}
          >
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover bg-[#8BC940] "
              // style={{
              //   backgroundImage:
              //     "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
              // }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: '70px' }}
            ></div>
          </section>
          <section className="relative py-16 bg-w">
            <div className="container mx-auto px-4 bg-white">
              <div
                className="relative flex flex-col min-w-0 break-words  w-full mb-6 
              rounded-lg -mt-20 "
              >
                <div className="px-6 relative">
                  <div className="grid md:flex flex-wrap justify-center">
                    <div className="w-full  px-4  flex justify-">
                      <div className="relative pt-8 md:pt-0 ">
                        <Image
                          alt="..."
                          // src={require('assets/img/team-2-800x800.jpg').default}
                          // src='/public/images/team-2-800x800.jpg'
                          src={pic}
                          className="shadow-md rounded-full h-auto align-middle  border-none absolute -m-12 -ml-20 lg:-ml-1"
                          style={{ maxWidth: '200px' }}
                          height={100}
                          width={120}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text- mt-12 pt-14 md:pt-0  ">
                    <form
                      onSubmit={handleSubmit}
                      className="Avenir w-full  xl:w-3/4 md:ml-44     "
                    >
                      <div className="relative  mb-3 ">
                        <label className="ml-2 text-sm font-semibold text-gray-700">
                          Display Name
                        </label>
                        <input
                          type="name"
                          className="border-0 px-3 py-5 placeholder-gray-400 
                   text-gray-700 bg-gray-50 rounded text-sm shadow focus:outline-none focus:ring  w-full"
                          placeholder="John Doe"
                          style={{ transition: 'all .15s ease' }}
                          onChange={(e) => {
                            setValues({
                              ...values,
                              [e.target.name]: e.target.value,
                            })
                          }}
                          name="displayName"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label className="ml-2 text-sm font-semibold text-gray-700">
                          Location
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-gray-50 rounded
                         text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Canada"
                          style={{ transition: 'all .15s ease' }}
                          onChange={(e) => {
                            setValues({
                              ...values,
                              [e.target.name]: e.target.value,
                            })
                          }}
                          name="location"
                        />
                      </div>
                      <div className="relative w-full mb-3 ">
                        <div className="">
                          <label className="ml-2 text-sm font-semibold text-gray-700">
                            Bio
                          </label>
                          <textarea
                            type="text"
                            className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-gray-50 rounded
                            text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Lord chief Commandar"
                            style={{ transition: 'all .15s ease' }}
                            onChange={(e) => {
                              setValues({
                                ...values,
                                [e.target.name]: e.target.value,
                              })
                            }}
                            name="description"
                          />
                        </div>
                      </div>
                      <div>
                        <label className=" items-center cursor-pointer ">
                          <div className="">
                            <label className="ml-2 text-sm font-semibold text-gray-700">
                              Background Image
                            </label>
                            <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <label className="inline-flex relative items-center w-full cursor-pointer">
                                <input
                                  id="customCheckLogin"
                                  type="checkbox"
                                  value=""
                                  className="sr-only peer"
                                  style={{ transition: 'all .15s ease' }}
                                  name="bgImage"
                                />
                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
                              </label>
                            </div>
                          </div>
                        </label>
                      </div>

                      <div className="text-center mt-6 float-right ">
                        <button
                          className="bg-[#8BC940]  text-white active:bg-gray-700 absolute right-0 text-sm font-bold uppercase
                       px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[100px]
                       bottom-0 "
                          type="submit"
                          style={{ transition: 'all .15s ease' }}
                        >
                          save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="py-2 my-4  ">
                <Appreance />
              </div>
              <div className="py-2 my-4">
                {' '}
                <Link />
              </div>
              <div className="py-2 my-4">
                <Buttons />
              </div>
              <div className="py-2 my-4">
                {' '}
                <Integrations />
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* </Post> */}
      {/* </Details> */}
    </>
  )
}
