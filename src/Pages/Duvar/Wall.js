import React, { useEffect, useState } from 'react'
import db ,{ auth } from '../../firebase'
import { collection  } from 'firebase/firestore/lite'
import { doc, setDoc } from "firebase/firestore"; 
import {motion} from 'framer-motion'

function Wall({user}) {
    
    const [script, setScript] = useState("")
    const [values,setValues] = useState([])
    useEffect(()=>{
        
    },[])
    return (
    <div className='flex flex-col  justify-center items-center gap-y-8 md:justify-center md:items-center md:gap-y-4'>
        <div className='flex flex-col items-center'>
            <h4 className='font-bold'>Hoşgeldiniz... </h4>
            {user.displayName}
        </div>
        <div>
            <button className='bg-blue-600 rounded-lg hover:bg-blue-300' onClick={()=>auth.signOut()}>
                <p className='text-white px-2 py-2'>Logout</p>
            </button>
        </div>
        <div className='flex justify-center h-16 border p-2 gap-x-2'>
            <input placeholder='Buraya bir not bırak...' size={40} className='underline' value={script} onChange={(e)=>setScript(e.target.value)}/> 
            <motion.button className='px-5  rounded-lg border bg-gray-100' whileHover={{scale: 1.1}} >Submit</motion.button>
        </div>
        <div className='flex'>
             
        </div>
       
    </div>
  )
}

export default Wall
