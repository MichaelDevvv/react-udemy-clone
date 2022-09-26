import React from 'react'
import Button from './Button'
import { BsGlobe2 } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="px-16 pt-10 bg-buttonBg text-white">
        <div className="flex">
            <ul className='mr-[10rem]'>
              <li><a href='/' className='link'>Udemy Business</a></li>
              <li><a href='/' className='link'>Teach on Udemy</a></li>
              <li><a href='/' className='link'>Get the app</a></li>
              <li><a href='/' className='link'>About us</a></li>
              <li><a href='/' className='link'>Contact us</a></li>
            </ul>
            <ul className='mr-[10rem]'>
              <li><a href='/' className='link'>Careers</a></li>
              <li><a href='/' className='link'>Blog</a></li>
              <li><a href='/' className='link'>Help and Support</a></li>
              <li><a href='/' className='link'>Affiliate</a></li>
              <li><a href='/' className='link'>Investors</a></li>
            </ul>
            <ul className='mr-[10rem]'>
              <li><a href='/' className='link'>Terms</a></li>
              <li><a href='/' className='link'>Privacy policy</a></li>
              <li><a href='/' className='link'>Cookie settings</a></li>
              <li><a href='/' className='link'>Sitemap</a></li>
              <li><a href='/' className='link'>Accessibility statement</a></li>
            </ul>
            <div className='ml-auto'>
              <button className='flex border-[1px] items-center justify-center gap-1 px-7 py-2 hover:bg-slate-50 hover:bg-opacity-10 transition-all'>
                <BsGlobe2 /> English
              </button>
            </div>
        </div>
        <div className='flex justify-between items-center pt-24 pb-12'>
          <img src='/assets/images/logo-udemy-white.svg' alt='Udemy logo' className='h-[34px]'></img>
          <p className='text-xs'>© 2022 Udemy, Inc.</p>
        </div>
    </div>
  )
}

export default Footer
