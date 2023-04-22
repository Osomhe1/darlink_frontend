import React, { useEffect, useState, useRef } from 'react'
import Appreance from '../Appreance'
import Buttons from '../Buttons'
import Integrations from '../Integrations'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded'
import { PROFILE } from '../../pages/api/ACTIONS.JS'
import api from '../../pages/api/darlink'
import { useRouter } from 'next/router'
import { USER_ENDPOINTS } from '../../pages/api/ACTIONS.JS'
import { ResetUser } from '../../context/context'
import { clearPreview, UserInfo } from '../verify'
import { Avatar } from '@mui/material'
import Modal from '../Modal'
import { toast } from 'react-toastify'
import Preview from './Preview'
import { reload } from '../sidebar/DesktopSidebar'
import CopyButton from '../CopyButton'
import Links from '../Link'
import Button from '../../container/button'

export default function Profile() {
  const [view, setView] = useState('edit')
  const [isHovering, setIsHovering] = useState(false)
  const [copy, setCopy] = useState(false)
  const handleMouseEnter = (e) => {
    setCopy(!copy)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const [alignment, setAlignment] = useState('left')
  const [previewSource, setPreviewSource] = useState('')
  let userData
  const [users, setUsers] = useState([])
  const [values, setValues] = useState({
    displayName: users.displayName,
    location: users.location,
    colour: users.colour,
    profileImage: '',
    bgImage: '',
    description: users.description,
  })

  const [colour, setColour] = useState('[#100410]')
  const selectColour = `absolute top-0 w-full h-full bg-center flex justify-center items-center cursor-pointer bg-cover bg-${colour}`
  const inputRef = useRef(null)
  const displayNameRef = useRef(null)
  const locationRef = useRef(null)
  const imgRef = useRef('')
  const [isEditing, setIsEditing] = useState(false)
  const router = useRouter()
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
    setUsers({ ...users, [e.target.name]: e.target.value })
  }

  const [active, setActive] = useState(false)
  const [state, setState] = useState('hidden')

  const handleFile = (e) => {
    const file = e.target.files[0]
    previewFile(file)
  }
  const previewFile = (file) => {
    const type = file.type
    if (type === 'image/png' || type === 'image/jpeg' || type === 'image/jpg') {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setPreviewSource(reader.result)
      }
    } else {
      //  generateError('file format not supported')
    }
  }
  const uploadImage = (base64EncodedImage) => {
    values.profileImage = base64EncodedImage
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const newColor = localStorage.getItem('colour')
      const profileId = localStorage.getItem('profileId')
      if (newColor) values.colour = newColor

      if (previewSource) uploadImage(previewSource)
      setActive(true)

      if (profileId === null) {
        values.profileId = profileId
        const { data } = await api.post(PROFILE.CREATE_USER_PROFILE(), {
          ...values,
        })
        setActive(false)
        if (data.success) {
          router.push('/dashboard')
          localStorage.removeItem('colour')
          setIsEditing(false)
          handleData()
        }
      } else {
        handleData()
        if (previewSource) uploadImage(previewSource)
        const { data } = await api.patch(PROFILE.UPDATE_USER_PROFILE(), {
          ...values,
          profileId,
        })
        setActive(false)
        if (data.success) {
          router.push('/dashboard')
          localStorage.removeItem('colour')
          setIsEditing(false)
          handleData()
        }
      }
    } catch (error) {
      setActive(false)
      if (error.response) {
        toast.error(error.response.data.error)
        if (error.response.status === 401) {
          ResetUser()
        }
      }
    }
  }

  const handleViewChange = (currentView) => {
    setView(currentView)
  }

  const handleData = async () => {
    try {
      const { data } = await api.get(PROFILE.USER_PROFILE(), {})
      if (data.success) userData = { ...data.profile }
      localStorage.setItem('passportUrl', userData.passportUrl)
      localStorage.setItem('colour', userData.colour)
      localStorage.setItem('profileId', userData.profileId)
      if (data.profile.colour !== null) {
        setColour(data.profile.colour)
      }
      setUsers(userData)
      reload()
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          toast.error(error.response.data.error)
          ResetUser()
          router.push('/Login')
        }
      }
    }
  }

  const infor = UserInfo()

  useEffect(() => {
    const AuthenticateUser = async () => {
      try {
        const { data } = await api.post(USER_ENDPOINTS.CHECK(), {})
        if (!data.success) router.push('/Login')
      } catch (error) {
        router.push('/Login')
      }
    }

    AuthenticateUser()
    handleData()
    reload()
  }, [])

  return (
    <>
      <main className="profile-page mx-auto ">
        {/* pages */}
        <div
          className={`md:flex justify-between -mt-5 md:-mt-24 xl:w-5/6 my- m-auto `}
        >
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
              <ToggleButton
                value="left"
                onClick={() => {
                  handleViewChange('edit')
                  clearPreview()
                }}
                aria-label="left aligned"
              >
                <ModeEditOutlineRoundedIcon />
                <h1>Editor</h1>
              </ToggleButton>
              <ToggleButton
                value="center"
                onClick={() => {
                  handleViewChange('preview')
                }}
                aria-label="centered"
              >
                <SearchRoundedIcon />
                <h1>Preview</h1>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
        {/* links */}
        <div className="flex flex-wrap justify-between xl:w-5/6 my-4">
          <div className="flex gap-3">
            <div className=""></div>
            <div className="">
              {copy === false && (
                <button
                  className="bg-[#8BC940]  text-white active:bg-gray-700 text-sm font-thin uppercase
                       px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[100%]
                       bottom-0 "
                  type="button"
                  style={{ transition: 'all .15s ease', hover: '' }}
                  onMouseEnter={handleMouseEnter}
                >
                  {`darlink.to/${infor?.username}`}
                </button>
              )}
              {copy === true && <CopyButton onMouseLeave={handleMouseEnter} />}
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="bg-whit md:w-5/6 ">
          {view === 'edit' ? (
            <>
              <section
                className="relative bg-white block"
                style={{ height: '200px', backgroundColor: 'white' }}
              >
                <div
                  className={
                    users.colour
                      ? selectColour
                      : `absolute top-0 w-full h-full bg-center flex justify-center items-center cursor-pointer bg-cover bg-[#8BC940]`
                  }
                  style={{
                    backgroundColor: `${colour}`,
                  }}
                  name="colour"
                  onMouseEnter={() => {
                    setState('hidden')
                  }}
                >
                  <Modal />
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
                      <form
                        className="Avenir w-full  "
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}
                      >
                        <div className="grid lg:flex flex-wrap justify-center">
                          <div className="w-full  px-4   flex justify-">
                            <div className="relative pt-8 py-8 lg:py-0 md:pt-0 ">
                              <Avatar
                                src={
                                  !previewSource
                                    ? users.passportUrl
                                    : previewSource
                                }
                                // src={
                                //   !previewSource ? users.passportUrl : previewSource ? <Avatar /> : null
                                // }
                                className="shadow-md cursor-pointer 
                           rounded-full h-auto align-middle  z-[99]
                           border-none absolute -m-12 -ml-20 lg:-ml-6 "
                                sx={{ width: 200, height: 200 }}
                                style={{ maxWidth: '200px', maxHeight: '200' }}
                                height={100}
                                width={100}
                                onMouseEnter={() => {
                                  setState('block')
                                }}
                              />
                              <input
                                className={
                                  state === 'hidden'
                                    ? 'hidden'
                                    : `cursor-pointer z-[999] absolute 
                              file:mr-5 file:py-2 file:px-6
                              file:rounded-full file:border-0
                              opacity-10 -bottom-10
                              hover:file:cursor-pointer hover:file:bg-amber-50
                               w-[180px] m-auto h-[180px]  rounded-full 
                                `
                                }
                                type="file"
                                onChange={handleFile}
                                accept="image/*"
                                value={
                                  users.profileImage
                                    ? previewSource
                                    : users.profileImage
                                }
                                ref={imgRef.profileImage}
                                name="profileImage"
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className="text- mt-1 pt-14 md:pt-0  "
                          onMouseEnter={() => {
                            setState('hidden')
                          }}
                        >
                          <div className="w-full   xl:w-3/4 xl:ml-44 ">
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
                                ref={displayNameRef.displayName}
                                onInput={handleChange}
                                name="displayName"
                                value={users?.displayName}
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
                                ref={locationRef.location}
                                onInput={handleChange}
                                name="location"
                                value={users?.location}
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
                                  ref={inputRef.description}
                                  onChange={handleChange}
                                  name="description"
                                  value={users?.description}
                                />
                              </div>
                            </div>
                            <div>
                              {/* <label className=" items-center cursor-pointer ">
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
                                        className="sr-only peer p-disabled"
                                        style={{ transition: 'all .15s ease' }}
                                        name="bgImage"
                                        disabled={isDisabled}
                                      />
                                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
                                    </label>
                                  </div>
                                </div>
                              </label> */}
                            </div>

                            <div className="text-center mt-6 py-4 float-right ">
                            
                              <Button
                                type="submit"
                                disabled={active}
                                label={active ? 'Saving...' : 'Save'}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="">
                  <div className="py-2 my-4  ">
                    <Appreance />
                  </div>
                  <div className="py-2 my-4">
                    {' '}
                    <Links />
                  </div>
                  <div className="py-2 my-4">
                    <Buttons />
                  </div>
                  <div className="">
                    <div className="py-2 my-4">
                      {' '}
                      <Integrations />
                    </div>
                  </div>
                </div>
                {/* </section> */}
              </section>
            </>
          ) : (
            <Preview />
          )}
        </div>
      </main>
    </>
  )
}
