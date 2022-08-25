import React, { useEffect, useState } from 'react'
import db,{ auth } from '../../firebase'
import Login from './Login'
import Wall from './Wall'
import { collection ,  deleteDoc,  onSnapshot, query,doc, getDoc  } from 'firebase/firestore';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {TiDeleteOutline} from 'react-icons/ti'
function Duvar() {

  const [user,setUser] = useState(null)
  const [values, setValues] = useState([]);
  
   

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
  useEffect(()=>{
    const q = query(collection(db,'scripts'))
    const unsub = onSnapshot(q,(snapshot)=>{
      let temp =[]
      snapshot.forEach(doc=>{
        temp.push({...doc.data(), id:doc.id })
      })
      setValues(temp)
    })
    return ()=> unsub() 
    
  },[])
  
  
  return (
    <div className='flex flex-col items-center' >
      <div>{user ? <Wall user={user} /> : <Login />}</div>
       
      <div className=' flex flex-col gap-y-10 mt-10 items-start w-96 lg:w-fit '>
        {values.map((value)=>{
            return (
              <div key={value.id} className="flex flex-col px-4 py-1 w-96 lg:w-fit" >
              
                <div className='flex flex-row items-center gap-x-5 text-2xl'> <BsFillArrowRightCircleFill/>{value.message}</div>
                <div className='text-gray-400 text-xs flex gap-x-5 justify-end'>{value.name}</div>
                <button className='flex justify-end' onClick={async()=>{
                  
                    const q = (await getDoc(doc(db,'scripts',value.id))).data() 
                    if(q.mail===user.email)
                    await deleteDoc(doc(db,'scripts',value.id))
                    
                }}><TiDeleteOutline size={15}/></button>
                 

                
              </div>
              
            )
          })}
        
      </div>
    
    </div>

  )
}

export default Duvar