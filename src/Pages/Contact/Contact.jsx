import React from 'react'
import {motion} from 'framer-motion'
import {SiGithub, SiLinkedin, SiInstagram} from "react-icons/si";
import {GiClick} from "react-icons/gi";
import {Layout} from '../../components/common';

function Contact() {
    return (
        <>
        <div className=' flex flex-col gap-y-10 h-screen items-start ml-10'>
            <div className='flex flex-col items-center gap-y-10 '>
                <h3 className='font-bold text-4xl'>Contact Me</h3>
                <p className='text-gray-600 font-bold'>Get in touch with me ...</p>
            </div>
            <div className='flex flex-col justify-center gap-5'>
                <a href='https://www.instagram.com/kaanyble.2/'
                   target={"_blank"} rel="noopenner noreferrer"
                   className='flex flex-row items-center hover:text-red-500'>
                    <SiInstagram size={30}/>
                    <p className='text-xs lg:text-base ml-2'>Instagram</p>
                </a>
            <a href='https://github.com/MiqeWazowhiskey'
               target={"_blank"} rel="noopenner noreferrer"
               className='flex flex-row items-center hover:text-gray-500'>
                <SiGithub size={30}/>
                <p className='text-xs lg:text-base ml-2'>GitHub</p>

            </a>
            <a href='https://www.linkedin.com/in/ali-kagan-yilmaz/'
               target={"_blank"} className='flex flex-row items-center hover:text-blue-500'>
                <SiLinkedin size={30}/>
                <p className='text-xs lg:text-base ml-2'>Linkedin</p>
            </a>
        </div>
        </div>
</>


)
}

export default Contact