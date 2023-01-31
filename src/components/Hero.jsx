import React from 'react'
import styles from '../style'
import { model} from "../assets"
import GetStarted from "./GetStarted"

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row xs:py-0 flex-col sm:py-0 py-6 `}>
    <div className={`flex flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 w-full`}>

        <div className="flex flex-row justify-between items-center ">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[22px] text-[20px] text-black ss:leading-[60.8px] leading-[48px]">
            LET'S TAKE <br className=" sm:block " />{" "}
            <span className="text-[#FFA849] ss:text-[72px] text-[50px]">CHALLENGE</span>{" "}
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] xs:text-[14px] mt-5 text-black `}>
          Upgrade your style staples with this week's most hyped designs Give in to those new-season need-new-clothes cravings with our range of T-shirts, jeans and jackets.
        </p>

        <button className='bg-[#FFA849] hover:bg-[#eb8d29] text-white font-bold py-2 px-7 mt-6 rounded-[5px]'> Get Started</button>

        </div>

      <div className={`flex-1 flex ${styles.flexCenter}  xs:mt-0 xs:mb-0 md:my-0 my-8 relative`}>
        <img src={model} alt="billing" className="w-[100%] xs:h-[50vh] h-[100%] relative z-[5] justify-end items-end object-contain" />


      </div>

      <div className={` ss:flex hidden md:mr-4 mr-0  ${styles.flexEnd} flex-col xl:px-0 sm:px-0 px-6`}>
        <GetStarted />
      </div>


    </section>
  )
}

export default Hero