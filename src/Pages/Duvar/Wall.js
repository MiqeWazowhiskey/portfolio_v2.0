import React, { useState } from 'react'
import db, { auth } from '../../firebase'
import { collection } from 'firebase/firestore/lite'
function Wall({user}) {
    const usersCollectionRef = collection(db, 'duvar');
    const [script, setScript] = useState("")
    const submission = ( e ) => {
        e.preventDefault();
    }
    return (
    <div className='flex flex-col  justify-center items-center gap-y-8'>
        <div>
            <h4>Hoşgeldiniz... </h4>
            {user.displayName}
        </div>
        <div>
            <button className='border rounded-lg border-orange-500 hover:bg-red-100' onClick={()=>auth.signOut()}>
                <p className='text-orange-500 px-2 py-2'>Logout</p>
            </button>
        </div>
        <div className='flex justify-center h-16 gap-x-5'>
            <input placeholder='Buraya bir not bırak...' size="64" className='underline' value={script} onChange={(e)=>setScript(e.target.value)}/> 
            <button className='px-5 border border-black rounded-lg hover:bg-gray-400 shadow-md shadow-black'>Submit</button>
        </div>
       
    </div>
  )
}

export default Wall