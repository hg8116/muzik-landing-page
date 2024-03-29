"use client"

import Image from "next/image"

const Hero = () => {
  return (
    <div
      className="hero flex flex-col justify-between items-center sm:flex-row pb-10 md:pb-50 relative"
      data-aos="fade-up"
      data-aos-duration="2000">
      <div className="left-side flex text-center items-center px-20 flex-col md:text-left md:items-start mt-10 py-10 gap-5">
        <div
          className="heading font-inter text-6xl md:text-8xl lg:text-9xl font-extrabold 
        text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-400
        ">
          Where your <br />
          music starts
        </div>
        <div
          className="sub-heading font-nunito text-xl font-light text-[#595959]
        ">
          Royalty free sounds, Industry-leading software. <br /> Endless
          inspiration. Start creating with Muzik.
        </div>
        <button className="border-none rounded-full py-2 px-8 font-nonito text-[#ffffffc0] bg-[#0033FF] hover:text-black hover:bg-red-400 transition-all duration-300 mb-10">
          SIGN UP
        </button>
      </div>
      <div className="right-side invisible lg:visible">
        <Image
          src="/assets/hero-img.png"
          width={1250}
          height={1200}
          alt="people-image"
          layout="responsive"
        />
      </div>
      <div className="absolute bottom-0 left-0 h-1/6 w-full bg-[#ebebeb] -z-10"></div>
    </div>
  )
}

export default Hero
