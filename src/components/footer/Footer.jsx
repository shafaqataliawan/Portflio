import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div id='footer' className=' scroll-mt-24  flex justify-around bg-[#465697] text-white p-10 md:p-12  items-center  '>
        <div>
            <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel Free to reach out ! </h3>
        </div>
        <ul className='text-sm md:text-xl'>
            <li className='flex items-center gap-1'><MdOutlineEmail size={20}/>myemail.com</li>
            <li  className='flex items-center gap-1'><CiLinkedin size={20} />linkdin.com/username</li>
            <li  className='flex items-center gap-1' > <FaGithub size={20}/>github.com/username</li>
        </ul>
      
    </div>
  )
}

export default Footer
