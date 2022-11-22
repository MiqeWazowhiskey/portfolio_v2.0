import React from 'react'
import Header from '../header'
import {TbLetterA as A} from 'react-icons/tb'

const Layout = ({children}) => {
  return (
   <div className='flex h-full flex-col bg-[#082846]  text-[#FFFFFF] '>
        <div className='fixed h-screen w-full flex justify-center  rotate-12 opacity-50 lg:pt-3'>
          <span className='text-[#F95738]'><A size={800}/></span>
        </div>
        <div className='fixed h-screen w-full flex justify-center rotate-12 opacity-50 lg:pt-3'>
          <span className='mb-10 mr-10 text-[#F4D35E]'><A size={800}/></span>
        </div>
           <div className='fixed z-40 w-full'>
            <Header/> 
          </div>
         <div className='pt-20 z-40'>
          {children}
        </div>
    </div>

  )
}

export default Layout