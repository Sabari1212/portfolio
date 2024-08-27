import React from 'react'
import hero from '../assets/hero.png';
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare,FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row  px-5 bg-secondary  justify-center' id="hero">
        <div className='md:w-1/2 flex flex-col '>
        <h1 className=' pt-20 pb-5 md:pt-40  text-white text-4xl md:text-6xl font-hero'>Hi,<br></br> I am <span className='span-name'>Sabari</span>
        <p className='text-2xl'>I am a Full stack developer</p></h1>
        <div className='flex flex-row'>
            <a className='hover:text-white' href='https://github.com/'><FaGithubSquare size={40}/></a>
            <a  className='hover:text-white' href='https://www.instagram.com/tobi__sabi?igsh=MTBxeGZqdHNuNXVyYg=='><FaInstagramSquare size={40}/></a>
            <a className='hover:text-white' href='https://www.linkedin.com/in/sabari32/'><FaLinkedin size={40}  /></a>
        </div>

        </div>
        

        <img className=' md:w-1/2' src={hero}></img>
    </section>
  )
}

export default Hero