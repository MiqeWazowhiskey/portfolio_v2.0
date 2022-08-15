import React from 'react'
import { motion } from 'framer-motion'
import { SiGithub,SiLinkedin,SiInstagram} from "react-icons/si";
import { GiClick } from "react-icons/gi";
  
function Contact() {
  return (
    <div className='justify-center flex flex-col gap-y-20'>
      <div className='flex flex-col items-center gap-y-10'>
      <h3 className='font-bold text-4xl'>Contact Me</h3>
      <p className='text-gray-400'>Get in touch with me ...</p>
      </div>
      <div className='flex justify-center gap-x-20'>
            <div className='flex flex-col items-center'>
              <SiInstagram size={70}/> 
              <motion.a href='https://www.instagram.com/kaanyble.2/'
                        target={"_blank"} rel="noopenner noreferrer"
                        whileHover={{scale:1.3}}>
                Instagram
                <div className='mt-4'>
                <GiClick size={20} />
                </div>
              </motion.a>
            </div> 
            <div className='flex flex-col items-center'>
              <SiGithub size={70} />
              <motion.a href='https://github.com/MiqeWazowhiskey'
                          target={"_blank"} rel="noopenner noreferrer"
                          whileHover={{scale:1.3}}>
                GitHub
                <div className='mt-4'>
                <GiClick size={20} />
                </div>
              </motion.a>
            </div>
            <div className='flex flex-col items-center'>
              <SiLinkedin size={70} />
              <motion.a href='https://www.linkedin.com/in/ali-kagan-yilmaz/'
                          target={"_blank"} rel="noopenner noreferrer"
                          whileHover={{scale: 1.3}}>
                Linkedin
                <div className='mt-4'>
                <GiClick size={20} />
                </div>
              </motion.a>
            </div>
      </div>
    </div>  
          
      
  
  )
}

export default Contact