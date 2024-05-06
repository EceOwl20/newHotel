import React from 'react'

const MiramareVideo = () => {
  return (
    <div className='relative w-full  aspect-w-16 aspect-h-9'>
      <video id="" className='absolute inset-0 w-full'>
        <source src='/videos/miramare.mp4' type='video/mp4' />
      </video>
      <img src="https://miramarehotels.com/assets/frontend/images/homepage/homepage-video-background.webp" data-src="https://miramarehotels.com/assets/frontend/images/homepage/homepage-video-background.webp" className='absolute inset-0 w-full h-full object-cover cursor-pointer'/>
    </div>
  )
}

export default MiramareVideo
