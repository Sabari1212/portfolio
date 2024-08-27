import React from 'react'
import resume from '../assets/resume3.png'
import pdf from '../assets/pdf.pdf'
const Resume = () => {
  return (
    <section className='flex flex-col md:flex-row   px-5  bg-about py-10 ' id="resume">
    <div className='md:w-1/2 md:mr-40  mt-10 flex justify-center md:justify-end pb-[50px]' >
         <img  className='1/2   md:h-[550px]' src={resume}></img>
         </div>
        
        <div className='md:w-1/2 flex   justify-center'>
        <div className=' flex flex-col justify-center text-white'>
        <h1  className=' text-2xl md:text-4xl font-hero mb-5-10 mt-5 md: border-b-4 w-[80px] md:w-[140px] border-black'>RESUME</h1>
                <p className='md:text-2xl font-bold pb-5 pt-5'> You can view my Resume <a href={pdf} download className='p-3 button_bg  hover:border-2 border-white'>Download</a></p>
            
        
           

        </div>
        </div>
        
    
    </section>
  )
}

export default Resume