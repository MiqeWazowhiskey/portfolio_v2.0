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
    <div className='flex flex-col justify-center gap-x-20 gap-y-10 items-center md:items-center md:justify-center md:gap-y-6 md:gap-x-8 '>
      {repos.map(repo=> {
        return (
          
            <motion.a key={repo.id} href={repo.clone_url} whileHover={{scale: 1.1}}>
              <div className='flex flex-col bg-gray-200 border border-orange-600 px-3 rounded-lg shadow-md shadow-gray-500'>
                <div className='flex justify-between'>
                  <div>⚫</div><div>⚫</div><div>⚫</div><div>⚫</div>
                </div>
                <div>
                  <p className='text-orange-600'>{repo.name}</p>
                  <p className='text-orange-600'>⭐{repo.stargazers_count}</p>
                  <p className='text-orange-600'>💻{repo.description}</p>  
                </div>
                
              </div>
            </motion.a>
        
        )
      })}
      <h3 className='items-center'> And billions are on the way, Stay Tuned !  </h3>
    </div>
  )
}

export default Projeler