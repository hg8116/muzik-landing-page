"use client"

import { FC } from "react"
import Image, { StaticImageData } from "next/image"

interface CardProps {
  userText: string
  userImg: StaticImageData
  userName: string
  userRole: string
}

const Card: FC<CardProps> = ({ userText, userImg, userName, userRole }) => {
  return (
    <div className="card bg-[#202020] text-[#ebebebcc] rounded-[3px] p-[28px] flex flex-col gap-[25px] w-[290px] h-[216px]">
      <div className="font-nonito font-[600]">{userText}</div>
      <div className="user-tag flex gap-3 justify-start items-center">
        <div className="user-img">
          <Image src={userImg} height={40} width={40} alt="user1" />
        </div>
        <div className="user-text flex flex-col justify-center items-start">
          <div className="user-name text-sm font-inter">{userName}</div>
          <div className="user-role text-xs">{userRole}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
