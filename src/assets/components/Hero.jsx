import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col'>
      <div className="top  flex justify-between  ">
        <div className="leftsection flex flex-col gap-4  h-screen bg-gray-400 px-10 w-[60%]">
        <p className='text-orange-950 text-3xl mt-80 font-semibold ml-32'>404</p>
        <h1 className='w-[55%] text-4xl font-semibold ml-32 '>Sorry,we can't find the page you're lokking for... </h1>
      </div>
      <div className="rightsection  mt-80 ">
        <button className='w-[616px] bg-orange-500 h-[40%] mt-60  border-none font-semibold text-xl'>Browse the homepage</button>
      </div>
      </div>
    </div>
  )
}

export default Hero
