import React from 'react'
import contact from '../assets/contact.png'

const Contact = () => {
    return (
        <section className=' flex flex-col md:flex-row  px-5    bg-secondary ' id="contact">
           
           
            <div className='  md:w-1/2 px-5 flex flex-col mr-15 md:justify-center pl-[100px]  '>
            <h className='font-bold text-white text-2xl md:text-4xl pt-[50px] border-b-4 border-black w-[120px] md:w-[160px]  '> CONTACT</h>

             <p className='font-bold text-white md:text-2xl pb-[20px] pt-5'>If you want to discuss more in detail.please contact me .</p>
             <p className='font-bold text-white md:text-2xl pb-[20px]'><span className='font-bold contact-color'>EMAIL=</span>sabarisankar1212@</p>
             <p className='font-bold text-white md:text-2xl pb-[20px]'><span className='font-bold contact-color'>PHONE=</span>9750371420</p>

            </div>
            <div className='md:w-1/2 py-10 ml-20 pl-[50px]'>
                  <img  className=' w-1/2'src={contact}>
                  </img>
            </div>
            
           



            
            
            
    
            
        </section>
    )

  
}

export default Contact
