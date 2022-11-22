import React, { useEffect,useState } from 'react'
import {motion} from 'framer-motion'
import {RiGitRepositoryLine} from 'react-icons/ri'
import { Layout } from '../../components/common';
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
    <Layout>
    <div className='flex flex-col h-screen gap-x-20 gap-y-10 items-center'>
      {repos.map(repo=> {
        return (
            
            <motion.a key={repo.id} href={repo.clone_url} whileHover={{scale: 1.1}}>
              <div className='flex flex-col lg:w-96 px-3 rounded-lg w-48 border border-gray-200 bg-gray-100 shadow-md shadow-black'>
                <div>
                  <div className='flex flex-row text-gray-500 items-center justify-start'>
                    <RiGitRepositoryLine/>
                    <div className='text-blue-500'>{repo.name}</div>
                  </div>
                  <div className='flex flex-col justify-start text-gray-400'>
                    <p className=''>{repo.description}⭐{repo.stargazers_count}</p>
                    
                  </div>
                </div>
              </div>
            </motion.a>
        
        
        )
      })}
      <h3 className='items-center text-xl font-bold'> And billions are on the way, Stay Tuned !  </h3>
    </div>
    </Layout>
  )
}

export default Projeler