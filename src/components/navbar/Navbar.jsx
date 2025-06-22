import React from 'react';
import NavbarItem from './NavbarItem';
import { PiCoffee } from "react-icons/pi";


const Menu =[
    {
      id:1,
      name:"Home",
      link:"/#"
    },
    {
      id:2,
      name:"Services",
      link:"/#"
    },
    {
      id:3,
      name:"About",
      link:"/#"
    },
    {
      id:4,
      name:"Contact",
      link:"/#"
    }, 
  ]
const Navbar = () => {
  return (
    <div data-aos="fade-down" className="bg-gradient-to-r from-secondary to-secondary/75 shadow-lg text-light ">
        <div className="container py-3">
            <div className="flex items-center justify-between">
                <div className="font-pasifika flex items-center justify-center gap-2 font-bold text-xl lg:text-3xl md:text-2xl ">
                    <img className='w-16' src="/logo/3.png" alt="logo" />
                    CoffePub
                </div>
                <div className="hidden lg:flex items-center space-x-5 justify-between">
                    {Menu?.map((menu,i)=> (
                        <NavbarItem key={i} menu={menu} />
                    ))}
                </div>
                <div className="flex items-center space-x-2 px-4 py-3 rounded-full border bg-brandDark cursor-pointer hover:scale-105 transition-all duration-150">
                    <span className='text-sm font-bold'>ORDER</span>
                    <PiCoffee size={21} />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
