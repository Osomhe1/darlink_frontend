import React, { useEffect, useState } from 'react'
import InfoCard from '../components/admin_components/Card'
import { USER_ENDPOINTS } from './api/ACTIONS.JS'
import api from './api/darlink'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { WALLET } from './api/ACTIONS.JS'
import WalletTable from '../components/WalletTable'



export default function Referrals() {
   const router = useRouter()
   const [balance, setBalance] = useState('')
   const [walletHistory, setWalletHistory] = useState([])

   const getWallet = async () =>{
    try {
      const { data } = await api.get(WALLET.GET_WALLET(), {})
      if (data.success && data.msg === 'Found'){
        setBalance(data.wallet.balance)
      } 
    } catch (error) {
      if (error.response.status === 401) {
        router.push('/Login')
      } else return new Error(error)
    }
   }

   const getWalletHistory = async () =>{
    try {
      const { data } = await api.get(WALLET.GET_WALLET_HISTORY(), {})
      if (data.success && data.msg === 'Found'){
        setWalletHistory(data.history)
      } 
    } catch (error) {
      
      if(error.response.status === 401) {
        router.push('/Login')
  
    }else return new Error(error)
  }
   }

console.log(walletHistory)

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
    getWallet()
    getWalletHistory()
    // handleData()
  }, [])
  return (
    <div>
      <div className="-mt-5 md:-mt-24 xl:w-5/6 ml-20 md:ml-0">
        <h1 className="text-[#8BC940] font-semibold text-3xl ">Wallet</h1>
      </div>
      <section>
        {/* <div class='flex flex-co items-center w-full max-w-screen-md p-6 pb-6 mt-10 gap-6 bg-white rounded-lg shadow-xl sm:p-8'> */}
        <div className="grid gap-6 mt-4 mb-8 md:grid-cols-2 xl:grid-cols-4 xl:w-5/6">
          <InfoCard title="Total Balance" value={balance}>
            <span className="text-2xl font-bold">&#8358;</span>
          </InfoCard>

          
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(() =>{router.push('/checkout')})} >
            Fund Wallet
          </button>
        </div>

        {/* </div> */}
        {/* second box */}
        <div class=" w-full max-w-screen-md p-6 pb-6 mt-10 bg-white rounded-lg shadow-xl sm:p-8">
   
              <WalletTable wallets={walletHistory} />
        </div>
      </section>
    </div>
  )
}
