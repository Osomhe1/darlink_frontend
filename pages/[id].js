

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const LazyComponent = dynamic(() => import('../components/[1d]'), {
  suspense: true,
})

const MyPage = () => {
  return (
    <div>
      <Suspense fallback={<div className='text-4xl m-auto w-[200px] text-green-500 text-center' >Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}

export default MyPage