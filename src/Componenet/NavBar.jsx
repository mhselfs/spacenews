import React, { useState } from 'react'
import '../App.css'
import { HiMenu, HiX } from "react-icons/hi";


function NavBar() {
    // For menu in Mobile 
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (

        <div className=' relative'>
            {/* Desktop Nav */}
            <div className='hidden md:flex justify-between mx-6 text-white'>
                {/* Site Logo */}
                <div className="my-5">
                    <h2 className=''>IndSpace</h2>
                </div>
                {/* List Item */}
                <div className='my-6'>
                    <ul className='flex justify-center gap-5'>
                        <li className='leading-4 text-l cursor-pointer'>News</li>
                        <li className='leading-4 text-l cursor-pointer'>Opinion</li>
                        <li className='leading-4 text-l cursor-pointer'>Technology</li>
                        <li className='leading-4 text-l cursor-pointer'>Our Planet</li>
                        <li className='leading-4 text-l cursor-pointer'>Health and Science</li>
                    </ul>
                </div>
                {/* Button Click[Need style for Havering and etc] */}
                <div className='my-4'>
                    <button type="button" className='border rounded-3xl leading-2 text-l px-4 py-3'>Sign up for our newsletter</button>
                </div>
            </div>
            {/* Mobile Navbar */}
            <div className='md:hidden flex justify-between mx-6 py-3'>
                {/* Site Logo */}
                <div className="my-5">
                    <h2 className='text-white'>IndSpace</h2>
                </div>
                {/* Mobile Toggle Menu */}
                <div className="my-5">
                    <button onClick={toggleMenu} className='font-bold text-2xl text-white'>
                        {
                            isMenuOpen ? <HiX /> : <HiMenu />
                        }
                    </button>
                </div>
                {/* Mobile Navbar */}
                <div className={`fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg transform transform-transform duration-300 erase-in-out ${isMenuOpen ? "-translate-y-0" : "-translate-y-full"}`
                }>
                    {
                        isMenuOpen ? <h2 className='my-8 pl-4 p4 space-y-4 text-black'>IndSpace</h2> : ""
                    }
                    <ul className='my-8 pl-4 p4 space-y-4 text-black'>
                        <li className='py-2 leading-4 text-l cursor-pointer'>News</li>
                        <li className='py-2 leading-4 text-l cursor-pointer'>Opinion</li>
                        <li className='py-2 leading-4 text-l cursor-pointer'>Technology</li>
                        <li className='py-2 leading-4 text-l cursor-pointer'>Our Planet</li>
                        <li className='py-2 leading-4 text-l cursor-pointer'>Health and Science</li>
                    </ul>
                </div>


            </div>

        </div>
    )
}

export default NavBar