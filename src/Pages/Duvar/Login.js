import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../../firebase'
function Login() {
  const login = () => {
    signInWithPopup(auth,provider).catch(console.error())
  }
  return (
    <div className='flex justify-center mt-12'>
        <button className= 'flex border border-orange-600 px-2 py-2 rounded-lg justify-center text-orange-600 hover:bg-red-100' onClick={login}> 
            Google Giriş
        </button>
    
    </div>
  )
}

export default Login