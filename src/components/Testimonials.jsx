import React from 'react'
import styles from '../style'
import { Avatar1, Avatar } from '../assets'

const Testimonials = () => {
    return (
        <section className='flex flex-row justify-center items-center bg-[#D3F4F2] pt-[1rem]  w-full  pb-[3rem] mb-20  '>

            <div className={`flex flex-1  flex-col xl:px-0 sm:px-16 px-6 w-full relative`}>

                <div className={`flex flex-col justify-center items-center `}>
                    <h1 className="flex-1 font-Oswald uppercase font-semi ss:text-[28px] text-[13px] text-black ss:leading-[50.8px] leading-[48px]">
                        Testimonials</h1>
                    <h4 className='font-Oswald uppercase font-semibold ss:text-[38px] text-[11.5px] text-black ss:leading-[50.8px] leading-[48px]'>What&apos;s Difference</h4>
                </div>


<div className='flex flex-row justify-around items-center mt-10 '>

<div className='bg-white flex flex-row w-[30rem] p-5 border-l-[0.3rem] border-l-[#FFA849] items-start'>
<img className='w-[58px] mr-3 pt-1 object-contain bg-repeat justify-start flex items-start' src={Avatar1} alt='Testimonial fitness' />
<div className='flex flex-col'>
<p className='max-w-[320px]'>
Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. <br/>
</p>
<h6 className='mt-3'>Harold Russell Consultant</h6>
</div>
</div>



<div className='bg-white flex flex-row w-[30rem] p-5 border-l-[0.3rem] border-l-[#FFA849] items-start'>
    <img className='w-[58px] mr-3 pt-1 object-contain bg-repeat justify-start flex items-start' src={Avatar1} alt='Testimonial fitness' />
    <div className='flex flex-col'>
           <p className='max-w-[320px]'>
                                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
          <h6 className='mt-3'>Harold Russell Consultant</h6>
      </div>
 </div>



</div>

<div className='flex flex-row w-full justify-around items-center pb-[5rem] relative'>
<div className='flex flex-row w-[50%] justify-around items-center h-24 bg-[#FFA849] absolute -bottom-20'>
                        <div className='flex justify-between flex-row items-center w-full '>
                            <div className={`flex flex-col items-center p-5 `}>
                                <h1 className='uppercase font-Oswald font-semibold text-[#FFFF] ss:text-[35px] text-[10px]'>80+</h1>
                                <h4 className='uppercase font-Oswald font-semi text-[#FFFF] ss:text-[16px] text-[10px]'>Countries Coverage</h4>
                            </div>


                            <div className={`flex flex-col items-center p-5 `}>
                                <h1 className='uppercase font-Oswald font-semibold text-[#FFFF] ss:text-[35px] text-[10px]'>99%</h1>
                                <h4 className='uppercase font-Oswald font-semi text-[#FFFF] ss:text-[16px] text-[10px]'>Client Satisfaction</h4>
                            </div>

                            <div className={`flex flex-col items-center p-5 `}>
                                <h1 className='uppercase font-Oswald font-semibold text-[#FFFF] ss:text-[35px] text-[10px]'>4k</h1>
                                <h4 className='uppercase font-Oswald font-semi text-[#FFFF] ss:text-[16px] text-[10px]'>Client </h4>
                            </div>


                            <div className={`flex flex-col items-center p-5 `}>
                                <h1 className='uppercase font-Oswald font-semibold text-[#FFFF] ss:text-[35px] text-[10px]'>10</h1>
                                <h4 className='uppercase font-Oswald font-semi text-[#FFFF] ss:text-[16px] text-[10px]'>Expertise </h4>
                            </div>




                            </div>
</div>
</div>
</div>
</section>
    )
}

export default Testimonials