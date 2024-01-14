"use client"

import Image from "next/image"

const Sounds = () => {
  return (
    <div
      className="sounds-container flex flex-col justify-center items-center text-center gap-2 relative pb-10"
      id="sounds">
      <div className="absolute bottom-0 -z-40">
        <Image
          src="/assets/squiggle.png"
          alt="squiggle"
          width={2000}
          height={10}
          data-aos="fade-right"
          data-aos-duration="1000"
        />
      </div>
      <div className="absolute top-0 left-0 h-3/4 w-full bg-[#ebebeb] -z-50"></div>
      <div
        className="text-lg tracking-wider font-bebasNeue font-[800] text-[#606060]"
        data-aos="fade-up"
        data-aos-duration="2000">
        SOUNDS
      </div>
      <div
        className="text-5xl font-abel font-[800]"
        data-aos="fade-up"
        data-aos-duration="2200">
        Find your <span className="text-[#0033FF]">sound</span>
      </div>
      <div
        className="font-nonito text-lg text-[#958A8A] font-[500] mt-2"
        data-aos="fade-up"
        data-aos-duration="2500">
        Preview and download millions of royalty-free samples from
        <br /> top producers, artists, and sound designers. Available on
        <br />
        desktop, web, and mobile.
      </div>
      <button
        className="border-none text-sm mb-10 rounded-full py-2 px-8 font-nonito text-[#ffffffc0] bg-[#0033FF] mt-8 hover:text-black hover:bg-red-400 transition-all duration-300"
        data-aos="fade-up"
        data-aos-duration="2500">
        TRY SOUNDS
      </button>
      <Image
        src="/assets/sound-img.png"
        width={760}
        height={500}
        alt="sound-img"
        data-aos="fade-up"
        data-aos-duration="2600"
      />
    </div>
  )
}

export default Sounds
