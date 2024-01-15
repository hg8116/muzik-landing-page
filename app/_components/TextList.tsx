"use client"

import Link from "next/link"
import { FC } from "react"

interface TextListProps {
  content: {
    heading: string
    links: string[]
  }
}

const TextList: FC<TextListProps> = ({ content }) => {
  const list = content.links

  return (
    <div className="w-40">
      <div className="text-[#0C0C0C] font-[800] tracking-tighter">
        {content.heading}
      </div>
      {list.map((el, ind) => (
        <div className="text-sm my-2 hover:underline" key={ind}>
          <Link href="/">{el}</Link>
        </div>
      ))}
    </div>
  )
}

export default TextList
