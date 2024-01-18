import {  signInWithRedirect } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../../firebase'
import {FcGoogle} from 'react-icons/fc'
function Login() {
  const login = () => {
    signInWithRedirect(auth,provider).catch(console.error())
  }
  return (
    <div className='flex flex-col justify-center items-center md:justify-center gap-y-3 '>
        <button className= 'flex flex-row items-center mt-12 px-2 py-4 rounded-lg justify-center text-orange-600 bg-amber-100 hover:bg-amber-200 w-64 ' onClick={login}>
            <FcGoogle className="mr-2"/>
            Login with Google
        </button>
    
    </div>
  )
}

export default Login