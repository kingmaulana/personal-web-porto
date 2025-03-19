

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if(scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    },[])


    return (
      <>
      {!isDarkMode && (
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
          <Image src={assets.header_bg_color} alt="header" className="w-full" />
        </div>
      )}
        <nav
          className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
            isScroll
              ? "bg-white/0 backdrop-blur-lg shadow-sm dark:bg-[##11001F] shadow-white/20"
              : "bg-transparent"
          }`}
        >
          <a href="#top">
            <Image
              src={isDarkMode ? assets.akbar_logo_dark : assets.akbar_logo}
              className="w-28 cursor-pointer mr-14"
              alt="logo"
            />
          </a>

          <ul
            className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
              isScroll ? "" : "shadow-sm bg-white/0 dark:border dark:border-white/50 dark:bg-transparent"
            }`}
          >
            <li>
              <a className='hover:font-bold' href="#top">Home</a>
            </li>
            <li>
              <a className='hover:font-bold' href="#about">About me</a>
            </li>
            <li>
              <a className='hover:font-bold' href="#services">Services</a>
            </li>
            <li>
              <a className='hover:font-bold' href="#work">My Work</a>
            </li>
            <li>
              <a className='hover:font-bold' href="#contact">Contact me</a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(prev => !prev)}
              className="p-1 rounded-full"
            >
              <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="moon" className="w-6" />
            </button>

            <a
              className="shadowLightMode lightHover hover:-translate-y-1 duration-500 hidden lg:flex items-center gap-3 px-10 border border-gray-200 rounded-full ml-4 py-2 font-Ovo dark:border-white/50"
              href="#contact"
            >
              Connect
              <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className="w-3" alt="contact" />
            </a>

            <button className="block md:hidden ml-3">
              <Image
                src={isDarkMode ? assets.menu_white : assets.menu_black}
                alt="menu"
                className="w-6"
                onClick={openMenu}
              />
            </button>

            {/* Mobile Menu */}
            {/* -right-64 for hide menu if -right-0 for show menu */}
            <ul
              ref={sideMenuRef}
              className="flex md:hidden flex-col gap-4 py-10 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 shadowLightMode dark:text-white"
            >
              <div className="absolute right-6 top-6">
                <Image
                  src={isDarkMode ? assets.close_white : assets.close_black}
                  alt="close"
                  className="w-5 cursor-pointer"
                  onClick={closeMenu}
                />
              </div>

              <li>
                <a href="#top" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeMenu}>
                  About me
                </a>
              </li>
              <li>
                <a href="#services" onClick={closeMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#work" onClick={closeMenu}>
                  My Work
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}

export default Navbar
