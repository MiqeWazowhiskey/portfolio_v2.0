import React, { useEffect,useState } from 'react'
import {motion} from 'framer-motion'

function Projeler() {
  const[repos,setRepos]=useState([]);
  useEffect(()=>{
     fetch('https://api.github.com/users/MiqeWazowhiskey/repos')
     .then((response)=>response.json())
     .then(response=>setRepos(response))
     .catch(Error=>console.log(Error))
  },[])
  console.log(repos)
  return (
    <div className='flex flex-col justify-center gap-x-20 gap-y-10 items-center'>
      {repos.map(repo=> {
        return (
          
            <motion.a key={repo.id} href={repo.clone_url} whileHover={{scale: 1.1}}>
              <div className='flex flex-col bg-gray-200 border border-orange-600 px-3 py-3 rounded-lg pt-6 shadow-md shadow-gray-300'>
              <p className='text-orange-600'>{repo.name}</p>
              <p className='text-orange-600'>⭐{repo.stargazers_count}</p>
              <p className='text-orange-600'>💻{repo.description}</p>  
              </div>
            </motion.a>
        
        )
      })}
      <h3 className='absolute justify-center bottom-10'> And billions are on the way, Stay Tuned !  </h3>
    </div>
  )
}

export default Projeler