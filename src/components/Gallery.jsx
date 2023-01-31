import React from 'react'
import { Gallery0, Gallery1, Gallery2, Gallery3, Gallery4, Gallery5 } from "../assets"

const Gallery = () => {
  return (
    <section id='Gallery' className={`flex flex-col sm:py-10 py-6 `}>
    <div className='flex flex-col justify-center items-center mb-6'>
        <h4 className='font-Oswald font-semi text-[#FFA849] ss:text-[20px] text-[20px] items-center'>MY CLIENTS GET GREAT RESULTS</h4>
        <h2 className='text-center flex-1 font-Oswald font-semibold ss:text-[38px] text-[20px] text-black ss:leading-[49.8px] leading-[48px]'>Unbelievable Results, <br/> Minimum Effort</h2>
    </div>

<div className='w-[80%] justify-center items-center m-auto'>
      <div className='container m-auto grid sm:grid-cols-3 ss:grid-cols-2 gap-4'>
        <img class="rounded-t-lg hover:scale-95 ease-in-out duration-300" src={Gallery0} alt="Gallery-fitness" />


        <img class="rounded-t-lg hover:scale-95 ease-in-out duration-300" src={Gallery1} alt="Gallery-fitness" />

        <img class="rounded-t-lg hover:scale-95 ease-in-out duration-300" src={Gallery2} alt="Gallery-fitness" />
        </div>
        <div className='bg-black flex my-5 h-[70px] justify-center items-center w-full rounded-[0.7rem]'>
          <h3 className='flex items-center justify-center font-Oswald font-semi ss:text-[30px] text-[20px] text-[#FFA849]' >An Average Client can Lose 35 Pounds in Just 2 Months</h3>
</div>
      <div className='container m-auto grid sm:grid-cols-3 ss:grid-cols-2 gap-4'>
        <img class="rounded-t-lg hover:scale-95 ease-in-out duration-300" src={Gallery3} alt="Gallery-fitness" />

        <img class="rounded-t-lg hover:scale-95 ease-in-out duration-300" src={Gallery4} alt="Gallery-fitness" />
        <img class="rounded-t-lg hover:scale-95 ease-in-out duration-300" src={Gallery5} alt="Gallery-fitness" />

    </div>
      </div>
    </section>
  )
}

export default Gallery