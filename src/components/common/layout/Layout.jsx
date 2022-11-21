import React from 'react'
import Header from '../header'

const Layout = ({children}) => {
  return (
    <div className='w-screen h-screen flex flex-col'>
        <Header/>
        {children}
    </div>
  )
}

export default Layout