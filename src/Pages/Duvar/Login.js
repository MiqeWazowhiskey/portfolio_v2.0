import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../../firebase'
import {FcGoogle} from 'react-icons/fc'
function Login() {
  const login = () => {
    signInWithPopup(auth,provider).catch(console.error())
  }
  return (
    <div className='flex flex-col justify-center items-center  md:justify-center gap-y-3 '>
      <p className='text-gray-300 lg:text-xl'>Bi' hatıra bırak...</p>
        <button className= 'flex border flex-col items-center mt-12 px-2 py-2 rounded-lg justify-center text-orange-600 hover:bg-red-100 w-32' onClick={login}> 
            Google Giriş
            <FcGoogle/>
        </button>
    
    </div>
  )
}

export default Login