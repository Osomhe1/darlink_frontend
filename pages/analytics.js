import  {useEffect, useState} from 'react'

import { Bar } from 'react-chartjs-2'
import {
  barOptions,
  barLegends,
} from '../components/utility/Chartbar.js'
import { Chart as ChartJS } from 'chart.js/auto'
import { USER_ENDPOINTS } from './api/ACTIONS.JS'
import api from './api/darlink'
import {toast} from 'react-toastify'
import { useRouter } from 'next/router'



export default function Analytics() {
   const router = useRouter()

  useEffect(() => {
    const AuthenticateUser = async () => {
      try {
        const { data } = await api.post(USER_ENDPOINTS.CHECK(), {})
        if (!data.success) router.push('/Login')
      } catch (error) {
        toast.error(error.response.data.error)
        router.push('/Login')
      }
    }

    AuthenticateUser();
    // handleData()
  }, [])


  return (
    <div>
      <section>
        <div className="-mt-5 md:-mt-24 xl:w-5/6 ml-20 md:ml-0 ">
          <h1 className="text-[#8BC940] font-semibold text-3xl"> Analytics</h1>
        </div>

        <div className="flex flex-wrap mt-6">
          <div class="flex flex-col items- w-full max-w-screen-md p-6 pb-6 mt-10 bg-white rounded-lg shadow-xl sm:p-8">
            <h1 className="text-3xl font-semibold">Views</h1>

            <div className=" mt-12 flex gap-4    ">
              <div className="w-1/2 border p-5 ">
                <h2 className="text-2xl p-3 ">Today</h2>
                <div className=" ">
                  <h1 className="p-3 font-bold   text-[#8BC940] text-4xl  ">
                    0
                  </h1>
                </div>
              </div>
              <div className="w-1/2 border p-5 ">
                <h2 className="text-2xl p-3 ">All Time</h2>
                <div className="  ">
                  <h3 className="p-3 font-bold   text-[#8BC940] text-4xl ">
                    0
                  </h3>
                </div>
              </div>
            </div>
            <div className="">
              <Bar {...barOptions} />
            </div>
          </div>
        </div>

        {/* Clicks lock section */}
        <div class=" items-center w-full max-w-screen-md p-6 pb-6 mt-10 gap-6 bg-white rounded-lg shadow-xl sm:p-8">
          <h1 className="text-3xl font-semibold">Clicks</h1>

          <div className=" mt-12 flex gap-4    ">
            <div className="w-1/2 border p-5 ">
              <h2 className="text-2xl p-3 ">Today</h2>
              <div className="p-5 ">
                <h3 className="p-3  blur-lg bg-[#8BC940] text-white text-2xl max-w-[150px] ">
                  Click me
                </h3>
              </div>
            </div>
            <div className="w-1/2 border p-5 ">
              <h2 className="text-2xl p-3 ">All Time</h2>
              <div className="p-5  ">
                <h3 className="p-3  blur-lg bg-[#8BC940] text-white text-2xl max-w-[150px] ">
                  Click me
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

