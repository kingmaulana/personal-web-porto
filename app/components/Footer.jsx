
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Footer({isDarkMode}) {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.akbar_logo_dark : assets.akbar_logo} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={assets.mail_icon} alt='' className='w-6'/>
        akbarquipper@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Akbar Maulana. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a terget='_blank' href="https://github.com/kingmaulana">Github</a></li>
            <li><a terget='_blank' href="www.linkedin.com/in/akbarrmaulana">LinkedIn</a></li>
            <li><a terget='_blank' href="https://www.instagram.com/akbr_lana/">Instagram</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
