import React from 'react'
import styles from '../style'
import { right, } from "../assets"

const EducationTraining = () => {
  return (
    <section id='Jamila' className={`flex md:flex-row flex-col sm:py-20 py-6 `}>

      <div className={`flex flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 w-full`}>

        <div className="flex flex-col justify-start items-start ">
          <h1 className="flex-1 font-Oswald uppercase font-semibold ss:text-[30px] text-[13px] text-black ss:leading-[50.8px] leading-[48px]">
            Education and Training</h1>
        </div>

        <div className="flex flex-col justify-start items-start mt-[0.5rem]">
          <h4 className='uppercase font-Oswald font-semibold ss:leading-[40.8px] leading-[48px] bg-[#FFA849] my-2 rounded-[2px] py-0 px-2.5'>Education</h4>

          <h1 className="flex-1 font-Oswald uppercase font-semibold ss:text-[20px] text-[12px] text-black ss:leading-[50.8px] leading-[48px]">
            One advanced diverted domestic</h1>
          <h4 className='uppercase font-Oswald font-semibold ss:leading-[40.8px] leading-[48px] text-[#313131] opacity-50 '>University of test state.</h4>
          <h6> </h6>
          <p className={`${styles.paragraph}  mt-2 text-black `}>
            Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard </p>
        </div>

        <div className="flex flex-col justify-start items-start mt-[0.5rem]">
          <h4 className='uppercase font-Oswald font-semibold ss:leading-[40.8px] leading-[48px] bg-black text-[#ffff] my-2 rounded-[2px] py-0 px-2.5'>Education</h4>

          <h1 className="flex-1 font-Oswald uppercase font-semibold ss:text-[20px] text-[12px] text-black ss:leading-[50.8px] leading-[48px]">
            One advanced diverted domestic</h1>
          <h4 className='uppercase font-Oswald font-semibold ss:leading-[40.8px] leading-[48px] text-[#313131] opacity-50 '>University of test state.</h4>
          <p className={`${styles.paragraph}  mt-2 text-black `}>
            Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard </p>
        </div>

        <div className="flex flex-col justify-start items-start mt-[0.5rem]">
          <h4 className='uppercase font-Oswald font-semibold ss:leading-[40.8px] leading-[48px] bg-[#FFA849] my-2 rounded-[2px] py-0 px-2.5'>Education</h4>

          <h1 className="flex-1 font-Oswald uppercase font-semibold ss:text-[24px] text-[12px] text-black ss:leading-[50.8px] leading-[48px]">
            One advanced diverted domestic</h1>
          <h4 className='uppercase font-Oswald font-semibold ss:leading-[40.8px] leading-[48px] text-[#313131] opacity-50 '>University of test state.</h4>
          <h6> </h6>
          <p className={`${styles.paragraph}  mt-2 text-black `}>
            Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard </p>
        </div>

      </div>

      <div className={`flex-0.5 flex  md:my-0 my-8 relative`}>
        <img src={right} alt="billing" className="w-full relative z-[5] justify-start items-start object-contain" />
      </div>

    </section>
  )
}

export default EducationTraining