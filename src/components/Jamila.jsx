import React from 'react'
import styles from '../style'
import { left, } from "../assets"

const Jamila = () => {
  return (
    <section id='Training' className={`flex md:flex-row flex-col sm:py-10 py-6 `}>
    
      <div className={`flex-0.5 flex  md:my-0 my-8 relative`}>
        <img src={left} alt="billing" className="w-full relative z-[5] justify-start items-start object-contain" />
      </div>
      
      <div className={`flex flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 w-full`}>

        <div className="flex flex-col justify-start items-start ">
            <h1 className="flex-1 font-Oswald font-semibold ss:text-[38px] text-[13px] text-black ss:leading-[50.8px] leading-[48px]">
              Jamila Shamim </h1>
            <h4 className='uppercase font-Oswald font-semibold ss:leading-[40.8px] leading-[48px]'>Senior Trainer</h4>
            <h6> </h6>
        </div>

      <p className={`${styles.paragraph}  mt-5 text-black `}>
          Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. </p>
      <p className={`${styles.paragraph}  mt-5 text-black `}>
          Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. </p>
      <p className={`${styles.paragraph}  mt-5 text-black `}>
          Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret </p>

        <button className='bg-[#FFA849] hover:bg-[#eb8d29] text-white  font-bold py-2 px-7 mt-6 rounded-[5px] uppercase'> Book an appointment</button>

      </div>






    </section>
  )
}

export default Jamila