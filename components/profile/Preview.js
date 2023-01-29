import React from 'react'
import { Avatar, Box } from '@mui/material'

export default function Preview() {
  return (
    <div>
      <section
        className="relative bg-white block"
        style={{ height: '200px', backgroundColor: 'white' }}
      >
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <div
          className="absolute top-0 w-full h-full bg-center flex justify-center items-center cursor-pointer bg-cover bg-[#8BC940] "
          // style={{
          //   backgroundImage:
          //     "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          // }}
          name="colour"
        >
          {/* <Modal /> */}
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
              <form className="Avenir w-full  " 
            //   onSubmit={handleSubmit}
              >
                <div className="grid lg:flex flex-wrap justify-center">
                  <div className="w-full  px-4  flex justify-">
                    <div className="relative pt-8 md:pt-0 ">
                      <Box
                        component="img"
                        alt="..."
                        src={'users.passportUrl' ? 'users.passportUrl' : <Avatar />}
                        // src={proileImage}

                        className="shadow-md
                           rounded-full h-auto align-middle  z-[99]
                           border-none absolute -m-12 -ml-20 lg:-ml-1 "
                        style={{ maxWidth: '200px' }}
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className="">
                      <label>
                        <input
                          className="  cursor-pointer 
                              file:mr-5 file:py-2 file:px-6
                              file:rounded-full file:border-0
                              file:text-sm file:font-medium
                              file:bg-blue-50 file:text-blue-700
                              hover:file:cursor-pointer hover:file:bg-amber-50
                              hover:file:text-amber-700 w-4
                               "
                          type="file"
                        //   onChange={handleFile}
                          accept="image/*"
                        //   value={users?.profileImage}
                        //   ref={inputRef.profileImage}
                          name="profileImage"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="text- mt-1 pt-14 md:pt-0  ">
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
                        // ref={inputRef.displayName}
                        // onInput={handleChange}
                        name="displayName"
                        // value={users?.displayName}
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
                        // ref={inputRef.location}
                        // onInput={handleChange}
                        name="location"
                        // value={users?.location}
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
                        //   ref={inputRef.description}
                        //   onChange={handleChange}
                          name="description"
                        //   value={users?.description}
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
                                className="sr-only peer p-disabled"
                                style={{ transition: 'all .15s ease' }}
                                name="bgImage"
                                // disabled={isDisabled}
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
                        // disabled={active}
                      >
                        {/* {active ? 'Saving...' : 'Save'} */}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
