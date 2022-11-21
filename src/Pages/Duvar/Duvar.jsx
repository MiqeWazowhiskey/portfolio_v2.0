import React, { useEffect, useState } from 'react'
import db,{ auth } from '../../firebase'
import Login from './Login'
import Wall from './Wall'
import { collection ,  deleteDoc,  onSnapshot, query,doc, getDoc, updateDoc,increment, arrayUnion, arrayRemove  } from 'firebase/firestore';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {TiDeleteOutline} from 'react-icons/ti'
import {FcLike} from 'react-icons/fc'
import { Layout } from '../../components/common';
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
    <Layout>
    <div className='flex flex-col items-center' >
      <div>{user ? <Wall user={user} /> : <Login />}</div>
       
      <div className=' flex flex-col gap-y-10 mt-10 mb-10 items-start w-96 lg:w-1/2 '>
        {values.map((value)=>{
            return (
              <div key={value.id} className="flex flex-col px-4 py-1 w-96 lg:w-auto" >
              
                <div className='flex flex-row items-center gap-x-5 text-2xl w-fit'>
                  <div className='static' ><BsFillArrowRightCircleFill/></div>
                  {value.message}
                </div>
                <div className='text-gray-400 text-xs flex flex-col items-end gap-x-5 justify-end'>
                  {value.name}
                  <button className=' w-fit text-black' onClick={async()=>{
                  
                    const q = (await getDoc(doc(db,'scripts',value.id))).data() 
                    if(q.mail===user.email)
                    await deleteDoc(doc(db,'scripts',value.id))
                    }
                  }><TiDeleteOutline size={15}/>
                </button>
                </div>
                <button className='flex flex-col items-center w-fit ' onClick={async()=>{
                    const get = (await getDoc(doc(db,'scripts',value.id))).data()
                    if(!get.likedUser.includes(user.email)){
                    await updateDoc(doc(db,'scripts',value.id),{
                      like : increment(1),
                      likedUser: arrayUnion(user.email)
                    }) }
                    else if (get.likedUser.includes(user.email)) 
                    {  await updateDoc(doc(db,'scripts',value.id),{
                        like : increment(-1),
                        likedUser: arrayRemove(user.email)
                      })}
                    
                    }}><FcLike/>{value.like}
                   
                </button>
                
                
                

                
              </div>
              
            )
          })}
        
      </div>
    
    </div>
    </Layout>
  )
}

export default Duvar