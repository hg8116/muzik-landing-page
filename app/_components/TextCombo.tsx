"use client"

import { FC } from "react"
import Image, { StaticImageData } from "next/image"

interface TextComboProps {
  comboIcon: StaticImageData
  heading: string
  subheading: string
}

const TextCombo: FC<TextComboProps> = ({ comboIcon, heading, subheading }) => {
  return (
    <div className="text-combo flex flex-col text-center md:text-left items-center md:items-start gap-2 md:gap-4 max-w-60">
      <Image src={comboIcon} height={40} width={40} alt="volumeup" />
      <div className="text-nonito text-2xl font-[800] text-[#ebebebbe]">
        {heading}
      </div>
      <div className="text-sm font-thin text-[#ebebebe3]">{subheading}</div>
    </div>
  )
}

export default TextCombo
