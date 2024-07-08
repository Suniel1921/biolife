import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = () => {
  return (
    <>
   <div className="container">
   <SkeletonTheme>        
      <div className='chilCard'>
      <Skeleton width={250} height={250} />
      <h3><Skeleton width={250} /></h3>
      <p><Skeleton width={150} /></p>
      <p><Skeleton width={150} /></p>
    </div>
    </SkeletonTheme>

   </div>
    </>
  )
}

export default CardSkeleton