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
      <div className='h-full w-full flex flex-col'>
        
        {/**Homepage */}
        <div className='h-screen z-30'>
          <div className='w-full  h-1/6 items-center flex justify-center font-extrabold text-4xl lg:text-5xl'>
            <h1>Ali Kağan Yılmaz</h1>
          </div>
          <span className='w-full flex justify-center font-semibold text-[#F4D35E]'>
            <Typical 
                      steps = {['React Enthusiast',2500,
                                'Developer',2500,
                                'Designer',2500,
                                'Cse Student',2500]}
                      loop={Infinity}
                      wrapper="p"
                    />
          </span>
          <div className='flex flex-col h-4/6 justify-end gap-y-10'>
            <div className='flex flex-row items-center space-x-5 justify-center'>
              <span>Bu web sitesinin kodları için</span>
              <AiOutlineArrowRight/>
                    <motion.a href="https://github.com/MiqeWazowhiskey/portfolio_v2.0"
                              target={"_blank"}
                              rel="noopenner norefferer"
                              whileHover={{scale: 1.3}}>
                        Github
                    </motion.a>
            </div>
            <div className='flex justify-center'>
              <button className='flex  flex-col items-center'>
                <span className='hover:animate-bounce text-[#F95738]'>
                  <Arrow size={20}/>
                </span>About Me
              </button>

            </div>
          </div>
        </div>
        {/**About Me */}
        <div className='h-screen'>

        </div>
      </div>
      
    </Layout>

  )
}

export  default Home