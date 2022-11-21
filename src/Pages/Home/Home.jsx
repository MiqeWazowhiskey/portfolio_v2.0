import React from 'react'
import Typical from 'react-typical'
import "./Home.css"
import { Layout } from '../../components/common'
import { motion } from 'framer-motion'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {FaArrowCircleDown as Arrow} from 'react-icons/fa'
function Home() {
  return (
    <Layout>
    <div className='flex flex-col items-center flex-wrap md:items-center'>
      <div className='flex flex-col items-center gap-y-2'>
        <h1 className='font-bold text-3xl lg:text-5xl'>Ali Kağan Yılmaz</h1>       
        <h3 className='text-xl lg:text-3xl'>Akdeniz Universitesi</h3>
        <div>
          <Typical 
            steps = {['React Enthusiast',2500,
                      'Developer',2500,
                      'Designer',2500,
                      'Cse Student',2500]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
      </div>
      
       
      <div className='flex justify-center absolute bottom-10 whitespace-nowrap'>
        
        
        <p className='px-3'>Bu web sitesinin kodları için</p>
        <div className='flex flex-row font-bold gap-x-5 items-center'>
        <AiOutlineArrowRight/>
        <motion.a href="https://github.com/MiqeWazowhiskey/portfolio_v2.0"
                   target={"_blank"}
                   rel="noopenner norefferer"
                   whileHover={{scale: 1.3}}>
            Github
         </motion.a>
        </div>
         
      
        
        </div>
        <div className='flex'>
            About Me 
        </div>  
    </div>
    </Layout>

  )
}

export  default Home