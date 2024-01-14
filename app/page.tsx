"use client"

import Featured from "./_components/Featured"
import Footer from "./_components/Footer"
import Hero from "./_components/Hero"
import Jobs from "./_components/Jobs"
import Navbar from "./_components/Navbar"
import Plugins from "./_components/Plugins"
import Sounds from "./_components/Sounds"
import Studio from "./_components/Studio"
import Testimony from "./_components/Testimony"
import { useEffect } from "react"
//@ts-ignore
import AOS from "aos"
import "aos/dist/aos.css"

export default function Home() {
  useEffect(() => {
    AOS.init() // Initialize AOS
  }, [])
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Sounds />
      <Plugins />
      <Studio />
      <Testimony />
      <Jobs />
      <Footer />
    </>
  )
}
