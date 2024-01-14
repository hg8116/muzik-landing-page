"use client"

const Jobs = () => {
  return (
    <div className="jobs-container relative flex flex-col items-center justify-center mb-10">
      <div className="absolute top-0 left-0 h-1/2 w-full bg-[#0C0C0C] -z-1"></div>
      <div
        className="flex flex-col items-center justify-center text-center rounded-3xl bg-gradient-to-r from-purple-700 text-[#ebebebe3] via-indigo-700 to-red-500  py-20 mx-10 w-4/6 gap-6 z-10"
        data-aos="zoom-in"
        data-aos-duration="1000">
        <div className="text-4xl font-nonito font-[800] z-10">
          Come change the way
          <br /> people make music
        </div>
        <button className="border-[1px] text-sm rounded-full py-2 px-8 font-nonito text-[#ffffffc0] bg-transparent hover:bg-white/50 transition-all duration-300 hover:text-white ">
          JOBS AT MUZIK
        </button>
      </div>
    </div>
  )
}

export default Jobs
