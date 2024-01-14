"use client"

import Link from "next/link"

const TextList = () => {
  const list = [
    "Features",
    "About Muzik Studio",
    "Managing Your Production Library",
    "Collaborating with Baewatch",
  ]

  return (
    <div>
      <div className="text-[#0C0C0C] font-[800] tracking-tighter">STUDIO</div>
      {list.map((el, ind) => (
        <div className="text-sm my-2 hover:underline" key={ind}>
          <Link href="/">{el}</Link>
        </div>
      ))}
    </div>
  )
}

export default TextList
