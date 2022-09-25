import React from 'react'
import Button from './Button'
import { BsGlobe2 } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="px-16 pt-10 bg-buttonBg text-white">
        <div className="flex">
            <ul className='mr-6'>
              <li><a href='/' className='py-1.5 text-xs font-medium'>Udemy Business</a></li>
              <li><a href='/' className='py-1.5 text-xs font-medium'>Teach on Udemy</a></li>
              <li><a href='/' className='py-1.5 text-xs font-medium'>Get the app</a></li>
              <li><a href='/' className='py-1.5 text-xs font-medium'>About us</a></li>
              <li><a href='/' className='py-1.5 text-xs font-medium'>Contact us</a></li>
            </ul>
            <ul className='mr-6'>
              <li><a href='/' className='py-1.5 text-xs font-medium'>Careers</a></li>
              <li><a href='/' className='py-1.5 text-xs font-medium'>Blog</a></li>
              <li><a href='/' className='py-1.5 text-xs font-medium'>Help and Support</a></li>
              <li><a href='/' className='py-1.5 text-xs font-medium'>Affiliate</a></li>
              <li><a href='/' className='py-1.5 text-xs font-medium'>Investors</a></li>
            </ul>
            <ul className='mr-6'>
              <li><a href='/' className='py-1.5 text-xs font-medium'>Terms</a></li>
              <li><a href='/' className='py-1.5 text-xs font-medium'>Privacy policy</a></li>
              <li><a href='/' className='py-1.5 text-xs font-medium'>Cookie settings</a></li>
              <li><a href='/' className='py-1.5 text-xs font-medium'>Sitemap</a></li>
              <li><a href='/' className='py-1.5 text-xs font-medium'>Accessibility statement</a></li>
            </ul>
            <div className='ml-auto'>
              <Button>
                <BsGlobe2 /> English
              </Button>
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
