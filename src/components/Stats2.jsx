import React from 'react'



const Stats2 = () => {
  return (
      <div className={`flex items-center md:h-[258px] h-[158px]  flex-row xl:px-20 ss:px-20 px-6 w-full`}>

          <div className='flex justify-between flex-row items-center w-full '>
          <div className={`flex flex-col items-center  text-white `}>
                  <h1 className='uppercase font-Oswald font-semibold text-[#FFA849] ss:text-[50px] text-[10px]'>+22,000</h1>
                  <h4 className='uppercase font-Oswald font-semi text-[#FFFF] ss:text-[20px] text-[10px]'>Total Client Weight Loss</h4>
          </div>

              <div className={`flex flex-col items-center   text-white `}>
                  <h1 className='uppercase font-Oswald font-semibold text-[#FFA849] ss:text-[50px] text-[10px]'>800+</h1>
                  <h4 className='uppercase font-Oswald font-semi text-[#FFFF] ss:text-[20px] text-[10px]'>Positive Reviews</h4>
              </div>

              <div className={`flex flex-col items-center   text-white `}>
                  <h1 className='uppercase font-Oswald font-semibold text-[#FFA849] md:text-[50px] text-[10px]'>88%</h1>
                  <h4 className='uppercase font-Oswald font-semi text-[#FFFF] ss:text-[20px] text-[10px]'>Success Rate</h4>
              </div>

              <div className={`flex flex-col items-center   text-white `}>
                  <h1 className='uppercase font-Oswald font-semibold text-[#FFA849] md:text-[50px] text-[1qpx]'>+1,000</h1>
                  <h4 className='uppercase font-Oswald font-semi text-[#FFFF] md:text-[20px] text-[10px]'>Transformations in Under 2 Years</h4>
              </div>
          </div>
      </div>
  )
}

export default Stats2