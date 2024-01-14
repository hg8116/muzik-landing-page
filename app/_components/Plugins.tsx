"use client"

import Image from "next/image"

const Plugins = () => {
  return (
    <div
      className="plugins-container flex justify-center items-center gap-40 py-20"
      id="plugin">
      <div className="left-side animate-spin-slow">
        <Image
          src="/assets/wheel.png"
          width={600}
          height={600}
          alt="wheel.png"
        />
      </div>
      <div
        className="right-side flex flex-col gap-2 items-start"
        data-aos="fade-left"
        data-aos-duration="2000">
        <div className="text-lg tracking-wider font-bebasNeue font-[800] text-[#606060]">
          PLUGINS
        </div>
        <div className="text-5xl font-abel font-[800]">
          Build your <div className="mt-2 text-[#0033FF]">digital studio</div>
        </div>
        <div className="font-nonito text-lg text-[#958A8A] font-[500] mt-2">
          Try industry-leading music software for <br /> free, pay it off over
          time and own it forever.
        </div>
        <button className="border-none text-sm mb-10 rounded-full py-2 px-8 font-nonito text-[#ffffffc0] bg-[#0033FF] mt-8 hover:text-black hover:bg-red-400 transition-all duration-300">
          TRY GEAR
        </button>
      </div>
    </div>
  )
}

export default Plugins
