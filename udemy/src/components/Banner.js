import React, {useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  return (
    <Swiper
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
      modules={[Navigation]}
      className="mySwiper mt-1"
      loop="true"
    >
      <button className="prev bg-buttonBg rounded-full flex items-center justify-center h-[40px] w-[40px] absolute top-[50%] -translate-y-2/4 z-20 left-8">
        <IoIosArrowBack size={25} className="text-white" />
      </button>

      <button className="next bg-buttonBg rounded-full flex items-center justify-center h-[40px] w-[40px] absolute top-[50%] -translate-y-2/4 z-20 right-2">
        <IoIosArrowForward size={25} className="text-white" />
      </button>

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
