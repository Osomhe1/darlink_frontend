import { useState } from 'react'

import { Bar } from 'react-chartjs-2'
// import {BarChart} from '../components/BarChart'
// import { barOptions, barLegends } from '../components/utility/Chartbar.js'
import { barOptions, barLegends } from '../../../components/utility/Chartbar'
import { Chart as ChartJS } from 'chart.js/auto'
// import Post from '../components/Post'

export default function Analytics() {
  return (
    //    <Post>
    <div>
      <section>
        <div className='-mt-5 md:-mt-24 xl:w-5/6'>
          <h1 className='text-[#8BC940] font-semibold text-3xl'> Analytics</h1>
        </div>

        <div className='flex flex-wrap mt-6'>
          <div class='flex flex-col items- w-full max-w-screen-md p-6 pb-6 mt-10 bg-white rounded-lg shadow-xl sm:p-8'>
            <h1 className='text-3xl font-semibold'>Views</h1>

            <div className=' mt-12 flex gap-4    '>
              <div className='w-1/2 border p-5 '>
                <h2 className='text-2xl p-3 '>Today</h2>
                <div className=' '>
                  <h1 className='p-3 font-bold   text-[#8BC940] text-4xl  '>
                    0
                  </h1>
                </div>
              </div>
              <div className='w-1/2 border p-5 '>
                <h2 className='text-2xl p-3 '>All Time</h2>
                <div className='  '>
                  <h3 className='p-3 font-bold   text-[#8BC940] text-4xl '>
                    0
                  </h3>
                </div>
              </div>
            </div>
            <div className=''>
              <Bar {...barOptions} />
            </div>
          </div>
        </div>

        {/* Clicks lock section */}
        <div class=' items-center w-full max-w-screen-md p-6 pb-6 mt-10 gap-6 bg-white rounded-lg shadow-xl sm:p-8'>
          <h1 className='text-3xl font-semibold'>Clicks</h1>

          <div className=' mt-12 flex gap-4    '>
            <div className='w-1/2 border p-5 '>
              <h2 className='text-2xl p-3 '>Today</h2>
              <div className='p-5 '>
                <h3 className='p-3  blur-lg bg-[#8BC940] text-white text-2xl w-[150px] '>
                  Click me
                </h3>
              </div>
            </div>
            <div className='w-1/2 border p-5 '>
              <h2 className='text-2xl p-3 '>All Time</h2>
              <div className='p-5  '>
                <h3 className='p-3  blur-lg bg-[#8BC940] text-white text-2xl w-[150px] '>
                  Click me
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    // {/* </Post> */}
  )
}
