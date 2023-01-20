import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { CreatePosts } from '../redux/features/CreatePostSlice'
import Image from 'next/image'

export const Modal = (props) => {
//   const img1 = `https://images.unsplash.com/photo-1665562227872-a220594c8afb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`

  let { showtheModal } = props

//   const dispatch = useDispatch()
//   const { isLoading, isSuccess, message } = useSelector(
//     (state) => state.newPost
//   )
  // const [visibility, setVisibility] = useState('public')
//   const [input, setInput] = useState({
//     visibility: '',
//     description: '',
//   })
//   const [img, setImg] = useState(null)

//   const handleChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value })
//   }

//   const handleImg = (e) => {
//     setImg(e.target.files)
//   }
//   let { visibility, description } = input
//   const navigate = useNavigate()
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     let data = { input, img }
//     dispatch(CreatePosts(data))
//     navigate('/post')
//   }

//   if (isSuccess) {
//     showtheModal()
//   }


  return (
    <>
      <form
    //    onSubmit={handleSubmit}
        method='post'>
        <div className='absolute top-0 left-0'>
          <div className='inset-0 fixed bg-slate-800 w-screen z-50 h-[100vh] bg-opacity-60 flex items-center px-3'>
            <div className='shadow shadow-slate-400 rounded-lg space-y-4 bg-white mx-auto w-full lg:w-2/3 2xl:w-1/2 '>
              <div className='flex justify-between items-center  2xl:px-8  border-b py-4  px-4 md:px-6'>
                <div>
                  <h2 className='text-sm 2xl:text-xl font-bold'>Create Post</h2>
                </div>
                <div className='flex gap-3 items-center text-xs 2xl:text-base'>
                  <p>Visible for</p>
                  <select
                    // value={visibility}
                    // onChange={handleChange}
                    name='visibility'
                    className='bg-slate-100 focus:outline-white px-6 py-2'
                  >
                    <option value='friends' className='mt-3'>
                      Friends
                    </option>
                    <option value='public' className='mt-3'>
                      Public
                    </option>
                    <option value='for_me' className='mt-3'>
                      Only Me
                    </option>
                  </select>
                </div>
                <div>
                  <button
                    onClick={showtheModal}
                    className='text-orange-600 text-lg 2xl:text-2xl'
                  >
                    <i class='fa-solid fa-circle-xmark'></i>
                  </button>
                </div>
              </div>

              <div className='2xl:px-8  py-4  px-4 md:px-6 space-y-4'>
                <div className='flex gap-4 items-start'>
                  <div>
                    <Image
                    //   src={img1}
                      alt='img'
                      className='w-[3rem] h-[3rem] rounded-full'
                      h={200}
                      w={200}
                    />
                  </div>

                  <div className='flex-1'>
                    <div className='flex justify-center flex-1 '>
                      <textarea
                        rows='6'
                        className='w-full pl-8 py-3 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:focus:shadow-outline-gray  focus:placeholder-gray-500 focus:bg-white focus:border-orange-300 focus:outline-none focus:shadow-outline-purple form-input'
                        type='text'
                        placeholder='What’s happening?'
                        name='description'
                        // value={description}
                        // onChange={handleChange}
                      />
                    </div>
                    {/* <div className='py-3'>
                      <input type='file' multiple onChange={handleImg} />
                    </div> */}
                  </div>
                </div>
                {/* <div className=''>
                
              </div> */}

                <div className='2xl:px-8  py-4 md:px-6 flex items-center justify-between'>
                  <div className='flex gap-1 md:gap-2 items-center'>
                    <i className='fa-solid fa-video text-sm md:text-base'></i>
                    <p className='text-xs md:text-sm'>
                      Short Video
                      {/* <span>{<FaVideo />}</span>{' '} */}
                    </p>
                  </div>

                  <div className='flex gap-1 md:gap-2 items-center'>
                    {/* <i class='fa-solid fa-camera text-sm md:text-base'></i> */}
                    <i class='fa-regular fa-images'></i>
                    <p className='text-xs md:text-sm'>
                      Photo/Video
                      {/* <span>{<IoMdPhotos />}</span>{' '} */}
                    </p>
                  </div>

                  <div className='flex gap-1 md:gap-2 items-center'>
                    <i class='fa-regular fa-face-smile text-sm md:text-base'></i>
                    <p className='text-xs md:text-sm'>
                      Feeling
                      {/* <span>{<BsEmojiSmileFill />}</span> */}
                    </p>
                  </div>

                  <div className=''>
                    <button
                      className='bg-[#ec430f] text-white px-3 py-1 rounded w-full 2xl:w-32 '
                      type='submit'
                      value='submit'
                    >
                      
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
