import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter } from 'next/router'
import { WALLET } from './api/ACTIONS.JS'
import api from './api/darlink'
import { toast } from 'react-toastify'



export default function Checkout() {

  const [amount, setAmount] = useState(0)
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const { data } = await api.post(WALLET.FUND_WALLET(),{
        amount: amount
      })
      if (data.status === true) {
        router.push(data.data.authorization_url)
      }
    } catch (error) {
      if(error.response.status === '401') {
        router.push('/login')
          
    }else{
      toast.error('error')
    }
  }
  }


  return (
    <div>
      <div className="flex items-center text-center justify-start">
        <button
          className="text-3xl"
          type="button"
          onClick={() => {
            router.push('/wallet')
          }}
        >
          <ArrowBackIcon style={{ fontSize: '50px' }} />
        </button>
      </div>
      <section className="mt-10 mb-10">
        <div className="bg-white md:w-2/3 xl:w-[40%] md:m-auto  ">
          <div className="border border-b text-xl p-4 px-8 ">
            <h1 className="p-2 text-3xl font-normal ">Payment Details</h1>
          </div>

          <div className="">
            <form
              onSubmit={handleSubmit}
              className="   m w-[90%] m-auto   py-8 "
            >
              <div className="  mb-3 w-full ">
                <div className="my-2">
                  <label
                    className="uppercase text-gray-300  text-sm font-semibold"
                    htmlFor="name"
                  >
                    Amount
                  </label>
                </div>

                <input
                  type="number"
                  name="amount"
                  placeholder="amount"
                  style={{ transition: 'all .15s ease' }}
                  className="py-5 placeholder-gray-400 border-0 rounded-sm text-sm   w-full m-auto
                   px-3 focus:outline-none  text-gray-700 bg-gray-200 "
                  onChange={(event) => setAmount(event.target.value)}
                />
              </div>

              
              <div className="text-center mt-6   ">
                <button
                  className="bg-[#8BC940] text-white active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="submit"
                  style={{ transition: 'all .15s ease' }}
                >
                  Pay Now
                </button>
              </div>

              <div className="py-3 text-gray-400">
                <small>
                  By clicking, you allow darlink.to to request payment from your
                  card on  basis subject to the Terms of Service.
                </small>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
