import React from 'react'
import image1 from '../assets/1.png'
import image2 from '../assets/c1.png'
import image3 from '../assets/t1.png'

const Project = () => {
  return (
    <section className='flex flex-col  py-5 px-5 bg-secondary ' id="project">
        <div className='w-full  flex  mt-20'>
        <div className='flex  flex-col justify-center'>
        <h1  className=' text-2xl md:text-4xl font-hero text-white mb-5 md: border-b-4 w-[100px] md:w-[140px] border-black'>PROJECT</h1>
        <p className='text-white font-bold md:text-2xl mb-5'>This are some of my projects.It is build with react,html,css and javascript</p>
            </div>

        </div>
        <div className='w-full'>
        <div className='flex flex-col md:flex-row px-10 gap-5 text-white pb-[100px]  '>
            <div className='relative'>
            <img  className=' h-[250px]md: h-[350px]'src={image1}></img>
            <div className='project_des px-5'>
                <p className='text-center py-10 font-bold md:text-2xl'>Guess a number website by using react js</p>
                <div className=' flex justify-center'>
                    <a className='github-link 'href="https://github.com/Sabari1212/Guess_Number">View Project</a>
                </div>
            </div>

            </div>
            <div className='relative' >
            <img   className=' h-[250px]md: h-[350px]' src={image2}></img>
            <div className='project_des px-5'>
                <p className='text-center py-10 font-bold md:text-2xl' > Colour changing website that is created by react js </p>
                <div className=' flex justify-center'>
                    <a className='github-link 'href="https://color-app-nine.vercel.app/">View Project</a>
                </div>

            </div>

            </div>
            <div className='relative'>
            <img  className=' h-[250px]md: h-[350px]' src={image3}></img>
            <div  className='project_des px-5'>
                <p className='text-center py-10 font-bold md:text-2xl'> A simple task management app that performs CRUD operation like create,update and delete.This website is
                    created by using MERN stack </p>
                    <div className=' flex justify-center'>
                    <a className='github-link 'href="https://github.com/Sabari1212/Task-App">View Project</a>
                </div>
            </div>

            </div>
            
           
           
        </div>
               
        </div>
        </section>
  )
}

export default Project