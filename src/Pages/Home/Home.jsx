import React from 'react'
import Typical from 'react-typical'
import "./Home.css"
import { motion } from 'framer-motion'
import { SiGithub,SiLinkedin,SiInstagram } from "react-icons/si";

function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center gap-y-2'>
        <h1 className='font-bold text-5xl'>Ali Kağan Yılmaz</h1>       
        <h3 className='text-3xl'>Akdeniz Universitesi</h3>
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
      <div className='absolute bottom-32'>
        <a href='https://www.buymeacoffee.com/alikagany?new=1'>
          <img style={{height: "50px"}}
          alt="Bana Destek Ol"
          src='/orange-button.png'
          className='my-5'
          ></img>
        </a>
      </div>
      <div className='flex absolute bottom-20 gap-x-5' >
        <motion.a href='https://www.instagram.com/kaanyble.2/'
                  target={"_blank"} rel="noopenner noreferrer"
                  whileHover={{scale:1.3}}>
         <SiInstagram/>
        </motion.a>
        <motion.a href='https://github.com/MiqeWazowhiskey'
                  target={"_blank"} rel="noopenner noreferrer"
                  whileHover={{scale:1.3}}>
          <SiGithub />
        </motion.a>
        <motion.a href='https://www.linkedin.com/in/ali-kagan-yilmaz/'
                  target={"_blank"} rel="noopenner noreferrer"
                  whileHover={{scale: 1.3}}>
          <SiLinkedin />
        </motion.a>
      </div>
      <div className='flex absolute bottom-10'>
        <p className='px-3'>Bu web sitesinin kaynak kodlarına</p>
         <motion.a href="https://github.com/MiqeWazowhiskey"
                   target={"_blank"}
                   rel="noopenner norefferer"
                   whileHover={{scale: 1.3}}>
            Github
         </motion.a>
         
         <p className='px-3'> üzerinden ulaşabilirsiniz.</p>

        </div>
    </div>
    

  )
}

export  default Home