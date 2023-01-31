import React from 'react'
import styles from '../style'
import { logo0, logo1, logo2, logo3, logo4, logo5} from "../assets"

const Stats = () => {
  return (
    <div className={`flex ${styles.flexCenter} mt-[5rem] mb-[3rem] xs:pb-1 flex-col xl:px-0 pb-6 sm:px-16 px-6 w-full`}>
    

        <h1 className="flex-1 font-poppins font-semibold ss:text-[17px] text-[13px] text-black ss:leading-[60.8px] leading-[48px]">
          Featured and Mention On: </h1>

      <div className={`flex flex-row justify-center items-center xs:mt-1  mt-3  text-black w-full`}>
        <img className='xs:mr-2 mr-10 xs:w-[17%]' src={logo0} alt = "Fitness training" />
        <img className='xs:mr-2 mr-10 xs:w-[17%]' src={logo3} alt="Fitness training" />    
        <img className='xs:mr-2 mr-10 xs:w-[17%]' src={logo1} alt="Fitness training" />    
        <img className='xs:mr-2 mr-10 xs:w-[17%]' src={logo2} alt="Fitness training" />    
        <img className='xs:mr-2 mr-10 xs:w-[17%]' src={logo4} alt="Fitness training" />            
        <img className='xs:w-[17%]' src={logo5} alt="Fitness training" />    
      </div>


    </div>
  )
}

export default Stats