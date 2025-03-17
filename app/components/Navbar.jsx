

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const Navbar = () => {

    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }


    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='header' className='w-full' />
            </div>
            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 items-center justify-between flex'>
                <a href="#top">
                    <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt='logo' />
                </a>

                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
                    <li>
                        <a href="#top">Home</a>
                    </li>
                    <li>
                        <a href="#about">About me</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#work">My Work</a>
                    </li>
                    <li>
                        <a href="#contact">Contact me</a>
                    </li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button>
                        <Image src={assets.moon_icon} alt='moon' className='w-6' />
                    </button>

                    <a className='hidden lg:flex items-center gap-3 px-10 border border-gray-200 rounded-full ml-4 py-2' href="#contact">Connect <Image src={assets.arrow_icon} className='w-3' alt='contact' /></a>

                    <button className='block md:hidden ml-3'>
                        <Image src={assets.menu_black} alt='menu' className='w-6'
                        onClick={openMenu} />
                    </button>

                    {/* Mobile Menu */}
                    {/* -right-64 for hide menu if -right-0 for show menu */}
                    <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-10 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

                        <div className='absolute right-6 top-6'>
                            <Image 
                            src={assets.close_black} 
                            alt='close' 
                            className='w-5 cursor-pointer'
                            onClick={closeMenu}
                            />
                        </div>

                        <li>
                            <a href="#top"  onClick={closeMenu}>Home</a>
                        </li>
                        <li>
                            <a href="#about" onClick={closeMenu}>About me</a>
                        </li>
                        <li>
                            <a href="#services" onClick={closeMenu}>Services</a>
                        </li>
                        <li>
                            <a href="#work" onClick={closeMenu}>My Work</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={closeMenu}>Contact me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
