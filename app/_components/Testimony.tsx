"use client"

import Image, { StaticImageData } from "next/image"
import Card from "./Card"
import TextCombo from "./TextCombo"
import { TestimonyContent } from "@/utils/constants"

const Testimony = () => {
  const userCards: {
    [key: string]: {
      userText: string
      userImg: StaticImageData
      userName: string
      userRole: string
    }
  } = TestimonyContent.userCards

  const textCombos: {
    [key: string]: {
      comboIcon: StaticImageData
      heading: string
      subheading: string
    }
  } = TestimonyContent.textCombos
  return (
    <div
      className="flex flex-col bg-[#0C0C0C] text-[#ebebebe3] py-60 justify-center items-center  relative"
      id="community">
      <Image
        src="/assets/earth.png"
        height={1000}
        width={1000}
        alt="earth"
        className="absolute -right-0 -top-20 -z-5"
      />
      <div className="testimony-container flex items-center gap-60">
        <div
          className="left-side flex flex-col items-start"
          data-aos="fade-right"
          data-aos-duration="2000">
          <div className="text-5xl font-abel font-[800]">
            What <span className=" text-[#0033FF]">creators</span>
            <br /> are saying <br /> about Muzik
          </div>
          <div className="font-nonito text-lg text-[#958A8A] font-[500] mt-2">
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit. Augue tellus urna, mi velit
            <br /> diam. Turpis diam amet massa id.
          </div>
          <button className="border-none text-sm mb-10 rounded-full py-2 px-8 font-nonito text-[#ffffffc0] bg-[#0033FF] mt-8 hover:text-black hover:bg-red-400 transition-all duration-300">
            TRY IT NOW
          </button>
        </div>
        <div className={`right-side flex flex-col gap-10`}>
          <div
            className="first-row flex gap-10 z-10"
            data-aos="fade-left"
            data-aos-duration="2200">
            <Card
              userText={userCards["card1"].userText}
              userImg={userCards["card1"].userImg}
              userName={userCards["card1"].userName}
              userRole={userCards["card1"].userRole}
            />
            <Card
              userText={userCards["card2"].userText}
              userImg={userCards["card2"].userImg}
              userName={userCards["card2"].userName}
              userRole={userCards["card2"].userRole}
            />
          </div>
          <div
            className="second-row flex pl-20 gap-10 z-10"
            data-aos="fade-left"
            data-aos-duration="2400">
            <Card
              userText={userCards["card3"].userText}
              userImg={userCards["card3"].userImg}
              userName={userCards["card3"].userName}
              userRole={userCards["card3"].userRole}
            />
            <Card
              userText={userCards["card4"].userText}
              userImg={userCards["card4"].userImg}
              userName={userCards["card4"].userName}
              userRole={userCards["card4"].userRole}
            />
          </div>
        </div>
      </div>
      <div
        className="text-4xl font-nonito mt-80 mb-20 font-[800] z-10"
        data-aos="fade-up"
        data-aos-duration="2200">
        As good as it sounds
      </div>
      <div
        className="text-section flex gap-40"
        data-aos="fade-up"
        data-aos-duration="2200">
        {Object.keys(textCombos).map((key) => {
          const combo = textCombos[key]
          return (
            <TextCombo
              key={key}
              comboIcon={combo.comboIcon}
              heading={combo.heading}
              subheading={combo.subheading}
            />
          )
        })}
      </div>
      <div></div>
    </div>
  )
}

export default Testimony
