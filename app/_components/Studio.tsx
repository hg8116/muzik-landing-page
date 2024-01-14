"use client"

import Image from "next/image"

const Studio = () => {
  return (
    <div
      className="studio-container flex justify-center items-center gap-40 py-20"
      id="studio">
      <div
        className="left-side flex flex-col gap-2 items-start"
        data-aos="fade-right"
        data-aos-duration="2000">
        <div className="text-lg tracking-wider font-bebasNeue font-[800] text-[#606060]">
          STUDIO
        </div>
        <div className="text-5xl font-abel font-[800]">
          Stay in <span className=" text-[#0033FF]">sync</span>
        </div>
        <div className="font-nonito text-lg text-[#958A8A] font-[500] mt-2">
          Try industry-leading music software for <br /> free, pay it off over
          time and own it forever.
        </div>
        <button className="border-none text-sm mb-10 rounded-full py-2 px-8 font-nonito text-[#ffffffc0] bg-[#0033FF] mt-8 hover:text-black hover:bg-red-400 transition-all duration-300">
          TRY STUDIO
        </button>
      </div>
      <div className="right-side">
        <Image
          src="/assets/samples.png"
          width={600}
          height={600}
          alt="wheel.png"
        />
      </div>
    </div>
  )
}

export default Studio
