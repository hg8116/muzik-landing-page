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
  const footerContent = FooterContent
  return (
    <div
      className="footer-container bg-[#ffffffb3] flex flex-col-reverse items-center md:items-start text-center md:text-left md:flex-row justify-center gap-[150px] my-20 text-[#606060]
  "
      id="blog"
      data-aos="fade-up"
      data-aos-duration="1500">
      <div className="logo-div flex flex-col items-center md:items-start gap-2">
        <Image src="/assets/logo.jpg" alt="muzik-logo" height={35} width={35} />
        <div className="text-sm">2024 Muzik.com All Rights Reserved</div>
      </div>
      <div className="center-links flex flex-col gap-10">
        <div className="upper-links flex flex-col md:flex-row gap-10 md:gap-[100px]">
          <TextList content={footerContent.row1col1} />
          <TextList content={footerContent.row1col2} />
          <TextList content={footerContent.row1col3} />
        </div>
        <div className="lower-links flex flex-col md:flex-row gap-10 md:gap-[100px]">
          <TextList content={footerContent.row2col1} />
          <TextList content={footerContent.row2col2} />
          <TextList content={footerContent.row2col3} />
        </div>
      </div>
      <div className="socials-container flex flex-col items-center md:items-start text-center md:text-start gap-6">
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
          <div className="hover:underline hover:cursor-pointer">
            Terms of Use
          </div>
          <div className="hover:underline hover:cursor-pointer">
            Privacy Policy
          </div>
          <div className="hover:underline hover:cursor-pointer">Jobs</div>
        </div>
        <div className="links-bottom flex gap-6 text-sm ">
          <div className="hover:underline hover:cursor-pointer">Contact</div>
          <div className="hover:underline hover:cursor-pointer">Help</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
