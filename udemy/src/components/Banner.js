import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

const Banner = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper mt-1"
      loop="true"
    >
      <SwiperSlide>
        <div className="w-screen h-auto mb-10 flex justify-center">
          <div className="w-[1340px]  bg-[#f7f9fa] relative">
            <img src="/assets/images/woman2.png" alt="banner1" />
            <div className="w-[440px] bg-white absolute top-16 left-16 shadow-lg p-6">
              <h1 className="text-3xl font-semibold font-serif mb-2 text-buttonBg">
                Find the right fit
              </h1>
              <p className="text-sm text-buttonBg font-medium">
                The topics you want, taught by real-world experts. Log in for
                deals on courses. Sale ends tomorrow.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-auto mb-10 flex justify-center">
          <div className="w-[1340px]  bg-[#f7f9fa] relative">
            <img src="/assets/images/banner2.jpg" alt="banner2" />
            <div className="w-[440px] bg-white absolute top-16 left-16 shadow-lg p-6">
              <h1 className="text-3xl font-semibold font-serif mb-2 text-buttonBg">
                24-Hour Flash Sale
              </h1>
              <p className="text-sm text-buttonBg font-medium">
                Learn from real-world experts. Log in for special savings. Sale
                ends tonight!
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Banner
