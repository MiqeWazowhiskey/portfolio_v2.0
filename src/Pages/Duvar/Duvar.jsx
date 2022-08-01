import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import Login from './Login'
import Wall from './Wall'


function Duvar() {

  const [user,setUser] = useState(null)

  useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        if(authUser){
          setUser(authUser)
        }
        else{
          setUser(null)
        }
        console.log(authUser)
      })
  }, [])
  return (
    <div >
      
      {user ? <Wall user={user} /> : <Login />}
    
    </div>

  )
}

export default Duvar