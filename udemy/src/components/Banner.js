import React from 'react'

const Banner = () => {
  return (
    <div className='w-screen h-auto mb-10 flex justify-center'>
      <div className="w-[1340px]  bg-[#f7f9fa] relative">
        <img src="/assets/images/woman2.png" alt="woman2" />
        <div className='w-[440px] bg-white absolute top-16 left-16 shadow-lg p-6'>
            <h1 className='text-3xl font-semibold font-serif mb-2 text-buttonBg'>Find the right fit</h1>
            <p className='text-sm text-buttonBg font-medium'>The topics you want, taught by real-world experts. Log in for deals on courses. Sale ends tomorrow.</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
