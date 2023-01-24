import React from 'react'
import styles from '../style'
import { logo0, logo1, logo2, logo3, logo4, logo5} from "../assets"

const Stats = () => {
  return (
    <div className={`flex ${styles.flexCenter} mt-[2rem] flex-col xl:px-0 pb-6 sm:px-16 px-6 w-full`}>
    

        <h1 className="flex-1 font-poppins font-semibold ss:text-[17px] text-[13px] text-black ss:leading-[60.8px] leading-[48px]">
          Featured and Mention On: </h1>

      <div className={`flex flex-row justify-center items-center  mt-3  text-black `}>
      <img className='mr-10' src={logo0} alt = "Fitness training" />
        <img className='mr-10' src={logo3} alt="Fitness training" />    
        <img className='mr-10' src={logo1} alt="Fitness training" />    
        <img className='mr-10' src={logo2} alt="Fitness training" />    
        <img className='mr-10' src={logo4} alt="Fitness training" />            
        <img  src={logo5} alt="Fitness training" />    
      </div>


    </div>
  )
}

export default Stats