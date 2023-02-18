import React, { useState } from 'react'
import api from '../../pages/api/darlink'
import { toast } from 'react-toastify'
import { GET_USERS } from '../../pages/api/ACTIONS.JS'
import { useRouter } from 'next/router'



export default function DeleteModal() {
  const [showModal, setShowModal] = useState(false)
   const router = useRouter()


   const handleDeleteAcc = async () => {
    setShowModal(false)
     try {
     const userId = localStorage.getItem('accountId')
       const { data } = await api.delete(GET_USERS.DELETE_ACC(), {
      
      params:{
        userId
      } })
       if (data.success)
         //todo
         //populate UI
         toast.success('user successful deleted')
     } catch (error) {
      if(error.response){

        toast.error(error.response.data.error)
        if (error.response.status === 401) {
           ResetUser()
           router.push('/auth/Login')
        }
      }
     }
   }

  return (
    <>
      <button
        className=" text-red-500 active:bg-pink-600 
         font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg 
         outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Delete
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[99999] shadow-8xl outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-4xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <p className="p-6 flex-auto m-auto">Confirm delete account</p>
                <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleDeleteAcc()}
                    name="yes"
                    value="yes"
                  >
                    Yes
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    name="no"
                    value="no"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
