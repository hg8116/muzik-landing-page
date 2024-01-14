"use client"

import Image from "next/image"
import TextList from "./TextList"
import Twitter from "../../public/assets/twitter.svg"
import Instagram from "../../public/assets/instagram.svg"
import Facebook from "../../public/assets/facebook.svg"
import Youtube from "../../public/assets/youtube.svg"
import Link from "next/link"
import { FooterContent } from "@/utils/constants"

const Footer = () => {
  const socials = [Twitter, Instagram, Facebook, Youtube]

  return (
    <div
      className="footer-container bg-[#ffffffb3] flex justify-center gap-[150px] my-20 text-[#606060]
  "
      id="blog"
      data-aos="fade-up"
      data-aos-duration="1500">
      <div className="logo-div flex flex-col gap-2">
        <Image src="/assets/logo.jpg" alt="muzik-logo" height={35} width={35} />
        <div className="text-sm">2024 Muzik.com All Rights Reserved</div>
      </div>
      <div className="center-links flex flex-col gap-10">
        <div className="upper-links flex gap-[100px]">
          <TextList />
          <TextList />
          <TextList />
        </div>
        <div className="lower-links flex gap-[100px]">
          <TextList />
          <TextList />
          <TextList />
        </div>
      </div>
      <div className="socials-container flex flex-col gap-6">
        <div className="text-[#0C0C0C] font-[800] tracking-tighter">
          FIND US ON SOCIALS
        </div>
        <div className="social-logos flex gap-3 justify-start items-center">
          {socials.map((el, ind) => (
            <Link href="/" key={ind}>
              <Image src={el} alt={el + ""} />
            </Link>
          ))}
        </div>
        <div className="links-top flex gap-6 text-sm ">
          <div className="hover:underline">Terms of Use</div>
          <div className="hover:underline">Privacy Policy</div>
          <div className="hover:underline">Jobs</div>
        </div>
        <div className="links-bottom flex gap-6 text-sm ">
          <div className="hover:underline">Contact</div>
          <div className="hover:underline">Help</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
