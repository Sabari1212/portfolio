import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
const Header = () => {
    const [menuBar,setMenubar]=useState(false)

    function showMenu(){
        setMenubar(!menuBar)
    }
  return (
    <div id="header">
        <header className='flex justify-between px-6  bg-primary py-2 pb-3'>
            <a href="#" className='font-bold text-black '><span> MR SABARI S</span> </a>
            <nav className='hidden md:block'>
            <ul className='flex text-white font-bold'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </nav>
           
           {menuBar && <nav className='block md:hidden  ' onClick={()=>showMenu()}>
            <ul className='flex flex-col text-white mobile-nav font-bold'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </nav>
}
            <button  onClick={()=>showMenu()}className='block md:hidden '> <IoMdMenu/></button>

        </header>
    </div>
  )
}

export default Header