

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import InfiniteScroll from './InfiniteScroll'
import CircularText from '../effects/CircularText'
import TextPressure from '../effects/TextPressure'

function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile"
          className="rounded-full w-32"
        />
      </div>

      {/* <CircularText
        text="REACT*BITS*COMPONENTS*"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class absolute left-85 top-55 "
      /> */}
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi I'm Akbar Maulana{" "}
        <Image alt="" className="w-6" src={assets.hand_icon} />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        <div>
          <TextPressure
            text="fullstack"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#000000"
            strokeColor="#ff0000"
            minFontSize={12}
          />
        </div>
        web developer based in Borneo 🇮🇩
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a fullstack developer from Central Borneo, Indonesia. I have a
        passion for creating beautiful and functional websites.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="hover:-translate-y-1 hover:shadow-md shadow-gray-300 px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-black text-white"
        >
          contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href="/Akbar-Maulana-CV.pdf"
          download
          className="px-10 py-3 border  gap-2 whiteText w-max flex items-center justify-center text-gray-700 border-gray-700 rounded-full mx-auto shadowLightMode lightHover hover:-translate-y-1 duration-500"
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>

     
    </div>
  );
}

export default Header
