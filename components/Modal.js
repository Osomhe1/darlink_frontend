import React, { useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { HexColorPicker } from 'react-colorful'
import { Button } from '@mui/material'

export default function Modal() {
  const [showModal, setShowModal] = useState(false)
  const [colour, setColour] = useState('#b32aa9')
  const handleSelect = ()=>{
    localStorage.setItem('colour', colour)
    setShowModal(false)

  }


  return (
    <>
      <button
        className=" text-white active:bg-pink-600 
         font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg 
         outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {/* Open small modal */}
        <BorderColorIcon />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[99999] shadow-8xl outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-4xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto m-auto">
                  <HexColorPicker color={colour} onChange={setColour} />
                  <div className="value" style={{ borderLeftColor: colour }}>
                    Current color is {colour}
                  </div>
                </div>
                <div className="flex flex-row-reverse gap-4">
                  <Button
                    color="secondary"
                    onClick={() => setColour('#c6ad23')}
                  >
                    Choose purple
                  </Button>
                  <Button color="success" onClick={() => setColour('#556b2f')}>
                    Choose green
                  </Button>
                  <Button color="primary" onClick={() => setColour('#207bd7')}>
                    Choose blue
                  </Button>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <Button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleSelect()}
                  >
                    Select
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
