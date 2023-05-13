import React from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  return (
    <div>
      <div className=''>
        <Image
          src='/images/anime_with_bg_1.gif'
          alt='loader'
          width={`100`}
          height={100}
          className='w-full'
        />
      </div>
    </div>
  )
}
