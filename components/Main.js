import Image from "next/image";
import Layout from "./Layout";
// import { Message_data } from "../../context/context";
import { Message_data } from "../context/context"; 
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
// import api from '../api/darlink'
// import { LOGIN_ENDPOINTS } from "../api/ACTIONS.JS";
import Slide from "./Carousel";


export default function Main() {

  const { message, setMessage } = useContext(Message_data)
  const router = useRouter()
 


  return (
    <Layout>
      <section className="text-gray-600 body-font bg-[#F4F4F7]">
        <div className="max-w-7xl mx-auto flex px-5 py-24 lg:flex-row flex-col items-center">
          <div className="lg:flex-grow  md:w-1/2 md:ml-2 lg:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
            <h1 className="mb-5 sm:text-6xl md:text-4xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
              We are making Stunning Websites
            </h1>
            <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
              nine4 is a free to use website template for websites made with
              Next.js and styled with Tailwind CSS
            </p>

            {/* <section> */}
            <form className="Avenir  xl:w-3/4">
              <div className="relative w-full mb-3 ">
                <input
                  type="email"
                  className="border-0 px-3 py-5 placeholder-gray-400 
                   text-gray-700 bg-white rounded focus:ring-[#8BC940] text-sm shadow focus:outline-none focus:ring  w-full"
                  placeholder="Email"
                  style={{ transition: 'all .15s ease' }}
                />
              </div>

              <div className="relative w-full mb-3">
                <input
                  type="password"
                  className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring-[#8BC940] focus:ring w-full"
                  placeholder="Password"
                  style={{ transition: 'all .15s ease' }}
                />
              </div>
              <div className="relative w-full mb-3 flex justify-between ">
                <div className="">
                  <input
                    type="password"
                    className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring focus:ring-[#8BC940] w-full"
                    placeholder="Password"
                    style={{ transition: 'all .15s ease' }}
                  />
                </div>
                <div className="">
                  <input
                    type="password"
                    className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring  focus:ring-[#8BC940] w-full  "
                    placeholder="Confirm Password"
                    style={{ transition: 'all .15s ease' }}
                  />
                </div>
              </div>

              <div className="text-center mt-6">
                <button
                  className="bg-[#8BC940] hover:bg-[#5AB025]  text-white active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  Join for Free
                </button>
                <small>
                  By clicking, you agree to the Terms of Service & Privacy
                  Policy for solo.to.
                </small>
              </div>
            </form>
            {/* </section> */}
          </div>
          <div className=" sm:mr-0 sm:mb-28 mb-0 lg:mb-  md:pl- lg:w-[50%]  ">
          {/* <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10  "> */}
            
            
            <Slide />
            
          </div>
        </div>
      </section>
    </Layout>
  )
}
