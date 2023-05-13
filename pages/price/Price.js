

import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import darlinkApi from '../api/darlink'
import { USER_PLAN } from '../api/ACTIONS.JS'
import PriceCard from '../../components/PriceCard'
import { toast } from 'react-toastify'

export default function Price() {

  const [starterPlan, setStarterPlan] = useState([])

  const handleData = async () =>{
    try {
      const { data } = await darlinkApi.get(USER_PLAN.GET_PLAN())
      if(data.success){
        setStarterPlan(data.plans)
      }
    } catch (error) {
      toast.error(error)
      console.log(error)
    }
  }


  useEffect(() => {
   handleData()
  }, [])
  


  return (
    <Layout>
      <div>
        {/* <!-- Start block --> */}
        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-screen-2xl px-4 py-8 mx-auto lg:py-24 lg:px-1">
            <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Pricing
              </h2>
              <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Start creating your page for free, or add one of the plans below
                to unlock additional features and get started.
              </p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-2 xl:grid-cols- sm:gap-6 xl:gap-6 lg:space-y-0">
              {/* <!-- Pricing Card --> */}
              {starterPlan?.map((plan, index) => (
                <>
                  <div key={index} className="">
                    <PriceCard
                      label={plan?.plan}
                      amount={plan?.amount}
                      url={'/SignUp'}
                      key={plan?.planId}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
        {/* <!-- End block --> */}
      </div>
    </Layout>
  )
}

