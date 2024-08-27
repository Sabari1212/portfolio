import React from 'react'
import hero from '../assets/hero.png';
import about from '../assets/about.png'

const About = () => {
  return (
    <section className='flex flex-col md:flex-row  px-5  bg-about' id="about">
    <div className='md:w-1/2 md:mr-40  mt-20 '  >
         <img  className='1/2 h-[300px] md:h-[700px] ml-10 md:ml-0 mb-10' src={about}></img>
        </div>
        <div className='md:w-1/2 flex   justify-center'>
        <div className=' flex flex-col justify-center text-white'>
        <h1  className=' text-2xl md:text-4xl font-hero mb-10 md: border-b-4 w-[120px] md:w-[180px] border-black'>ABOUT <span className='span-name'>ME</span></h1>
                <p className='md:text-2xl font-bold pb-5'> hi i am sabari. i  am studying in university college of engineering arni .</p>
                <p className='md:text-2xl font-bold pb-5'> hi i am sabari. i  am studying in university college of engineering arni .</p>
                <p className='md:text-2xl font-bold pb-5'> hi i am sabari. i  am studying in university college of engineering arni .</p>
            
        </div>
           

        </div>
        
    
    </section>
  )
}

export default About