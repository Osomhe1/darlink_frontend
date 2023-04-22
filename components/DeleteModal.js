import React, { useState } from 'react'
import { Button } from '@mui/material'
import { USER } from '../pages/api/ACTIONS.JS'
import api from '../pages/api/darlink'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'


export default function DeleteModal() {
  const [showModal, setShowModal] = useState(false)
   const router = useRouter()

   const handleDeleteAcc = async () => {
    setShowModal(false)
     try {
       const { data } = await api.delete(USER.DELETE_ACC(), {})
         if (data.success) {
           router.push('/Login')
       }
     } catch (error) {
       toast.error(error.response.data.error)
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
                  <Button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleDeleteAcc()}
                    name="yes"
                    value="yes"
                  >
                    Yes
                  </Button>
                  <Button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    name="no"
                    value="no"
                  >
                    No
                  </Button>
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
