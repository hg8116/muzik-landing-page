"use client"

import Image from "next/image"
//@ts-ignore
import { Link as ScrollLink } from "react-scroll"

const Navbar = () => {
  return (
    <div
      className={`navbar text-sm flex justify-between px-20 py-1 items-center bg-transparent font-abel gap-10 z-10 absolute top-0 left-0 right-0
      `}
      role="navigation">
      <div className="left-side flex">
        <div className="logo-container">
          <Image
            src="/assets/logo.jpg"
            className="mix-blend-multiply"
            height={70}
            width={70}
            alt="muzik-logo"
          />
        </div>
        <div className="links-container flex gap-10 ml-20 items-center">
          <ScrollLink
            to="studio"
            spy={true}
            smooth={true}
            duration={1500}
            className="hover:underline cursor-pointer">
            STUDIO
          </ScrollLink>
          <ScrollLink
            to="community"
            spy={true}
            smooth={true}
            duration={1500}
            className="hover:underline cursor-pointer">
            COMMUNITY
          </ScrollLink>
          <ScrollLink
            to="sounds"
            spy={true}
            smooth={true}
            duration={1500}
            offset={-70}
            className="hover:underline cursor-pointer">
            SOUNDS
          </ScrollLink>
          <ScrollLink
            to="plugin"
            spy={true}
            smooth={true}
            duration={1500}
            className="hover:underline cursor-pointer">
            PLUGIN
          </ScrollLink>
          <ScrollLink
            to="blog"
            spy={true}
            smooth={true}
            duration={1500}
            className="hover:underline cursor-pointer">
            BLOG
          </ScrollLink>
        </div>
      </div>
      <div className="right-side flex gap-10 text-white">
        <button className="hover:text-gray-300 transition-all duration-300">
          LOGIN
        </button>
        <button className="signup border-2 border-none rounded-full py-2 px-8 bg-white/25 backdrop-blur-sm hover:bg-white/50 transition-all duration-300">
          SIGNUP
        </button>
      </div>
    </div>
  )
}

export default Navbar
