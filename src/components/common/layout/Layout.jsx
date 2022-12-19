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
        <div className='fixed z-40 w-full h-fit'>
          <Header/> 
        </div>
        <React.Suspense
          fallback={
            <div className="text-black w-full justify-center items-center text-3xl font-extrabold">
              Loading...
            </div>
        }>
        <div className='pt-20 z-30'>
          {children}
        </div>
        </React.Suspense>
    </div>

  )
}

export default Layout