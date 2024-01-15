"use client"

import Image from "next/image"

const Featured = () => {
  return (
    <div className="featured-container flex flex-col justify-center items-center py-40 gap-10 bg-[#ebebeb]">
      <div className="tracking-widest text-2xl md:text-lg font-mono text-[#202020]">
        FEATURED IN
      </div>
      <div
        className="featured-logo flex flex-col md:flex-row justify-center items-center gap-20"
        data-aos="fade-up"
        data-aos-duration="3000">
        <Image src="/assets/feat1.png" height={50} width={150} alt="feat1" />
        <Image src="/assets/feat2.png" height={50} width={150} alt="feat2" />
        <Image src="/assets/feat3.png" height={50} width={150} alt="feat3" />
        <Image src="/assets/feat4.png" height={50} width={150} alt="feat4" />
        <Image src="/assets/feat5.png" height={50} width={150} alt="feat5" />
      </div>
    </div>
  )
}

export default Featured
