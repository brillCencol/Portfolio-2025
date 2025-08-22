import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt="Profile Image" className='rounded-full w-32'/>
        
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
          Hi! I'm Brill John <Image src={assets.hand_icon} alt="Hand Icon" className='w-6'/>
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
          Fullstack web developer based in Toronto
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
          Aspiring software engineer at Centennial College, passionate about learning, growth, and making a community impact
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>contact me <Image src={assets.right_arrow_white} alt="Right Arrow Icon" className='w-4'/> </a>
          <a href="/resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <Image src={assets.download_icon} alt="Download Icon" className='w-4'/> </a>
        </div>
    </div>
  )
}

export default Header