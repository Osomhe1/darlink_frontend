import React, { useState } from 'react'
import { UserInfo } from './verify'


export default function CopyButton({onMouseLeave}) {

    const infor = UserInfo()
const [text, setText] = useState(`darlink.to/${infor.username}`)
// const [text, setText] = useState(`http://localhost:3000/${infor.username}`)
        
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(text)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}

  return (
    <div onMouseLeave={onMouseLeave}>
      <button
        className="bg-[#8BC940]  text-white active:bg-gray-700 text-sm font-thin uppercase
                       px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[100%]
                       bottom-0 "
        type="button"
        style={{ transition: 'all .15s ease', hover: '' }}
        onClick={copyToClipboard}
      >
        Copy Text
      </button>
    </div>
  )
}
