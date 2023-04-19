import React, { useState } from 'react'
import PayStack from '../components/PayStack'

export default function Checkout() {

  const [amount, setAmount] = useState(0)
  const [email, setEmail] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    // try {
    //   const initializeTransaction = await paystackClient.transaction.initialize(
    //     {
    //       email,
    //       amount: amount * 100,
    //     }
    //   )

    //   if (initializeTransaction.data) {
    //     window.location.assign(initializeTransaction.data.authorization_url)
    //   } else {
    //     console.error('An error occurred while initializing the transaction')
    //   }
    // } catch (error) {
    //   console.error(error)
    // }
  }

  const handlePaymentSuccess = (response) => {
    console.log(response)
    // TODO: Handle successful payment
  }

  const handlePaymentClose = () => {
    console.log('Payment closed')
    // TODO: Handle payment closed
  }


  return (
    <div>
      <section className="mt-10 mb-10">
        <div className="bg-white md:w-2/3 xl:w-[40%] md:m-auto  ">
          <div className="border border-b text-xl p-4 px-8 ">
            <h1 className="p-2 text-3xl font-normal ">Subscription Details</h1>
          </div>
          
          <div className="border border-b-2 text-xl p-4 px-8 ">
            <h1 className="p-2 text-3xl font-normal ">Payment Method</h1>
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
                    Name on Card
                  </label>
                </div>
                
                <input
                  type="name"
                  placeholder="Full Name"
                  style={{ transition: 'all .15s ease' }}
                  className="py-5 placeholder-gray-400 border-0 rounded-sm text-sm   w-full m-auto
                   px-3 focus:outline-none  text-gray-700 bg-gray-200 "
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className=" w-full mb-3">
                <div className="my-2">
                  <label
                    htmlFor="cards"
                    className="uppercase text-gray-300  text-sm font-semibold"
                  >
                    Cards details
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="number"
                    className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-gray-200 rounded-sm
                   text-md font-semibold  focus:outline-none focus: w-[70%]  "
                    placeholder="Card Number"
                    style={{ transition: 'all .15s ease' }}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <input
                    type="number"
                    className="border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-gray-200 rounded-sm
                   text-sm  focus:outline-none focus: w-[30%]  "
                    placeholder="MM / YY CVC"
                    style={{ transition: 'all .15s ease' }}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
              <div className="relative w-full mb-3 md:flex justify-between md:space-x-4 "></div>

              <div className="text-center mt-6   ">
                <button
                  className="bg-[#8BC940] text-white active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="submit"
                  style={{ transition: 'all .15s ease' }}
                >
                  <PayStack
                    amount={5000}
                    email="john.doe@example.com"
                    onSuccess={handlePaymentSuccess}
                    onClose={handlePaymentClose}
                  />
                  {/* <Link href="/dashboard">Pay $12</Link> */}
                </button>
              </div>

              <div className="py-3 text-gray-400">
                <small>
                  By clicking, you allow solo.to to request payment from your
                  card on a recurring basis subject to the Terms of Service.
                </small>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
